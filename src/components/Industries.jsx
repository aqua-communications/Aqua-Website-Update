import { useState } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';

export default function Industries() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  const move = (direction) => setActive((current) => (current + direction + industries.length) % industries.length);

  return (
    <section className="py-14 md:py-20 bg-[#0a0a0a] text-white overflow-hidden" id="industries">
      <div className="aqua-container">
        <div className="flex items-center justify-between gap-6 mb-10 md:mb-14">
          <p className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-white/55">Industries We Serve</p>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/45 tabular-nums">{industry.num} / {String(industries.length).padStart(2, '0')}</span>
        </div>

        <div className="relative min-h-[620px] md:min-h-[680px] rounded-[1.5rem] overflow-hidden bg-white/5">
          <img key={industry.image} src={industry.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 animate-soft-enter" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/52 to-black/15" />

          <div className="relative z-10 min-h-[620px] md:min-h-[680px] flex flex-col justify-between p-7 sm:p-10 md:p-14 lg:p-16">
            <div className="flex flex-wrap gap-2">
              {industries.map((item, index) => (
                <button key={item.name} onClick={() => setActive(index)} className={`min-h-10 rounded-full px-4 border text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] transition-all ${index === active ? 'bg-[#85ffff] border-[#85ffff] text-black' : 'border-white/25 text-white/65 hover:border-white/55 hover:text-white'}`}>{item.name}</button>
              ))}
            </div>

            <div className="max-w-4xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#85ffff] mb-5">{industry.focus}</p>
              <h2 className="text-[clamp(3rem,8vw,8rem)] uppercase font-medium tracking-[-0.06em] leading-[0.86]">{industry.name}</h2>
              <p className="mt-7 max-w-xl text-[1rem] md:text-[1.2rem] leading-relaxed text-white/72">{industry.desc}</p>
              <Link to="/contact" className="inline-flex mt-8 min-h-12 items-center rounded-full border border-white/35 px-6 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all">Discuss your sector ↗</Link>
            </div>

            <div className="flex justify-end gap-2 mt-10">
              <button onClick={() => move(-1)} aria-label="Previous industry" className="h-12 w-12 rounded-full border border-white/25 hover:border-white flex items-center justify-center">←</button>
              <button onClick={() => move(1)} aria-label="Next industry" className="h-12 w-12 rounded-full border border-white/25 hover:border-white flex items-center justify-center">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
