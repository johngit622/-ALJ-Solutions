import CardStack from "./CardStack";
import { SectionHeading } from "./Section";

const POINTS = [
  {
    title: "Engineering Discipline",
    text: "Documented architecture, code review gates, CI/CD pipelines and measurable delivery milestones on every engagement.",
  },
  {
    title: "Security by Default",
    text: "Zero-trust principles, encrypted pipelines and continuous monitoring built into the foundation, not bolted on later.",
  },
  {
    title: "Scalable Foundations",
    text: "Cloud-native platforms designed to grow with your volume, headcount and regulatory footprint without re-platforming.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-aqua/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Your Long-Term"
            highlight="Technology Partner"
            intro="ALJ Solutions is a technology engineering and managed services company serving commercial, industrial and institutional clients. We specialise in custom software development, cloud infrastructure, cybersecurity, data & AI, network systems and end-to-end IT support."
          />
          <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-slate-300/85">
            Our teams work as an extension of yours — combining verified
            delivery frameworks, transparent documentation and regional support
            coverage across Africa. We are committed to dependable execution and
            adherence to agreed commercial, security and regulatory standards.
          </p>

          <div className="mt-10 space-y-5">
            {POINTS.map((p, i) => (
              <div
                key={p.title}
                className="reveal flex gap-4 rounded-xl border border-white/8 bg-white/2 p-5 transition hover:border-cyan-bright/30 hover:bg-white/4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-bright/10 text-cyan-bright">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path
                      d="M20 6 9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CardStack />
      </div>
    </section>
  );
}
