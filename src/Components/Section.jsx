export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  center = false,
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="reveal text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">
        {eyebrow}
      </p>
      <h2 className="reveal mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title} <span className="text-cyan-300">{highlight}</span>
      </h2>
      <p className="reveal mt-5 text-base leading-relaxed text-slate-300/85">
        {intro}
      </p>
    </div>
  );
}
