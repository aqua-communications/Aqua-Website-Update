import { Link } from 'react-router-dom';
import { team } from '../data/team';

function TeamCard({ member, carousel = false }) {
  return (
    <li className={carousel ? 'team-carousel-card group shrink-0' : 'group'}>
      <div className="aspect-[4/5] rounded-xl overflow-hidden bg-black/5">
        <img
          src={member.photo}
          alt={`${member.name}, ${member.role} at AQUA Innovations`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          style={member.position ? { objectPosition: member.position } : undefined}
        />
      </div>
      <h3 className="mt-3 text-[1rem] md:text-[1.18rem] font-medium leading-tight tracking-tight group-hover:text-[#0891b2] transition-colors">{member.name}</h3>
      <p className="mt-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.13em] text-black/60">{member.role}</p>
    </li>
  );
}

export default function Team({ compact = true }) {
  return (
    <section className="py-14 md:py-20 text-black overflow-hidden" id="team">
      <div className="aqua-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9 md:mb-11">
          <div>
            <p className="section-eyebrow mb-5">Our Team</p>
            <h2 className="text-[clamp(2.3rem,5.8vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">The minds behind<br /><span className="text-black/35">every experience.</span></h2>
          </div>
          {compact && <Link to="/team" className="text-[12px] font-bold tracking-[0.16em] uppercase border-b border-black/35 pb-1 hover:border-black">Meet the team ↗</Link>}
        </div>
      </div>

      {compact ? (
        <div className="team-carousel" aria-label="AQUA team members">
          <div className="team-carousel-track">
            <ul className="team-carousel-group">
              {team.map((member) => <TeamCard key={member.name} member={member} carousel />)}
            </ul>
            <ul className="team-carousel-group" aria-hidden="true">
              {team.map((member) => <TeamCard key={`duplicate-${member.name}`} member={member} carousel />)}
            </ul>
          </div>
        </div>
      ) : (
        <div className="aqua-container">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-7 md:gap-y-9">
            {team.map((member) => <TeamCard key={member.name} member={member} />)}
          </ul>
        </div>
      )}
    </section>
  );
}
