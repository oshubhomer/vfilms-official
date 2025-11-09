import { useState, useEffect } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => setStatus(''), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const showAlert = (message) => {
    alert(message);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    // 🔍 Field Validations
    if (!form.name || !form.email || !form.phone || !form.message) {
      showAlert('⚠️ Please fill in all fields.');
      setStatus('Please fill all fields.');
      return;
    }

    if (!validEmail(form.email)) {
      showAlert('⚠️ Please enter a valid email address.');
      setStatus('Invalid email format.');
      return;
    }

    if (!validPhone(form.phone)) {
      showAlert('⚠️ Please enter a valid phone number (10–15 digits).');
      setStatus('Invalid phone number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        showAlert('✅ Form Submitted Successfully!');
        setStatus('Form Submitted ✅');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        showAlert('❌ Submission failed. Please try again.');
        setStatus('Submission failed. Try again.');
      }
    } catch {
      showAlert('🚫 Network error. Please check your connection.');
      setStatus('Network error.');
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF9F6] text-gray-800 font-sans px-6 md:px-16 py-16">
      {/* Top-right decorative element */}
      <img
        src={`${import.meta.env.BASE_URL}header.png`}
        alt=""
        className="absolute top-0 right-0 w-40 md:w-60 opacity-80 select-none pointer-events-none"
      />

      {/* Bottom-left decorative element */}
      <img
        src={`${import.meta.env.BASE_URL}footer.png`}
        alt=""
        className="absolute bottom-0 left-0 w-52 md:w-72 opacity-90 select-none pointer-events-none"
      />

      {/* Layout */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SECTION */}
        <div className="max-w-md">
          <h2 className="font-display text-[2.2rem] md:text-[2.6rem] text-brand-navy mb-4 leading-tight">
            Join the Story
          </h2>
          <p className="text-gray-800 text-lg mb-10">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <p className="text-gray-700 leading-relaxed text-base">
            Whether you have an idea, a question, or simply want to explore how V can work together,
            V’s just a message away.
            <br />
            Let’s catch up over coffee ☕
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* RIGHT SECTION (Form) */}
        <form
          onSubmit={onSubmit}
          className="bg-white/90 shadow-lg backdrop-blur-sm rounded-xl p-6 md:p-10 max-w-lg mx-auto w-full"
        >
          <p className="font-display text-xl md:text-2xl text-center text-brand-navy mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              name="name"
              placeholder="Your name*"
              value={form.name}
              onChange={onChange}
            />
            <input
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              name="email"
              placeholder="Your email*"
              value={form.email}
              onChange={onChange}
            />
          </div>

          {/* Phone */}
          <input
            className="border border-gray-300 rounded-md p-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            name="phone"
            placeholder="Phone*"
            value={form.phone}
            onChange={onChange}
          />

          {/* Message */}
          <textarea
            className="border border-gray-300 rounded-md p-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            rows="5"
            name="message"
            placeholder="Your message*"
            value={form.message}
            onChange={onChange}
          />

          {/* Submit Button */}
          <button
            disabled={loading}
            className={`mt-6 w-full py-3 rounded-md font-medium text-white transition ${
              loading
                ? 'bg-brand-accent/70 cursor-not-allowed'
                : 'bg-brand-accent hover:opacity-90'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm mt-3 text-center ${
                status.startsWith('Form Submitted') ? 'text-green-700' : 'text-red-600'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 mt-16 text-center text-sm text-gray-800">
        <p>
          <a
            href="mailto:vernia@vannanfilms.co.in"
            className="text-brand-accent hover:underline font-medium"
          >
            vernia@vannanfilms.co.in
          </a>{' '}
          | <span className="text-gray-600">+91 98736 84567</span>
        </p>
      </div>
    </main>
  );
}
