// netlify/functions/contact.js

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    // Parse JSON safely
    let data = {};
    try {
      data = JSON.parse(event.body || "{}");
    } catch {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: "bad_json" }) };
    }

    const {
      name = "",
      email = "",
      phone = "",
      project_type = "",
      message = "",
      captchaToken = "",
      time, // optional
    } = data;

    // --- 1) Verify reCAPTCHA server-side ---
    const secret = process.env.RECAPTCHA_SECRET;
    if (!secret) {
      console.error("Missing RECAPTCHA_SECRET env var");
      return { statusCode: 500, body: JSON.stringify({ ok: false, error: "server_misconfig" }) };
    }

    const captchaResp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: captchaToken }),
    });

    const captchaJson = await captchaResp.json();
    if (!captchaJson.success || (captchaJson.score !== undefined && captchaJson.score < 0.5)) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: "captcha_failed" }) };
    }

    // --- 2) Input validation / normalization ---
    const clean = (s) => String(s).replace(/[\u0000-\u001F\u007F]/g, "").trim();
    const safe = {
      name: clean(name).slice(0, 120),
      email: clean(email).slice(0, 200),
      phone: clean(phone).slice(0, 30),
      project_type: clean(project_type).slice(0, 60),
      message: clean(message).slice(0, 2000),
      time: clean(time || "").slice(0, 100),
    };

    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(safe.email);
    if (!safe.name || !emailOk || !safe.message) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: "invalid_input" }) };
    }

    // --- 3) (Optional) Basic per-IP rate-limit (soft) ---
    const ip =
      event.headers["x-nf-client-connection-ip"] ||
      event.headers["client-ip"] ||
      event.headers["x-forwarded-for"] ||
      "unknown";
    // For stronger limits, plug in Redis/Upstash here.

    // --- 4) Send email via Resend (no extra deps; uses fetch) ---
    const RESEND_API_KEY = process.env.MAIL_PROVIDER_SECRET; // keep this secret in Netlify env
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL; // where you receive the lead
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "no-reply@drpaintinginc.com";

    if (!RESEND_API_KEY || !TO_EMAIL) {
      console.error("Missing MAIL_PROVIDER_SECRET or CONTACT_TO_EMAIL");
      return { statusCode: 500, body: JSON.stringify({ ok: false, error: "server_misconfig" }) };
    }

    const subject = `New Contact: ${safe.name} (${safe.project_type || "General"})`;
    const textBody =
`Name: ${safe.name}
Email: ${safe.email}
Phone: ${safe.phone}
Project Type: ${safe.project_type}
Time: ${safe.time}

Message:
${safe.message}

IP: ${ip}`;

    const htmlBody = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(safe.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safe.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(safe.phone)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(safe.project_type)}</p>
      <p><strong>Time:</strong> ${escapeHtml(safe.time)}</p>
      <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${escapeHtml(safe.message)}</pre>
    `;

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResp.ok) {
      const errText = await resendResp.text();
      console.error("Resend error:", errText);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: "email_failed" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error("Function error:", e);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: "server_error" }) };
  }
};

// Minimally escape HTML for safe email rendering
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}