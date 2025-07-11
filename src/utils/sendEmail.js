import emailjs from "@emailjs/browser";

export function sendEmail(formRef) {
  return emailjs.sendForm(
    "service_x2b8ex9",     // ⬅️ Replace with your EmailJS service ID
    "template_uokncdf",    // ⬅️ Replace with your template ID
    formRef.current,
    "Zmrny_Qj3qwgY6rPU"      // ⬅️ Replace with your public key
  );
}