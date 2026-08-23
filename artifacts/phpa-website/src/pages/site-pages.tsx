import { useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, Clock3, ExternalLink, Mail, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { events } from '@/data/events';
import { opportunities, type Opportunity, type OpportunityKind } from '@/data/opportunities';
import { boardMembers } from '@/data/board';
import { pathways, studyMatch, type Pathway } from '@/data/guide';
import { ArrowLink, NotebookRule, PageFrame, PhotoPlaceholder, SectionHeading, Tag } from '@/components/site';

function Masthead({ kicker, title, body }: { kicker: string; title: ReactNode; body: string }) {
  return <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
    <p className="scribble reveal text-[hsl(var(--muted-foreground))]">{kicker}</p>
    <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-6xl font-bold leading-[.9] tracking-[-.06em] text-[hsl(var(--primary))] md:text-8xl">{title}</h1>
    <p className="reveal reveal-delay-2 mt-7 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">{body}</p>
  </section>;
}

function Home() {
  const nextEvent = events.find((event) => event.featured);
  return <PageFrame>
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div className="reveal">
          <div className="mb-7 flex items-center gap-3">
            <span className="scribble text-[hsl(var(--muted-foreground))]">Santa Monica College</span>
            <span className="h-px w-12 bg-[hsl(var(--accent))]" />
          </div>
          <h1 className="max-w-3xl font-display text-[clamp(4.2rem,10vw,8.5rem)] font-bold leading-[.82] tracking-[-.075em] text-[hsl(var(--primary))]">Find your<br /><span className="relative inline-block text-[hsl(var(--muted-foreground))]">path in<span className="absolute -bottom-2 left-0 h-2 w-full rotate-[-2deg] bg-[hsl(var(--accent))]/75" /></span> healthcare.</h1>
          <p className="mt-9 max-w-lg text-lg leading-8 text-[hsl(var(--muted-foreground))]">PHPA helps SMC students explore healthcare careers, gain hands-on experience, find opportunities, and meet other students figuring it out too.</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href="/join" data-testid="link-hero-join" className="inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-1 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]">Join PHPA <ArrowRight size={17} /></Link>
            <ArrowLink href="/events" testId="link-hero-events">See what's next</ArrowLink>
          </div>
          <p className="mt-7 text-xs tracking-wide text-[hsl(var(--muted-foreground))]">medicine · nursing · PA · dentistry · PT · pharmacy · still figuring it out</p>
        </div>
        <div className="relative min-h-[380px] reveal reveal-delay-2 lg:min-h-[520px]">
          <div className="absolute left-[14%] top-[10%] h-[68%] w-[65%] rotate-[-4deg] border border-[hsl(var(--primary))]/20 bg-[hsl(var(--background))] p-5 paper-shadow">
            <div className="h-full border border-[hsl(var(--primary))]/20 p-5">
              <div className="flex items-start justify-between"><span className="font-display text-2xl font-bold">PHPA</span><span className="font-mono-ui text-xs">SMC</span></div>
              <div className="mt-12 border-y border-[hsl(var(--primary))]/25 py-5">
                <p className="font-display text-4xl font-bold leading-none text-[hsl(var(--primary))]">Fall<br />2026</p>
              </div>
              <div className="mt-7 text-xs text-[hsl(var(--muted-foreground))]">explore · learn · connect</div>
            </div>
          </div>
          <div className="absolute right-[1%] top-[25%] h-[53%] w-[54%] rotate-[8deg] border border-[hsl(var(--primary))]/20 bg-[hsl(var(--secondary))] px-5 py-6 paper-shadow" aria-hidden="true">
            <div className="graph-paper h-full border border-dashed border-[hsl(var(--primary))]/20" />
          </div>
          <div className="absolute bottom-[10%] left-[7%] flex h-28 w-36 rotate-[5deg] flex-col justify-between border border-[hsl(var(--primary))]/25 bg-[hsl(var(--accent))] p-4 text-[hsl(var(--primary))] paper-shadow">
            <span className="font-mono-ui text-[10px] uppercase tracking-widest">student note</span>
            <span className="font-display text-2xl font-bold leading-none">still figuring<br />it out?</span>
          </div>
          <span className="absolute right-[16%] top-[14%] z-10 rotate-[15deg] font-display text-4xl text-[hsl(var(--primary))]" aria-hidden="true">✦</span>
          <span className="absolute bottom-[8%] right-[8%] h-12 w-24 rotate-[-10deg] border-t-2 border-[hsl(var(--primary))]/50" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="scribble">Pre-health, together</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Student-led · Santa Monica College</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading kicker="What are you looking for?" title="Start where you are." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Find Experience', 'Shadowing, volunteering, and research.', '/opportunities', 'experience'],
            ['Try Clinical Skills', 'Workshops, simulations, and certifications.', '/events', 'skills'],
            ['Figure Out Your Path', 'Explore careers and find guidance.', '/guide', 'path'],
            ['Find Your People', 'Meet other students exploring healthcare.', '/about', 'people'],
          ].map(([title, text, href, id], index) => <Link href={href} key={id} data-testid={`card-intent-${id}`} className={`group flex min-h-52 flex-col justify-between border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[4px_5px_0_hsl(var(--accent))] ${index === 1 ? 'rotate-[1deg]' : index === 2 ? 'border-t-4 border-t-[hsl(var(--accent))]' : index === 3 ? 'translate-y-2' : ''}`}>
            <div className="flex items-start justify-between"><span className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">0{index + 1}</span><ArrowDownRight size={19} className="text-[hsl(var(--muted-foreground))] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></div>
            <div><h3 className="font-display text-2xl font-bold leading-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text}</p></div>
          </Link>)}
        </div>
      </section>

      {nextEvent && <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="grid overflow-hidden border border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] md:grid-cols-[.75fr_1.25fr]">
          <div className="flex flex-col justify-between border-b border-white/20 p-7 md:border-b-0 md:border-r md:p-10">
            <div><Tag tone="yellow">Upcoming</Tag></div>
            <div className="mt-12"><p className="font-mono-ui text-3xl text-[hsl(var(--accent))]">DATE</p><p className="mt-2 text-sm opacity-70">Time to be added</p></div>
          </div>
          <div className="p-7 md:p-10"><h2 className="mt-1 max-w-lg font-display text-5xl font-bold leading-[.95] tracking-[-.04em]">{nextEvent.title}</h2><p className="mt-6 max-w-lg leading-7 opacity-75">{nextEvent.description}</p><div className="mt-8 flex flex-wrap gap-5 text-sm opacity-80"><span className="flex items-center gap-2"><MapPin size={16} />{nextEvent.location}</span><span className="flex items-center gap-2"><Clock3 size={16} />{nextEvent.time}</span></div><a href="#" data-testid="link-home-rsvp" className="mt-9 inline-flex items-center gap-2 border-b border-[hsl(var(--accent))] pb-1 text-sm font-bold text-[hsl(var(--accent))]">RSVP <ArrowUpRightIcon /></a></div>
        </div>
      </section>}

      <section className="bg-[hsl(var(--secondary))] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading kicker="The path isn’t one-size-fits-all" title="There’s more than one way into medicine." />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-y border-[hsl(var(--primary))]/30 py-5 sm:col-span-2">
              <p className="font-mono-ui text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))]">Community college connection</p>
              <p className="mt-2 font-display text-8xl font-bold leading-none text-[hsl(var(--primary))] md:text-9xl">30%</p>
              <p className="mt-2 max-w-md text-sm leading-6">of the graduating U.S. medical school Class of 2025 attended classes at a community college.</p>
            </div>
            {[
              ['31%', 'Majored in something outside the natural sciences.'],
              ['94.8%', 'Had at least one undergraduate community-service experience.'],
              ['85.8%', 'Had at least one undergraduate research experience.'],
            ].map(([value, label]) => <div key={value} className="border-t border-[hsl(var(--primary))]/30 pt-4"><p className="font-mono-ui text-3xl font-bold text-[hsl(var(--primary))]">{value}</p><p className="mt-2 text-sm leading-6">{label}</p></div>)}
            <p className="font-mono-ui text-[10px] uppercase tracking-widest text-[hsl(var(--muted-foreground))] sm:col-span-2">Source — Association of American Medical Colleges · Class of 2025</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading kicker="Opportunities preview" title="Coming soon." /><ArrowLink href="/opportunities" testId="link-home-opportunities">See all opportunities</ArrowLink></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[['Shadowing', 'shadowing-coming-soon'], ['Volunteering', 'volunteering-coming-soon'], ['Research / Clinical Experience', 'clinical-coming-soon']].map(([title, id]) => <article key={id} className="flex min-h-48 flex-col justify-between border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6"><h3 className="font-display text-2xl font-bold">{title}</h3><p className="text-sm text-[hsl(var(--muted-foreground))]">Opportunity coming soon</p></article>)}</div>
      </section>

      <section className="mx-5 mb-4 overflow-hidden bg-[hsl(var(--accent))] lg:mx-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-7 py-12 md:grid-cols-[1.2fr_.8fr] md:px-12 md:py-16"><div><h2 className="max-w-2xl font-display text-5xl font-bold leading-[.9] tracking-[-.05em] text-[hsl(var(--primary))] md:text-6xl">You don’t need to have your healthcare career figured out. That’s kind of the point.</h2></div><div className="md:justify-self-end"><Link href="/join" data-testid="link-home-join" className="inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-1">Join PHPA <ArrowRight size={17} /></Link></div></div>
      </section>
    </main>
  </PageFrame>;
}

