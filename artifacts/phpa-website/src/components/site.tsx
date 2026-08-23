import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, MoveUpRight, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/events', label: 'Events' },
  { href: '/guide', label: 'Pathway guide' },
  { href: '/about', label: 'About PHPA' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return (
    <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 sticky top-0 z-40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" data-testid="link-logo">
          <span className="flex h-10 w-10 rotate-[-4deg] items-center justify-center bg-[hsl(var(--primary))] text-sm font-bold text-[hsl(var(--accent))] transition-transform group-hover:rotate-0">PH</span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-[-.03em]">SMC PHPA</span>
            <span className="scribble mt-1 block text-[hsl(var(--muted-foreground))]">Santa Monica College</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`} className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-[hsl(var(--primary))] ${location === item.href ? 'text-[hsl(var(--primary))] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[hsl(var(--accent))]' : 'text-[hsl(var(--muted-foreground))]'}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/join" data-testid="link-join-header" className="ml-4 inline-flex items-center gap-2 border border-[hsl(var(--primary))] bg-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]">
            Join PHPA <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="border border-[hsl(var(--border))] p-2 lg:hidden" data-testid="button-mobile-menu">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[hsl(var(--border))] px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`} className="block border-b border-[hsl(var(--border))] py-3 font-medium">
              {item.label}
            </Link>
          ))}
          <Link href="/join" onClick={() => setOpen(false)} data-testid="link-mobile-join" className="mt-4 inline-flex items-center gap-2 bg-[hsl(var(--primary))] px-4 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))]">Join PHPA <ArrowUpRight size={15} /></Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[hsl(var(--primary))] px-5 py-12 text-[hsl(var(--primary-foreground))] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 rotate-[3deg] items-center justify-center bg-[hsl(var(--accent))] text-sm font-bold text-[hsl(var(--accent-foreground))]">PH</span>
            <span className="font-display text-xl font-bold">SMC PHPA</span>
          </div>
          <p className="max-w-sm text-sm leading-6 opacity-75">A student-led corner of Santa Monica College for people curious about caring for people.</p>
          <p className="scribble mt-8 opacity-55">Made by students, for students · 2026</p>
        </div>
        <div>
          <p className="scribble mb-4 text-[hsl(var(--accent))]">Explore</p>
          <div className="grid gap-3 text-sm opacity-80">
            <Link href="/opportunities" data-testid="link-footer-opportunities" className="transition-opacity hover:opacity-100">Opportunities</Link>
            <Link href="/events" data-testid="link-footer-events" className="transition-opacity hover:opacity-100">Events</Link>
            <Link href="/guide" data-testid="link-footer-guide" className="transition-opacity hover:opacity-100">Pathway guide</Link>
          </div>
        </div>
        <div>
          <p className="scribble mb-4 text-[hsl(var(--accent))]">Keep in touch</p>
          <div className="grid gap-3 text-sm opacity-80">
            <a href="mailto:phpa@smc.edu" data-testid="link-footer-email" className="transition-opacity hover:opacity-100">phpa@smc.edu</a>
            <a href="#" data-testid="link-footer-instagram" className="transition-opacity hover:opacity-100">Instagram ↗</a>
            <Link href="/join" data-testid="link-footer-join" className="transition-opacity hover:opacity-100">Join the mailing list ↗</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-5 text-xs opacity-55">PHPA is a student organization, not a counseling or admissions office. Start with official program pages and a counselor.</div>
    </footer>
  );
}

export function PageFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`paper-grain min-h-[100dvh] bg-[hsl(var(--background))] ${className}`}><SiteHeader />{children}<SiteFooter /></div>;
}

export function SectionHeading({ kicker, title, body, align = 'left' }: { kicker: string; title: string; body?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="scribble mb-4 text-[hsl(var(--muted-foreground))]">{kicker}</p>
      <h2 className="font-display text-4xl font-bold leading-[.98] tracking-[-.04em] text-[hsl(var(--primary))] md:text-5xl">{title}</h2>
      {body && <p className="mt-5 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))]">{body}</p>}
    </div>
  );
}

export function ArrowLink({ href, children, inverse = false, testId }: { href: string; children: ReactNode; inverse?: boolean; testId: string }) {
  return <Link href={href} data-testid={testId} className={`group inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-all hover:gap-3 ${inverse ? 'border-[hsl(var(--accent))] text-[hsl(var(--accent))]' : 'border-[hsl(var(--primary))] text-[hsl(var(--primary))]'}`}>{children}<MoveUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>;
}

export function Tag({ children, tone = 'yellow' }: { children: ReactNode; tone?: 'yellow' | 'blue' | 'ink' }) {
  const colors = { yellow: 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]', blue: 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]', ink: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]' };
  return <span className={`inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] ${colors[tone]}`}>{children}</span>;
}

export function PhotoPlaceholder({ initials, label }: { initials: string; label: string }) {
  return <div className="relative flex aspect-[4/3] items-end overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] p-4" aria-label={`${label} photo placeholder`}>
    <span className="absolute -right-2 -top-5 font-display text-[8rem] font-bold leading-none text-[hsl(var(--primary))]/10">{initials}</span>
    <span className="scribble relative text-[hsl(var(--primary))]/60">photo coming soon</span>
  </div>;
}

export function NotebookRule() {
  return <div className="flex items-center gap-4 py-2"><span className="h-px flex-1 bg-[hsl(var(--border))]" /><span className="h-2 w-2 rotate-45 bg-[hsl(var(--accent))]" /><span className="h-px flex-1 bg-[hsl(var(--border))]" /></div>;
}