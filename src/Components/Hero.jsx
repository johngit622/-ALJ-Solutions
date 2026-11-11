import heroImage from "../assets/Image/w.p7.webp";

const STATS = [
  // { value: "120+", label: "Projects Delivered" },
  { value: "99.98%", label: "Uptime Achieved" },
  { value: "24/7", label: "Managed Support" },
  // { value: "14", label: "Countries Served" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt="ALJ Solutions data infrastructure"
          className="h-full w-full object-cover opacity-45"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/92 to-navy/55" />
      <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-aqua/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-bright/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-cyan-bright/25 bg-cyan-bright/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-bright">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-bright" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-bright" />
            </span>
            ALJ Solutions — Innovation, Engineered
          </div>

          <p
            className="reveal mt-6 font-display text-sm tracking-[0.3em] text-aqua/80"
            style={{ transitionDelay: "60ms" }}
          >
            TECHNOLOGY THAT MOVES BUSINESS
          </p>

          <h1
            className="reveal mt-4 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: "120ms" }}
          >
            Enterprise IT, Cloud &amp;{" "}
            <span className="text-gradient">Digital Engineering</span> Solutions
          </h1>

          <p
            className="reveal mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
            style={{ transitionDelay: "180ms" }}
          >
            We design, build, secure and operate the technology that powers
            modern organisations — from custom software and cloud platforms to
            cybersecurity, data intelligence and fully managed IT. Built on
            disciplined engineering and uncompromising delivery standards.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap gap-4"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="rounded-full bg-linear-to-r from-cyan-bright to-teal-med px-7 py-3.5 text-sm font-semibold text-navy transition hover:shadow-[0_0_34px_-4px_rgba(2,234,235,0.75)]"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-bright/60 hover:text-cyan-bright"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-navy/70 px-6 py-7 text-center lg:text-left"
            >
              <div className="font-display text-3xl font-bold text-cyan-bright lg:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs tracking-wide text-slate-400 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
