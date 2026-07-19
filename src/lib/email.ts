import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isEmailServiceConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!isEmailServiceConfigured()) {
    throw new Error(
      'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      message: data.message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
