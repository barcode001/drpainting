// import emailjs from "@emailjs/browser";

// export function sendEmail(formRef) {
//   return emailjs.sendForm(
//     "service_x2b8ex9",     // ⬅️ Replace with your EmailJS service ID
//     "template_uokncdf",    // ⬅️ Replace with your template ID
//     formRef.current,
//     "Zmrny_Qj3qwgY6rPU"      // ⬅️ Replace with your public key
//   );
// }




import emailjs from "@emailjs/browser";

export function sendEmail(formRef, captchaToken) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS environment variables");
  }

  // Ensure captcha token is passed
  const formEl = formRef.current ?? formRef;
  let recaptchaInput = formEl.querySelector('input[name="g-recaptcha-response"]');
  if (!recaptchaInput) {
    recaptchaInput = document.createElement("input");
    recaptchaInput.type = "hidden";
    recaptchaInput.name = "g-recaptcha-response";
    formEl.appendChild(recaptchaInput);
  }
  recaptchaInput.value = captchaToken || "";

  return emailjs.sendForm(serviceId, templateId, formEl, publicKey);
}