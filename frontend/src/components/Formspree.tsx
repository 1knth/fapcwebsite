import { useForm, ValidationError } from '@formspree/react';

const inputClass = "rounded-2xl border border-slate-300 bg-[#f4f1ed] px-4 py-3 text-lg text-slate-900 shadow-inner outline-none transition placeholder:text-slate-500 focus:border-slate-700 focus:bg-white focus:ring-4 focus:ring-slate-200";
const labelClass = "flex flex-wrap items-center gap-y-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700";
const errorClass = "text-sm font-semibold text-red-700";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwvjdddp");

  if (state.succeeded) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
        <p className="text-3xl font-semibold tracking-tight text-slate-900">Thanks for reaching out.</p>
        <p className="mt-3 text-lg leading-relaxed text-slate-700">We received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name <span className="ml-2 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-bold normal-case tracking-normal text-slate-700">optional</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            className={inputClass}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className={errorClass} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="ml-2 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-bold normal-case tracking-normal text-slate-700">optional</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="(416) 555-1234"
            className={inputClass}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className={errorClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="ml-1 text-base font-bold text-red-700" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message <span className="ml-1 text-base font-bold text-red-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us how we can help you..."
          className={`${inputClass} resize-none leading-relaxed`}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className={errorClass} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}

export default ContactForm