function ArrowUpRightIcon() { return <ArrowUpRight size={15} />; }

function OpportunityCard({ item, compact = false }: { item: Opportunity; compact?: boolean }) {
  return <article data-testid={`card-opportunity-${item.id}`} className={`group flex flex-col border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:-translate-y-1 hover:shadow-[4px_5px_0_hsl(var(--accent))] ${compact ? 'min-h-64' : ''}`}>
    <div className="flex items-start justify-between gap-4"><Tag tone={item.type === 'Shadowing' ? 'yellow' : item.type === 'Research' ? 'blue' : 'ink'}>{item.type}</Tag><span className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">↗</span></div>
    <h3 className="mt-8 font-display text-2xl font-bold leading-tight">{item.organization}</h3><p className="mt-2 flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))]"><MapPin size={13} />{item.location}</p><p className="mt-4 flex-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{item.description}</p><a href={item.link} data-testid={`link-opportunity-${item.id}`} className="mt-6 inline-flex items-center gap-2 self-start border-b border-[hsl(var(--primary))] pb-1 text-sm font-bold"> {item.linkLabel} <ExternalLink size={14} /></a>
  </article>;
}

function Opportunities() {
  const kinds: OpportunityKind[] = ['Shadowing', 'Clinical experience', 'Volunteering', 'Research'];
  return <PageFrame><main><Masthead kicker="Opportunities · updated for Fall 2026" title={<>Experience is<br /><em className="text-[hsl(var(--muted-foreground))]">a verb.</em></>} body="A living list of ways to get closer to the work. Some are formal, some start with an email, and all are worth a curious first step." />
    <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8"><div className="relative overflow-hidden border border-[hsl(var(--primary))] bg-[hsl(var(--secondary))] p-7 md:p-12"><span className="absolute right-6 top-6 font-mono-ui text-7xl text-[hsl(var(--primary))]/10">01</span><Tag tone="yellow">Featured network</Tag><div className="mt-12 grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><p className="scribble text-[hsl(var(--muted-foreground))]">Start here if you want to observe</p><h2 className="mt-3 max-w-md font-display text-4xl font-bold leading-none tracking-[-.04em]">UCLA Health Student Shadowing Network</h2></div><div><p className="max-w-xl leading-7 text-[hsl(var(--muted-foreground))]">{opportunities[0].description}</p><div className="mt-7 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><MapPin size={15} />{opportunities[0].location}</span><a href={opportunities[0].link} data-testid="link-featured-opportunity" className="flex items-center gap-2 font-bold underline decoration-[hsl(var(--accent))] decoration-2 underline-offset-4">View interest form <ExternalLink size={14} /></a></div></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 lg:px-8">{kinds.map((kind) => <div key={kind} id={kind.toLowerCase().replace(' ', '-')} className="border-t border-[hsl(var(--border))] py-14"><div className="mb-8 flex items-baseline justify-between gap-4"><div><p className="scribble mb-2 text-[hsl(var(--muted-foreground))]">01 / board notes</p><h2 className="font-display text-4xl font-bold tracking-[-.04em]">{kind}</h2></div><span className="font-mono-ui text-sm text-[hsl(var(--muted-foreground))]">{opportunities.filter((item) => item.type === kind).length.toString().padStart(2, '0')} listings</span></div><div className="grid gap-5 md:grid-cols-2">{opportunities.filter((item) => item.type === kind).map((item) => <OpportunityCard item={item} key={item.id} />)}</div></div>)}</section>
    <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8"><div className="border-l-4 border-[hsl(var(--accent))] bg-[hsl(var(--muted))] p-6"><p className="font-display text-2xl font-bold">Know a place that should be on this board?</p><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">Send us the details. We check every listing before it reaches students.</p><a href="mailto:phpa@smc.edu" data-testid="link-opportunity-suggest" className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Suggest an opportunity <Mail size={15} /></a></div></section>
  </main></PageFrame>;
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return <article data-testid={`card-event-${event.id}`} className="group border-t border-[hsl(var(--border))] py-7 transition-colors hover:border-[hsl(var(--primary))]"><div className="grid gap-5 md:grid-cols-[150px_1fr_auto] md:items-start"><div><p className="font-mono-ui text-sm font-bold text-[hsl(var(--primary))]">{event.dateLabel}</p><p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">{event.time}</p></div><div><Tag tone={event.category === 'Panel' ? 'yellow' : event.category === 'Workshop' ? 'blue' : 'ink'}>{event.category}</Tag><h3 className="mt-4 font-display text-3xl font-bold leading-none">{event.title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">{event.description}</p><p className="mt-4 flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]"><MapPin size={14} />{event.location}</p></div><a href="#" data-testid={`link-rsvp-${event.id}`} className="inline-flex items-center gap-2 self-start border border-[hsl(var(--primary))] px-3 py-2 text-xs font-bold transition-colors hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]">RSVP <ArrowUpRight size={14} /></a></div></article>;
}

