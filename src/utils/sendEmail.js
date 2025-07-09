import emailjs from "@emailjs/browser";

export function sendEmail(formRef) {
  return emailjs.sendForm(
    "YOUR_SERVICE_ID",     // ⬅️ Replace with your EmailJS service ID
    "YOUR_TEMPLATE_ID",    // ⬅️ Replace with your template ID
    formRef.current,
    "YOUR_PUBLIC_KEY"      // ⬅️ Replace with your public key
  );
}