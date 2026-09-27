import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { sendContactEmail } from '../lib/email';
import './ContactSection.css';

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

// Navy "Start here" section with the enquiry form (sent via EmailJS).
// Rendered with id="contact" so any page can link to it: CONTACT_URL.
export default function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (field: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const submit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await sendContactEmail(form);
      setStatus('success');
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-gl" />
      <div className="contact-pg" />
      <div className="contact-inner">
        <div>
          <div className="contact-tag">{"Start here"}</div>
          <div className="contact-heading">
            {"If you recognise"}
            <br />
            {"the problem,"}
            <br />
            <span>{"let's talk about it."}</span>
          </div>
          <div className="contact-body">
            {"Tell us what you're dealing with. We'll follow up by email or phone with whichever is the better next step. The case studies closest to your situation, or a short conversation. Either way, it starts with the same form."}
          </div>
          <div className="what-it-is">
            <div className="wit-label">{"If it turns into a conversation"}</div>
            <div className="wit-row">
              <div className="wit-check" />
              <div className="wit-text">
                <strong>{"30 minutes."}</strong>
                {" No more unless you want to continue."}
              </div>
            </div>
            <div className="wit-row">
              <div className="wit-check" />
              <div className="wit-text">
                <strong>{"No deck."}</strong>
                {" We listen first."}
              </div>
            </div>
            <div className="wit-row">
              <div className="wit-check" />
              <div className="wit-text">
                <strong>{"No proposal."}</strong>
                {" We will tell you honestly whether this is something we can help with."}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="contact-card" id="contact-card">
            <div className="cc-head">
              <div className="cc-name">{"Start the conversation"}</div>
              <div className="cc-role">{"See what others miss"}</div>
            </div>
            <form onSubmit={submit}>
              <div className="cc-form">
                <div className="cc-field">
                  <div className="cc-label">{"Your name"}</div>
                  <input className="cc-input" type="text" placeholder="Name" required value={form.name} onChange={update('name')} />
                </div>
                <div className="cc-field">
                  <div className="cc-label">{"Your email"}</div>
                  <input className="cc-input" type="email" placeholder="email@company.com" required value={form.email} onChange={update('email')} />
                </div>
                <div className="cc-field">
                  <div className="cc-label">{"Your phone (optional)"}</div>
                  <input className="cc-input" type="tel" placeholder="Include country code" value={form.phone} onChange={update('phone')} />
                </div>
                <div className="cc-field">
                  <div className="cc-label">{"What you are dealing with"}</div>
                  <textarea className="cc-textarea" placeholder="A few lines is enough. Tell us the situation, or just ask for case studies. We'll read it before we get back to you." required value={form.message} onChange={update('message')} />
                </div>
              </div>
              {status === 'success' && (
                <div className="cc-status success">{"Thanks — we've got it and will follow up soon."}</div>
              )}
              {status === 'error' && (
                <div className="cc-status error">{error}</div>
              )}
              <button className="cc-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? "Sending…" : "Get in touch →"}
              </button>
            </form>
            <div className="cc-pdpa">
              {"We will use your details to follow up by email or phone, with relevant case studies, a conversation, or both. We will not share your information with third parties."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