function Events() {
  const upcoming = events.filter((event) => !event.past);
  const past = events.filter((event) => event.past);
  return <PageFrame><main><Masthead kicker="Calendar · Fall 2026" title={<>Make a little<br /><span className="text-[hsl(var(--muted-foreground))]">room for people.</span></>} body="Panels, practical workshops, and the occasional study hall. Come for the topic; stay because someone asks your name." />
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><div className="grid gap-8 bg-[hsl(var(--primary))] p-7 text-[hsl(var(--primary-foreground))] md:grid-cols-[.6fr_1.4fr] md:p-12"><div className="border-b border-white/20 pb-8 md:border-b-0 md:border-r md:pb-0"><Tag tone="yellow">Next event</Tag><p className="mt-12 font-mono-ui text-5xl text-[hsl(var(--accent))]">SEP<br />24</p><p className="mt-3 text-sm opacity-70">Thursday · 5:30 PM</p></div><div className="md:pl-5"><p className="scribble opacity-70">Panel · save the evening</p><h2 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[.92] tracking-[-.05em]">Health Careers Night</h2><p className="mt-6 max-w-xl leading-7 opacity-75">A candid evening with SMC alumni in medicine, PA, nursing, dentistry, and allied health. Bring the question you are afraid is too basic.</p><div className="mt-7 flex flex-wrap gap-5 text-sm opacity-80"><span className="flex items-center gap-2"><MapPin size={15} />Student Services Courtyard</span><span className="flex items-center gap-2"><Clock3 size={15} />5:30–7:30 PM</span></div><a href="#" data-testid="link-featured-event-rsvp" className="mt-8 inline-flex items-center gap-2 bg-[hsl(var(--accent))] px-4 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))]">RSVP for Health Careers Night <ArrowUpRight size={15} /></a></div></div></section>
    <section className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex items-end justify-between border-b border-[hsl(var(--border))] pb-5"><div><p className="scribble mb-2 text-[hsl(var(--muted-foreground))]">The fall file</p><h2 className="font-display text-4xl font-bold">Upcoming events</h2></div><CalendarDays className="text-[hsl(var(--muted-foreground))]" /></div><div className="mt-2">{upcoming.map((event) => <EventCard event={event} key={event.id} />)}</div></section>
    <section className="mx-auto mt-20 max-w-7xl border-t border-[hsl(var(--border))] px-5 pt-14 lg:px-8"><p className="scribble mb-3 text-[hsl(var(--muted-foreground))]">From the archive</p><h2 className="font-display text-4xl font-bold">Past gatherings</h2><div className="mt-6 grid gap-x-10 md:grid-cols-2">{past.map((event) => <EventCard event={event} key={event.id} />)}</div></section>
  </main></PageFrame>;
}

