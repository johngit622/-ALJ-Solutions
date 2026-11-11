import { LogoLockup } from "./Logo";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "Cybersecurity", href: "#services" },
      { label: "Data & AI", href: "#services" },
      { label: "Managed IT", href: "#services" },
      { label: "Networks", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#about" },
      { label: "Industries", href: "#services" },
      { label: "Careers", href: "#contact" },
      { label: "Case Studies", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#services" },
      { label: "Security Advisories", href: "#services" },
      { label: "SLA Overview", href: "#contact" },
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms of Service", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-navy-deep/60">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <LogoLockup />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              ALJ Solutions is an enterprise technology partner delivering
              software engineering, cloud infrastructure, cybersecurity and
              managed IT services across Africa.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {["in", "X", "f", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-slate-400 transition hover:border-cyan-bright/50 hover:text-cyan-bright"
                >
                  {s}
                </a>
              ))}
            </div> */}
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-cyan-bright"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} ALJ Solutions. All rights reserved.
          </p>
          <p className="tracking-[0.2em] text-aqua/70 uppercase">
            Innovation, Engineered
          </p>
        </div>
      </div>
    </footer>
  );
}
