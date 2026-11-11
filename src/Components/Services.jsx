import { SectionHeading } from "./Section";
import {
  IconArrow,
  IconChip,
  IconCloud,
  IconCode,
  IconData,
  IconDevice,
  IconNetwork,
  IconShield,
  IconSupport,
} from "./icons";
import softwareImage from "../assets/Image/w.p3.jpeg";
import cloudImage from "../assets/Image/w.p7.webp";
import securityImage from "../assets/Image/w.p2.jpeg";
import dataImage from "../assets/Image/w.p.jpeg";
import networkImage from "../assets/Image/w.p4.jpeg";
import supportImage from "../assets/Image/w.p6.jpeg";
import hardwareImage from "../assets/Image/w.p2.jpeg";
import transformationImage from "../assets/Image/w.p5.jpeg";

const SERVICES = [
  {
    icon: IconCode,
    image: softwareImage,
    title: "Custom Software Development",
    text: "Web, mobile and enterprise applications engineered to your workflows, from discovery to deployment.",
    tags: ["Web & Mobile", "API Platforms"],
  },
  {
    icon: IconCloud,
    image: cloudImage,
    title: "Cloud Infrastructure & DevOps",
    text: "Cloud migration, Kubernetes, infrastructure-as-code and CI/CD pipelines built for uptime and scale.",
    tags: ["AWS / Azure / GCP", "Kubernetes & IaC"],
  },
  {
    icon: IconShield,
    image: securityImage,
    title: "Cybersecurity & Compliance",
    text: "Threat assessments, penetration testing, SOC monitoring and governance aligned to ISO 27001.",
    tags: ["Zero Trust", "ISO 27001 Ready"],
  },
  {
    icon: IconData,
    image: dataImage,
    title: "Data, Analytics & AI",
    text: "Data pipelines, warehouses, BI dashboards and applied machine learning that turn data into decisions.",
    tags: ["BI & Warehousing", "Applied AI"],
  },
  {
    icon: IconNetwork,
    image: networkImage,
    title: "Networks & Connectivity",
    text: "Structured cabling, SD-WAN, enterprise Wi-Fi and secure site-to-site connectivity across locations.",
    tags: ["SD-WAN", "Enterprise Wi-Fi"],
  },
  {
    icon: IconSupport,
    image: supportImage,
    title: "Managed IT Services",
    text: "24/7 helpdesk, proactive monitoring, patching and asset lifecycle management under clear SLAs.",
    tags: ["24/7 Helpdesk", "SLA Backed"],
  },
  {
    icon: IconChip,
    image: hardwareImage,
    title: "Hardware & Systems Supply",
    text: "Procurement, configuration and deployment of servers, endpoints and data centre equipment.",
    tags: ["Procurement", "Deployment"],
  },
  {
    icon: IconDevice,
    image: transformationImage,
    title: "Digital Transformation",
    text: "Process automation, ERP integration and modernisation roadmaps that retire legacy friction.",
    tags: ["Automation", "ERP Integration"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-navy-soft/40" />
      <div className="absolute inset-0 -z-10 grid-lines opacity-40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Technology Services to Suit"
          highlight="Every Requirement"
          intro="A comprehensive stack of engineering, infrastructure and support capabilities delivered by certified specialists."
          center
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/8 bg-navy/60 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-bright/40 hover:shadow-[0_24px_60px_-28px_rgba(2,234,235,0.55)]"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-bright/10 blur-2xl transition group-hover:bg-cyan-bright/20" />
                <div className="-mx-6 -mt-6 mb-5 h-36 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-bright/20 bg-cyan-bright/8 text-cyan-bright transition group-hover:bg-cyan-bright group-hover:text-navy">
                  <Icon />
                </div>
                <div className="text-[11px] font-semibold tracking-[0.2em] text-aqua/70 uppercase">
                  We Offer
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {svc.text}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/8 pt-4">
                  {svc.tags.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-bright opacity-0 transition group-hover:opacity-100"
                >
                  Enquire <IconArrow />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