function PathwayPanel({ pathway, active, onClick }: { pathway: Pathway; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} data-testid={`button-pathway-${pathway.id}`} className={`flex w-full items-center justify-between border-b border-[hsl(var(--border))] px-4 py-4 text-left transition-all ${active ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]' : 'hover:bg-[hsl(var(--muted))]'}`}><span><span className={`block text-xs ${active ? 'opacity-65' : 'text-[hsl(var(--muted-foreground))]'}`}>{pathway.eyebrow}</span><span className="font-display text-xl font-bold">{pathway.label}</span></span><ArrowRight size={17} className={active ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--muted-foreground))]'} /></button>;
}

function Guide() {
  const [activeId, setActiveId] = useState(pathways[0].id);
  const active = pathways.find((pathway) => pathway.id === activeId) ?? pathways[0];
  return <PageFrame><main><Masthead kicker="Pathway guide · keep this page open" title={<>There is more<br />than one way<br /><em className="text-[hsl(var(--muted-foreground))]">to care.</em></>} body="A starting point for the routes students at SMC ask about most. Use it to make better questions—not to replace a counselor or an official program page." />
    <section className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid border border-[hsl(var(--border))] md:grid-cols-[.8fr_1.2fr]"><div className="bg-[hsl(var(--muted))]">{pathways.map((pathway) => <PathwayPanel pathway={pathway} active={active.id === pathway.id} onClick={() => setActiveId(pathway.id)} key={pathway.id} />)}</div><div className="min-h-[490px] p-7 md:p-12"><p className="scribble text-[hsl(var(--muted-foreground))]">{active.eyebrow} · route notes</p><h2 className="mt-4 font-display text-5xl font-bold leading-[.9] tracking-[-.05em]">{active.label}</h2><div className="mt-12 grid gap-8"><GuideBlurb label="The education path" text={active.education} /><GuideBlurb label="Your SMC starting point" text={active.smc} /><GuideBlurb label="Experience ideas" text={active.experience} /><div><p className="scribble mb-3 text-[hsl(var(--muted-foreground))]">Questions for a counselor</p><ul className="grid gap-2 text-sm leading-6">{active.questions.map((question) => <li key={question} className="flex gap-2"><span className="text-[hsl(var(--accent-foreground))]">—</span>{question}</li>)}</ul></div></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="scribble mb-3 text-[hsl(var(--muted-foreground))]">PHPA Study Match</p><h2 className="font-display text-4xl font-bold leading-none">Which class<br />touches which path?</h2><p className="mt-5 max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]">A quick orientation for your next enrollment conversation. Always confirm prerequisites with the program you want.</p></div><div className="border-t border-[hsl(var(--border))]">{studyMatch.map((row) => <div key={row.course} data-testid={`row-study-match-${row.course.replaceAll(' ', '-')}`} className="grid gap-3 border-b border-[hsl(var(--border))] py-4 sm:grid-cols-[120px_1fr] sm:items-center"><span className="font-mono-ui text-sm font-bold text-[hsl(var(--primary))]">{row.course}</span><div className="flex flex-wrap gap-2">{row.matches.map((match) => <Tag key={match} tone="blue">{match}</Tag>)}</div></div>)}</div></div></section>
    <section className="mx-5 border-l-4 border-[hsl(var(--accent))] bg-[hsl(var(--muted))] px-6 py-7 lg:mx-auto lg:max-w-7xl lg:px-10"><p className="font-display text-xl font-bold">A note on the fine print</p><p className="mt-2 max-w-3xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">This guide is a student-made orientation, not academic, career, or admissions advice. Prerequisites and application policies change. Use official program websites and meet with Santa Monica College counseling before making a plan.</p></section>
  </main></PageFrame>;
}

