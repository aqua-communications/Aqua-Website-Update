export default function PageHero({ eyebrow, title, accent, description }) {
  return (
    <section className="bg-[#f5f5f5] text-black pt-32 md:pt-36 pb-10 md:pb-14">
      <div className="aqua-container">
        <p className="section-eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium tracking-[-0.055em] leading-[0.9] uppercase">
          {title} {accent && <span className="text-black/35">{accent}</span>}
        </h1>
        {description && <p className="mt-7 md:mt-9 max-w-2xl text-[1.05rem] md:text-[1.2rem] leading-relaxed text-black/65">{description}</p>}
      </div>
    </section>
  );
}
