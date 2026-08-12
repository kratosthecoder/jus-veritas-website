"use client";

import { useState, FormEvent } from "react";
import { enquiryInterests, consentText } from "@/lib/data/homepage";

type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(values.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.interest) next.interest = "Please select an area of interest.";
    if (!values.message.trim()) next.message = "Please add a brief message.";
    if (!values.consent) next.consent = "Consent is required before this form can be submitted.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  const inputClasses =
    "mt-1.5 w-full rounded-sm border border-navy/20 bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy focus:outline-none";

  return (
    <section aria-labelledby="enquiry-heading" className="bg-navy">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 id="enquiry-heading" className="text-center font-serif text-2xl font-semibold text-parchment sm:text-3xl">
            Send an Enquiry
          </h2>
          <p className="mt-3 text-center text-sm text-parchment/70">
            Share a few details and our office will get in touch to arrange a
            time to discuss your matter.
          </p>

          {submitted && (
            <div
              role="status"
              className="mt-8 rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-parchment"
            >
              Thank you. Your enquiry has been received and our office will
              contact you shortly.
            </div>
          )}

          <form
            noValidate
            onSubmit={handleSubmit}
            className="mt-8 rounded-md bg-parchment p-6 shadow-md sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-charcoal">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputClasses}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-700">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-charcoal">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="interest" className="text-sm font-medium text-charcoal">
                  Service / Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className={inputClasses}
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={errors.interest ? "interest-error" : undefined}
                >
                  <option value="">Select an option</option>
                  {enquiryInterests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p id="interest-error" className="mt-1.5 text-xs text-red-700">
                    {errors.interest}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClasses}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 shrink-0 rounded-sm border-navy/40 text-navy focus:ring-navy"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <label htmlFor="consent" className="text-xs leading-relaxed text-charcoal/80">
                    {consentText}
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" className="mt-1.5 text-xs text-red-700">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-sm bg-navy px-6 py-3 text-sm font-medium text-parchment transition-colors hover:bg-navy-dark sm:w-auto"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