function GuideBlurb({ label, text }: { label: string; text: string }) {
  return <div><p className="scribble mb-2 text-[hsl(var(--muted-foreground))]">{label}</p><p className="max-w-2xl text-sm leading-7">{text}</p></div>;
}

function About() {
  return <PageFrame><main><Masthead kicker="About PHPA · the people behind the board" title={<>A student<br /><span className="text-[hsl(var(--muted-foreground))]">publication</span><br />with a pulse.</>} body="PHPA is not a pipeline, a program, or a promise. It is a room students made for honest questions about healthcare and the lives that lead there." />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 lg:grid-cols-[1fr_1fr] lg:px-8"><div className="border-t-4 border-[hsl(var(--accent))] pt-6"><p className="scribble">Our mission</p><p className="mt-7 font-display text-4xl font-bold leading-[1.03] tracking-[-.04em]">Make the pre-health path feel a little less like a solo assignment.</p></div><div className="space-y-6 text-base leading-8 text-[hsl(var(--muted-foreground))]"><p>We connect Santa Monica College students to practical information, real people, and opportunities that make the work feel tangible. We believe exploration is productive, changing your mind is allowed, and access to a community should not depend on already knowing the vocabulary.</p><p>Our board is student-led and always in motion. Every event, note, and listing is built to help someone take one thoughtful next step.</p><NotebookRule /><p className="font-mono-ui text-xs uppercase tracking-wide text-[hsl(var(--primary))]">curious is a credential, too.</p></div></section>
    <section className="bg-[hsl(var(--secondary))] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading kicker="Meet the 2026 board" title="A few students in your corner." body="No headshots yet—just names, pathways, and the work each person is carrying this year." /><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{boardMembers.map((member) => <article key={member.id} data-testid={`card-board-${member.id}`}><PhotoPlaceholder initials={member.initials} label={member.name} /><div className="border-b border-[hsl(var(--primary))]/25 pb-5 pt-4"><div className="flex items-baseline justify-between gap-3"><h3 className="font-display text-2xl font-bold">{member.name}</h3><span className="font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">{member.year.replace('Class of ', '')}</span></div><p className="mt-1 text-sm font-semibold">{member.role}</p><p className="mt-3 text-xs text-[hsl(var(--muted-foreground))]">{member.path} · {member.specialty}</p><a href={`mailto:${member.email}`} data-testid={`link-board-email-${member.id}`} className="mt-4 inline-flex items-center gap-2 text-xs font-bold underline decoration-[hsl(var(--accent))] decoration-2 underline-offset-4"><Mail size={13} />Email {member.name.split(' ')[0]}</a></div></article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="scribble mb-3 text-[hsl(var(--muted-foreground))]">Want to help shape the next issue?</p><h2 className="font-display text-5xl font-bold leading-none">Bring a question.<br />Bring a skill.</h2></div><Link href="/join" data-testid="link-about-join" className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))]">Join the board <ArrowRight size={16} /></Link></div></section>
  </main></PageFrame>;
}

