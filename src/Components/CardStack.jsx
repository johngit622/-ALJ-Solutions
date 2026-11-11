import { useCallback, useEffect, useRef, useState } from "react";
import engineeringImage from "../assets/Image/w.p7.webp";
import cloudImage from "../assets/Image/w.p6.jpeg";
import securityImage from "../assets/Image/w.p2.jpeg";
import dataImage from "../assets/Image/w.p3.jpeg";

const CARDS = [
  {
    src: engineeringImage,
    title: "Engineering Teams",
    caption: "Cross-functional squads embedded with your business.",
  },
  {
    src: cloudImage,
    title: "Cloud Operations",
    caption: "Automated, monitored and cost-governed infrastructure.",
  },
  {
    src: securityImage,
    title: "Security Operations",
    caption: "24/7 threat monitoring and rapid incident response.",
  },
  {
    src: dataImage,
    title: "Data Intelligence",
    caption: "Governed pipelines feeding decision-ready dashboards.",
  },
];

const STEP_Y = 18; // px each card rises behind the front card
const STEP_SCALE = 0.035; // scale reduction per depth level
const VISIBLE = 3; // depth levels rendered behind the front card

export default function CardStack() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const advance = useCallback(() => {
    setActive((i) => (i + 1) % CARDS.length);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    timer.current = setInterval(advance, 4200);
    return () => clearInterval(timer.current);
  }, [advance, paused]);

  return (
    <div
      className="reveal relative mt-4 mb-16 select-none lg:mb-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -right-8 bottom-10 -z-10 h-56 w-56 rounded-full bg-aqua/20 blur-[90px]" />
      <div
        className="relative w-full"
        style={{ height: "clamp(320px, 42vw, 470px)" }}
        aria-roledescription="carousel"
      >
        {CARDS.map((card, i) => {
          // depth 0 = front card, higher = further back in the stack
          const depth = (i - active + CARDS.length) % CARDS.length;
          const hidden = depth > VISIBLE;
          const translateY = -(depth * STEP_Y);
          const scale = 1 - depth * STEP_SCALE;

          return (
            <div
              key={card.src}
              className="absolute inset-x-0 mx-auto top-[30px] rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                height: "clamp(260px, 34vw, 400px)",
                maxWidth: "min(100%, 560px)",
                zIndex: CARDS.length - depth,
                opacity: hidden ? 0 : 1,
                transform:
                  depth === 0
                    ? "none"
                    : `translateY(${translateY}px) scale(${Number(scale.toFixed(3))})`,
              }}
              aria-hidden={depth !== 0}
            >
              <img
                src={card.src}
                alt={card.title}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent" />
              <div
                className={`absolute inset-x-0 bottom-0 p-6 transition-opacity duration-500 ${
                  depth === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-[11px] font-semibold tracking-[0.24em] text-cyan-bright uppercase">
                  {card.title}
                </div>
                <p className="mt-1.5 max-w-sm text-sm text-slate-200/90">
                  {card.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* indicators */}
      <div className="absolute -bottom-2 left-0 z-20 flex items-center gap-2">
        {CARDS.map((card, i) => (
          <button
            key={card.src}
            onClick={() => setActive(i)}
            aria-label={`Show ${card.title}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active
                ? "w-8 bg-cyan-bright"
                : "w-3 bg-white/20 hover:bg-aqua/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
