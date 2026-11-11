import { useState } from "react";
import { SectionHeading } from "./Section";

const SERVICES = [
  "Custom Software Development",
  "Cloud Infrastructure & DevOps",
  "Cybersecurity & Compliance",
  "Data, Analytics & AI",
  "Networks & Connectivity",
  "Managed IT Services",
  "Hardware & Systems Supply",
  "Other",
];

const DETAILS = [
  {
    label: "Head Office",
    value: "Skyline Mall , Lang'ata rd, Nairobi, Kenya",
    sub: "Mon – Fri, 08:00 – 18:00 EAT",
  },
  {
    label: "Email",
    value: "info@aljsolutions.com",
    sub: "Response within one business day",
  },
  {
    label: "Phone",
    value: "+254 700 000 000",
    sub: "24/7 line for managed clients",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-navy/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-bright/60 focus:ring-2 focus:ring-cyan-bright/20";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 grid-lines opacity-40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Tell Us What You Are"
          highlight="Trying to Build"
          intro="Share a few details and the right specialist will get back to you with next steps."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div className="space-y-4">
            {DETAILS.map((d, i) => (
              <div
                key={d.label}
                className="reveal rounded-2xl border border-white/8 bg-white/2 p-6"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-aqua uppercase">
                  {d.label}
                </div>
                <div className="mt-2 font-display text-lg text-white">
                  {d.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{d.sub}</div>
              </div>
            ))}
            <div className="reveal rounded-2xl border border-cyan-bright/20 bg-linear-to-br from-navy-soft/90 to-navy/70 p-6">
              <div className="font-display text-base font-semibold text-white">
                Need urgent support?
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Managed service clients can raise a priority ticket any time
                through the ALJ service desk.
              </p>
              <a
                href="mailto:support@aljsolutions.com"
                className="mt-4 inline-block text-sm font-semibold text-cyan-bright hover:underline"
              >
                support@aljsolutions.com
              </a>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-white/10 bg-navy-soft/60 p-7 lg:p-10">
            {sent ? (
              <div className="flex h-full min-h-88 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-bright/15 text-cyan-bright">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M20 6 9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  Request received
                </h3>
                <p className="mt-3 max-w-sm text-sm text-slate-400">
                  Thank you for contacting ALJ Solutions. A specialist will
                  review your requirements and respond within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-bright/60 hover:text-cyan-bright"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Full name *
                    </label>
                    <input required className={field} placeholder=" " />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Work email *
                    </label>
                    <input
                      required
                      type="email"
                      className={field}
                      placeholder=" "
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Company
                    </label>
                    <input className={field} placeholder=" " />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Phone
                    </label>
                    <input className={field} placeholder=" " />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Service required
                  </label>
                  <select
                    className={`${field} bg-[#0E1824] transition-none`}
                    defaultValue={SERVICES[0]}
                    style={{ colorScheme: "dark" }}
                  >
                    {SERVICES.map((s) => (
                      <option key={s} className="bg-[#0E1824] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Project details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className={field}
                    placeholder="Tell us about your systems, timelines and goals…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-linear-to-r from-cyan-bright to-teal-med px-7 py-4 text-sm font-semibold text-navy transition hover:shadow-[0_0_34px_-6px_rgba(2,234,235,0.75)]"
                >
                  Submit Enquiry
                </button>
                <p className="text-center text-xs text-slate-500">
                  Your information is handled confidentially and never shared
                  with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