function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('I am exploring');
  if (submitted) return <PageFrame><main className="mx-auto flex min-h-[68vh] max-w-7xl items-center px-5 py-16 lg:px-8"><div className="max-w-2xl"><div className="flex h-14 w-14 items-center justify-center bg-[hsl(var(--accent))] text-[hsl(var(--primary))]"><Check size={28} /></div><p className="scribble mt-8 text-[hsl(var(--muted-foreground))]">You are on the list</p><h1 className="mt-4 font-display text-6xl font-bold leading-[.9] tracking-[-.06em] text-[hsl(var(--primary))]">Thanks, {name.split(' ')[0] || 'friend'}.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-[hsl(var(--muted-foreground))]">We will keep an eye out for you at the next event and send the occasional useful note to <strong className="text-[hsl(var(--foreground))]">{email || 'your inbox'}</strong>.</p><div className="mt-9 flex flex-wrap gap-5"><ArrowLink href="/events" testId="link-confirmation-events">See upcoming events</ArrowLink><button type="button" onClick={() => setSubmitted(false)} data-testid="button-confirmation-edit" className="text-sm font-bold text-[hsl(var(--muted-foreground))] underline underline-offset-4">Edit my response</button></div></div></main></PageFrame>;
  return <PageFrame><main><section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-28 lg:pt-24"><div><p className="scribble text-[hsl(var(--muted-foreground))]">Join PHPA · no perfect plan required</p><h1 className="mt-5 max-w-xl font-display text-7xl font-bold leading-[.85] tracking-[-.07em] text-[hsl(var(--primary))]">Pull up<br />a chair.</h1><p className="mt-8 max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">Tell us a little about yourself and we will send you the next useful thing. A meeting, a listing, a study match, or a reason not to give up on Chem 11.</p><div className="mt-10 flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]"><Sparkles size={16} className="text-[hsl(var(--accent-foreground))]" />One short note a month. No inbox clutter.</div></div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 paper-shadow md:p-10" data-testid="form-join"><div className="mb-8 flex items-center justify-between border-b border-[hsl(var(--border))] pb-5"><p className="font-display text-2xl font-bold">A small introduction</p><span className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">01 / 03</span></div><div className="grid gap-6"><label className="grid gap-2 text-sm font-semibold" htmlFor="join-name">Name<input id="join-name" required value={name} onChange={(event) => setName(event.target.value)} data-testid="input-join-name" className="border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 py-3 font-normal outline-none transition-colors focus:border-[hsl(var(--primary))]" placeholder="What should we call you?" /></label><label className="grid gap-2 text-sm font-semibold" htmlFor="join-email">SMC email<input id="join-email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} data-testid="input-join-email" className="border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 py-3 font-normal outline-none transition-colors focus:border-[hsl(var(--primary))]" placeholder="you@smc.edu" /></label><label className="grid gap-2 text-sm font-semibold" htmlFor="join-interest">What brings you here?<select id="join-interest" value={interest} onChange={(event) => setInterest(event.target.value)} data-testid="select-join-interest" className="border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 py-3 font-normal outline-none focus:border-[hsl(var(--primary))]"><option>I am exploring</option><option>I have a pathway in mind</option><option>I am looking for experience</option><option>I want to meet other students</option><option>I would like to help PHPA</option></select></label><label className="grid gap-2 text-sm font-semibold" htmlFor="join-note">A question you are carrying <span className="font-normal text-[hsl(var(--muted-foreground))]">(optional)</span><textarea id="join-note" rows={4} data-testid="textarea-join-note" className="resize-y border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 py-3 font-normal outline-none focus:border-[hsl(var(--primary))]" placeholder="There are no silly ones." /></label><button type="submit" data-testid="button-join-submit" className="mt-2 inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]">Send me the next thing <ArrowRight size={16} /></button></div><p className="mt-5 text-xs leading-5 text-[hsl(var(--muted-foreground))]">We use this only for PHPA updates. You can leave any time.</p></form></section></main></PageFrame>;
}

function NotFoundPage() {
  return <PageFrame><main className="mx-auto flex min-h-[68vh] max-w-7xl items-center px-5 py-16 lg:px-8"><div><p className="scribble text-[hsl(var(--muted-foreground))]">Page not found · 404</p><h1 className="mt-5 font-display text-7xl font-bold leading-[.85] tracking-[-.06em] text-[hsl(var(--primary))]">This page<br /><span className="text-[hsl(var(--muted-foreground))]">wandered off.</span></h1><p className="mt-7 max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">Try the bulletin board instead. It has better directions.</p><ArrowLink href="/" testId="link-404-home">Back to the homepage</ArrowLink></div></main></PageFrame>;
}

export { About, Events, Guide, Home, Join, NotFoundPage, Opportunities };