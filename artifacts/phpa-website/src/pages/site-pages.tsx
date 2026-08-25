import { useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import phpaLogo from "@assets/0_smc_phpa_logo_bg_removed_1787524062474.png";
import { events } from "@/data/events";
import {
  opportunities,
  type Opportunity,
  type OpportunityKind,
} from "@/data/opportunities";
import { boardMembers } from "@/data/board";
import { pathways, studyMatch, type Pathway } from "@/data/guide";
import {
  ArrowLink,
  NotebookRule,
  PageFrame,
  PhotoPlaceholder,
  SectionHeading,
  Tag,
} from "@/components/site";

function Masthead({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: ReactNode;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
      <p className="scribble reveal text-[hsl(var(--muted-foreground))]">
        {kicker}
      </p>
      <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-6xl font-bold leading-[.9] tracking-[-.06em] text-[hsl(var(--primary))] md:text-8xl">
        {title}
      </h1>
      <p className="reveal reveal-delay-2 mt-7 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
        {body}
      </p>
    </section>
  );
}

function Home() {
  return (
    <PageFrame>
      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="reveal">
            <div className="mb-7 flex items-center gap-3">
              <span className="scribble text-[hsl(var(--muted-foreground))]">
                Santa Monica College
              </span>
              <span className="h-px w-12 bg-[hsl(var(--accent))]" />
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(4.7rem,10vw,9rem)] font-bold leading-[.80] tracking-[-.075em] text-[hsl(var(--primary))]">
              Find your
              <br />
              <span className="relative inline-block text-[hsl(var(--muted-foreground))]">
                path in
                <span className="absolute -bottom-2 left-0 h-2 w-full rotate-[-2deg] bg-[hsl(var(--accent))]/75" />
              </span>{" "}
              healthcare.
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
              Explore healthcare careers, gain hands-on experience, find real
              opportunities, and meet other SMC students figuring it out too.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/join"
                data-testid="link-hero-join"
                className="inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-1 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
              >
                Join PHPA <ArrowRight size={17} />
              </Link>

              <ArrowLink href="/opportunities" testId="link-hero-opportunities">
                Explore opportunities
              </ArrowLink>
            </div>

            <p className="mt-7 text-xs tracking-wide text-[hsl(var(--muted-foreground))]">
              MEDICINE · PA · NURSING · DENTISTRY · PHARMACY · PT · ALLIED
              HEALTH
            </p>
          </div>

          {/* HERO PAPER COLLAGE */}
          <div className="relative min-h-[400px] reveal reveal-delay-2 lg:min-h-[540px]">
            {/* MAIN PHPA PAPER — dominant object */}
            <div className="absolute left-[8%] top-[7%] z-10 h-[74%] w-[69%] rotate-[-2.5deg] border border-[hsl(var(--primary))]/20 bg-[hsl(var(--background))] p-6 paper-shadow">
              <div className="flex h-full flex-col border border-[hsl(var(--primary))]/20 p-7">
                <div>
                  <img
                    src={phpaLogo}
                    alt="SMC Pre-Health Professional Association"
                    className="h-14 w-14 object-contain"
                  />

                  <p className="mt-5 font-display text-3xl font-bold leading-none text-[hsl(var(--primary))]">
                    PHPA
                  </p>

                  <p className="mt-3 max-w-[190px] font-mono-ui text-[9px] uppercase leading-4 tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                    Pre-Health Professional Association
                    <br />
                    Santa Monica College
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-5 h-px w-full bg-[hsl(var(--primary))]/20" />

                  <div className="flex items-end justify-between gap-4">
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))]">
                      explore · learn · connect
                    </p>

                    <span
                      className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]/60"
                      aria-hidden="true"
                    >
                      SMC / PHPA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLUE GRAPH PAPER — supporting texture, not focal point */}
            <div
              className="absolute right-[-1%] top-[31%] z-20 h-[43%] w-[45%] rotate-[6deg] border border-[hsl(var(--primary))]/20 bg-[hsl(var(--secondary))] p-5 paper-shadow"
              aria-hidden="true"
            >
              <div className="graph-paper h-full border border-dashed border-[hsl(var(--primary))]/18">
                <div className="flex h-full items-end justify-end p-3">
                  <span className="font-mono-ui text-[8px] uppercase tracking-[.15em] text-[hsl(var(--primary))]/35">
                    notes
                  </span>
                </div>
              </div>
            </div>

            {/* YELLOW STUDENT NOTE */}
            <div className="absolute bottom-[13%] left-[3%] z-30 flex h-28 w-36 rotate-[3deg] flex-col justify-center border border-[hsl(var(--primary))]/25 bg-[hsl(var(--accent))] p-4 text-[hsl(var(--primary))] paper-shadow">
              <span className="font-mono-ui text-[7px] uppercase tracking-[.15em] opacity-55">
                student note
              </span>

              <span className="mt-2 font-display text-[16px] font-bold leading-[.98]">
                NOT SURE
                <br />
                YET?
                <br />
                THAT&apos;S OKAY.
              </span>
            </div>

            {/* SINGLE IMPERFECT PEN MARK */}
            <span
              className="absolute bottom-[9%] right-[8%] h-10 w-24 rotate-[-7deg] border-t-2 border-[hsl(var(--primary))]/35"
              aria-hidden="true"
            />
          </div>
        </section>

        {/* SMALL TRANSITION STRIP */}
        <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-5 py-5 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
            <p className="scribble">Pre-health, together</p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Student-led · Santa Monica College
            </p>
          </div>
        </section>

        {/* START WHERE YOU ARE */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            kicker="What are you looking for?"
            title="Start where you are."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Find Experience",
                "Shadowing, volunteering, research, and clinical opportunities.",
                "/opportunities",
                "experience",
              ],
              [
                "Build Your Skills",
                "Workshops, clinical skills, simulations, and practical experience.",
                "/events",
                "skills",
              ],
              [
                "Explore Careers",
                "Compare healthcare paths, prerequisites, timelines, and next steps.",
                "/guide",
                "path",
              ],
              [
                "Find Your People",
                "Meet other SMC students exploring healthcare careers.",
                "/about",
                "people",
              ],
            ].map(([title, text, href, id], index) => (
              <Link
                href={href}
                key={id}
                data-testid={`card-intent-${id}`}
                className={`group flex min-h-52 flex-col justify-between border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[4px_5px_0_hsl(var(--accent))] ${
                  index === 1
                    ? "rotate-[1deg]"
                    : index === 2
                      ? "border-t-4 border-t-[hsl(var(--accent))]"
                      : index === 3
                        ? "translate-y-2"
                        : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">
                    0{index + 1}
                  </span>

                  <ArrowDownRight
                    size={19}
                    className="text-[hsl(var(--muted-foreground))] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    {text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NEXT EVENT */}
        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
          <div className="grid overflow-hidden border border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] md:grid-cols-[.72fr_1.28fr]">
            {/* DATE / LABEL SIDE */}
            <div className="flex flex-col justify-between border-b border-white/20 p-7 md:border-b-0 md:border-r md:p-10">
              <div>
                <Tag tone="yellow">Next PHPA Event</Tag>
              </div>

              <div className="mt-12">
                <p className="font-mono-ui text-5xl leading-none text-[hsl(var(--accent))]">
                  SEP
                  <br />
                  08
                </p>

                <p className="mt-4 text-sm opacity-70">
                  Tuesday · 11:15 AM–12:30 PM
                </p>
              </div>
            </div>

            {/* EVENT INFO SIDE */}
            <div className="p-7 md:p-10">
              <p className="scribble opacity-65">
                Lab essentials · limited stock
              </p>

              <h2 className="mt-3 max-w-lg font-display text-5xl font-bold leading-[.95] tracking-[-.04em]">
                Lab Coat Sale
              </h2>

              <p className="mt-6 max-w-lg leading-7 opacity-75">
                Need a lab coat for class? Stop by for washed and ready-to-use
                lab coats and goggles. Come early — quantities are limited.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm opacity-80">
                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  SCI 159
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  11:15 AM–12:30 PM
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="border border-white/25 px-3 py-2 text-sm">
                  Lab coats · $10
                </span>

                <span className="border border-white/25 px-3 py-2 text-sm">
                  Goggles · $5
                </span>
              </div>

              <p className="mt-5 font-mono-ui text-[10px] uppercase tracking-[.12em] opacity-60">
                Cash · Card · Zelle accepted
              </p>

              <div className="mt-7">
                <ArrowLink href="/events" testId="link-home-events">
                  View event details
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>

        {/* AAMC STATISTICS */}
        <section className="bg-[hsl(var(--secondary))] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
              <div>
                <p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
                  The path isn&apos;t one-size-fits-all
                </p>

                <h2 className="mt-5 max-w-md font-display text-5xl font-bold leading-[.92] tracking-[-.05em] text-[hsl(var(--primary))] md:text-6xl">
                  There&apos;s more than one way into medicine.
                </h2>
              </div>

              <div>
                {/* Dominant statistic */}
                <div className="border-y border-[hsl(var(--primary))]/25 py-7">
                  <div className="grid gap-5 md:grid-cols-[.48fr_1fr] md:items-end">
                    <p className="font-display text-[8rem] font-bold leading-[.72] tracking-[-.08em] text-[hsl(var(--primary))] md:text-[10rem]">
                      30%
                    </p>

                    <div>
                      <p className="font-mono-ui text-[9px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
                        Community college connection
                      </p>

                      <p className="mt-3 max-w-md text-sm leading-6">
                        of the graduating U.S. medical school Class of 2025
                        attended classes at a community college.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Supporting statistics */}
                <div className="grid md:grid-cols-3">
                  {[
                    ["31%", "Majored outside the natural sciences."],
                    [
                      "94.8%",
                      "Had undergraduate community-service experience.",
                    ],
                    ["85.8%", "Had undergraduate research experience."],
                  ].map(([value, label], index) => (
                    <div
                      key={value}
                      className={`py-7 ${
                        index < 2
                          ? "border-b border-[hsl(var(--primary))]/20 md:border-b-0 md:border-r"
                          : ""
                      } ${index > 0 ? "md:pl-7" : ""} ${
                        index < 2 ? "md:pr-7" : ""
                      }`}
                    >
                      <p className="font-display text-4xl font-bold text-[hsl(var(--primary))]">
                        {value}
                      </p>

                      <p className="mt-3 text-xs leading-5 text-[hsl(var(--muted-foreground))]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[hsl(var(--primary))]/20 pt-4">
                  <p className="font-mono-ui text-[8px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                    Source — Association of American Medical Colleges ·
                    Graduating Medical School Class of 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPPORTUNITIES */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="Opportunities"
              title="Ways to get involved."
            />

            <ArrowLink href="/opportunities" testId="link-home-opportunities">
              See all opportunities
            </ArrowLink>
          </div>

          <p className="mt-5 max-w-2xl leading-7 text-[hsl(var(--muted-foreground))]">
            We&apos;re building a collection of opportunities for SMC students
            to gain experience beyond the classroom.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Shadowing",
                "Observe healthcare professionals and explore specialties firsthand.",
                "01",
              ],
              [
                "Volunteering",
                "Find ways to serve patients and communities while gaining meaningful experience.",
                "02",
              ],
              [
                "Research & Clinical Experience",
                "Discover opportunities to build practical and academic experience.",
                "03",
              ],
            ].map(([title, text, number]) => (
              <article
                key={title}
                className="flex min-h-64 flex-col justify-between border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6"
              >
                <div>
                  <p className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">
                    {number}
                  </p>

                  <h3 className="mt-10 font-display text-2xl font-bold leading-tight">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    {text}
                  </p>
                </div>

                <p className="mt-8 font-mono-ui text-[10px] uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
                  Listings coming soon
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-5 mb-4 overflow-hidden bg-[hsl(var(--accent))] lg:mx-8">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-7 py-12 md:grid-cols-[1.2fr_.8fr] md:px-12 md:py-16">
            <div>
              <h2 className="max-w-2xl font-display text-5xl font-bold leading-[.9] tracking-[-.05em] text-[hsl(var(--primary))] md:text-6xl">
                You don&apos;t need to have your healthcare career figured out.
                That&apos;s kind of the point.
              </h2>

              <p className="mt-6 text-lg text-[hsl(var(--primary))]/75">
                Come explore it with us.
              </p>
            </div>

            <div className="md:justify-self-end">
              <Link
                href="/join"
                data-testid="link-home-join"
                className="inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-1"
              >
                Join PHPA <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={15} />;
}

function OpportunityCard({
  item,
  compact = false,
}: {
  item: Opportunity;
  compact?: boolean;
}) {
  return (
    <article
      data-testid={`card-opportunity-${item.id}`}
      className={`group flex flex-col border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:-translate-y-1 hover:shadow-[4px_5px_0_hsl(var(--accent))] ${compact ? "min-h-64" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <Tag
          tone={
            item.type === "Shadowing"
              ? "yellow"
              : item.type === "Research"
                ? "blue"
                : "ink"
          }
        >
          {item.type}
        </Tag>
        <span className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">
          ↗
        </span>
      </div>
      <h3 className="mt-8 font-display text-2xl font-bold leading-tight">
        {item.organization}
      </h3>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))]">
        <MapPin size={13} />
        {item.location}
      </p>
      <p className="mt-4 flex-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
        {item.description}
      </p>
      <a
        href={item.link}
        data-testid={`link-opportunity-${item.id}`}
        className="mt-6 inline-flex items-center gap-2 self-start border-b border-[hsl(var(--primary))] pb-1 text-sm font-bold"
      >
        {" "}
        {item.linkLabel} <ExternalLink size={14} />
      </a>
    </article>
  );
}

function Opportunities() {
  const kinds: OpportunityKind[] = [
    "Shadowing",
    "Clinical experience",
    "Volunteering",
    "Research",
  ];
  return (
    <PageFrame>
      <main>
        <Masthead
          kicker="Opportunities · updated for Fall 2026"
          title={
            <>
              Looking for experience?
              <br />
              <em className="text-[hsl(var(--muted-foreground))]">
                Start here.
              </em>
            </>
          }
          body="We’re putting together shadowing, volunteering, research, and clinical opportunities for SMC students."
        />
        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <div className="relative overflow-hidden border border-[hsl(var(--primary))] bg-[hsl(var(--secondary))] p-7 md:p-12">
            <span className="absolute right-6 top-6 font-mono-ui text-7xl text-[hsl(var(--primary))]/10">
              01
            </span>

            <Tag tone="yellow">Featured opportunity</Tag>

            <div className="mt-12 grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
              <div>
                <p className="scribble text-[hsl(var(--muted-foreground))]">
                  Clinical experience · Westwood + Santa Monica
                </p>

                <h2 className="mt-3 max-w-md font-display text-4xl font-bold leading-none tracking-[-.04em]">
                  UCLA Health Care Extender Program
                </h2>
              </div>

              <div>
                <p className="max-w-xl leading-7 text-[hsl(var(--muted-foreground))]">
                  A year-long clinical volunteer program for college students
                  interested in healthcare. Care Extenders rotate through
                  hospital departments and work alongside patient care teams.
                </p>

                <div className="mt-7 flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    Westwood + Santa Monica
                  </span>

                  <a
                    href="https://www.uclahealth.org/volunteer/care-extender"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-featured-opportunity"
                    className="flex items-center gap-2 font-bold underline decoration-[hsl(var(--accent))] decoration-2 underline-offset-4"
                  >
                    View program details <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 lg:px-8">
          {kinds.map((kind) => (
            <div
              key={kind}
              id={kind.toLowerCase().replace(" ", "-")}
              className="border-t border-[hsl(var(--border))] py-14"
            >
              <div className="mb-8 flex items-baseline justify-between gap-4">
                <div>
                  <p className="scribble mb-2 text-[hsl(var(--muted-foreground))]">
                    01 / board notes
                  </p>
                  <h2 className="font-display text-4xl font-bold tracking-[-.04em]">
                    {kind}
                  </h2>
                </div>
                <span className="font-mono-ui text-sm text-[hsl(var(--muted-foreground))]">
                  {opportunities
                    .filter((item) => item.type === kind)
                    .length.toString()
                    .padStart(2, "0")}{" "}
                  listings
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {opportunities
                  .filter((item) => item.type === kind)
                  .map((item) => (
                    <OpportunityCard item={item} key={item.id} />
                  ))}
              </div>
            </div>
          ))}
        </section>
        <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <div className="border-l-4 border-[hsl(var(--accent))] bg-[hsl(var(--muted))] p-6">
            <p className="font-display text-2xl font-bold">
              Know a place that should be on this board?
            </p>
            <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              Send us the details. We check every listing before it reaches
              students.
            </p>
            <a
              href="mailto:phpa@smc.edu"
              data-testid="link-opportunity-suggest"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4"
            >
              Suggest an opportunity <Mail size={15} />
            </a>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <article
      data-testid={`card-event-${event.id}`}
      className="group border-t border-[hsl(var(--border))] py-7 transition-colors hover:border-[hsl(var(--primary))]"
    >
      <div className="grid gap-5 md:grid-cols-[150px_1fr_auto] md:items-start">
        <div>
          <p className="font-mono-ui text-sm font-bold text-[hsl(var(--primary))]">
            {event.dateLabel}
          </p>
          <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
            {event.time}
          </p>
        </div>
        <div>
          <Tag
            tone={
              event.category === "Panel"
                ? "yellow"
                : event.category === "Workshop"
                  ? "blue"
                  : "ink"
            }
          >
            {event.category}
          </Tag>
          <h3 className="mt-4 font-display text-3xl font-bold leading-none">
            {event.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
            {event.description}
          </p>
          <p className="mt-4 flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
            <MapPin size={14} />
            {event.location}
          </p>
        </div>
        <a
          href="#"
          data-testid={`link-rsvp-${event.id}`}
          className="inline-flex items-center gap-2 self-start border border-[hsl(var(--primary))] px-3 py-2 text-xs font-bold transition-colors hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
        >
          RSVP <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}

function Events() {
  const upcoming = events.filter((event) => !event.past);
  const past = events.filter((event) => event.past);
  return (
    <PageFrame>
      <main>
        <Masthead
          kicker="Calendar · Fall 2026"
          title={
            <>
              What’s happening
              <br />
              <span className="text-[hsl(var(--muted-foreground))]">
                at PHPA.
              </span>
            </>
          }
          body="Workshops, speakers, study sessions, socials, and other events for SMC pre-health students."
        />
        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <div className="grid gap-8 bg-[hsl(var(--primary))] p-7 text-[hsl(var(--primary-foreground))] md:grid-cols-[.6fr_1.4fr] md:p-12">
            {/* DATE SIDE */}
            <div className="border-b border-white/20 pb-8 md:border-b-0 md:border-r md:pb-0">
              <Tag tone="yellow">Next event</Tag>

              <p className="mt-12 font-mono-ui text-5xl leading-none text-[hsl(var(--accent))]">
                SEP
                <br />
                08
              </p>

              <p className="mt-4 text-sm opacity-70">
                Tuesday · 11:15 AM–12:30 PM
              </p>
            </div>

            {/* EVENT INFO */}
            <div className="md:pl-5">
              <p className="scribble opacity-70">
                Lab essentials · limited stock
              </p>

              <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[.92] tracking-[-.05em]">
                Lab Coat Sale
              </h2>

              <p className="mt-6 max-w-xl leading-7 opacity-75">
                Need a lab coat for class? Stop by PHPA&apos;s lab coat sale for
                washed and ready-to-use lab coats and goggles. Come early —
                quantities are limited.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm opacity-80">
                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  SCI 159
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  11:15 AM–12:30 PM
                </span>
              </div>

              {/* PRICES */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-white/25 px-4 py-2 text-sm">
                  Lab coats · $10
                </span>

                <span className="border border-white/25 px-4 py-2 text-sm">
                  Goggles · $5
                </span>
              </div>

              <p className="mt-5 font-mono-ui text-[10px] uppercase tracking-[.12em] opacity-60">
                Cash · Card · Zelle accepted
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between border-b border-[hsl(var(--border))] pb-5">
            <div>
              <p className="scribble mb-2 text-[hsl(var(--muted-foreground))]">
                The fall file
              </p>
              <h2 className="font-display text-4xl font-bold">
                Upcoming events
              </h2>
            </div>
            <CalendarDays className="text-[hsl(var(--muted-foreground))]" />
          </div>
          <div className="mt-2">
            {upcoming.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </section>
        <section className="mx-auto mt-20 max-w-7xl border-t border-[hsl(var(--border))] px-5 pt-14 lg:px-8">
          <p className="scribble mb-3 text-[hsl(var(--muted-foreground))]">
            From the archive
          </p>
          <h2 className="font-display text-4xl font-bold">Past gatherings</h2>
          <div className="mt-6 grid gap-x-10 md:grid-cols-2">
            {past.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

function PathwayPanel({
  pathway,
  active,
  onClick,
}: {
  pathway: Pathway;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`button-pathway-${pathway.id}`}
      className={`group flex w-full items-center justify-between border-b border-[hsl(var(--border))] px-5 py-5 text-left transition-all ${
        active
          ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
          : "bg-[hsl(var(--background))] hover:bg-[hsl(var(--muted))]"
      }`}
    >
      <div>
        <span
          className={`font-mono-ui text-[9px] uppercase tracking-[.14em] ${
            active ? "text-white/55" : "text-[hsl(var(--muted-foreground))]"
          }`}
        >
          {pathway.eyebrow}
        </span>

        <span className="mt-1 block font-display text-2xl font-bold leading-none">
          {pathway.label}
        </span>
      </div>

      <ArrowRight
        size={17}
        className={`transition-transform group-hover:translate-x-1 ${
          active
            ? "text-[hsl(var(--accent))]"
            : "text-[hsl(var(--muted-foreground))]"
        }`}
      />
    </button>
  );
}

function Guide() {
  const [activeId, setActiveId] = useState(pathways[0].id);

  const active =
    pathways.find((pathway) => pathway.id === activeId) ?? pathways[0];

  return (
    <PageFrame>
      <main>
        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <p className="font-mono-ui text-[10px] uppercase tracking-[.17em] text-[hsl(var(--muted-foreground))]">
                  Pre-Health Guide
                </p>

                <span className="h-px w-12 bg-[hsl(var(--accent))]" />
              </div>

              <h1 className="mt-7 max-w-3xl font-display text-6xl font-bold leading-[.84] tracking-[-.065em] text-[hsl(var(--primary))] md:text-8xl">
                There&apos;s more
                <br />
                than one way
                <br />
                <span className="text-[hsl(var(--muted-foreground))]">
                  to care.
                </span>
              </h1>
            </div>

            <div className="lg:pb-3">
              <p className="max-w-lg text-lg leading-8 text-[hsl(var(--muted-foreground))]">
                Explore some of the healthcare paths SMC students ask about
                most, what they can require, and what you might want to look
                into next.
              </p>

              <p className="mt-6 max-w-md font-mono-ui text-[9px] uppercase leading-5 tracking-[.13em] text-[hsl(var(--muted-foreground))]">
                Use this as a starting point. Always confirm requirements with
                SMC Counseling and the programs you&apos;re considering.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAY EXPLORER */}
        <section className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="border-y border-[hsl(var(--border))]">
            <div className="grid lg:grid-cols-[.72fr_1.28fr]">
              {/* LEFT PATH LIST */}
              <div className="border-[hsl(var(--border))] lg:border-r">
                <div className="border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-5 py-4">
                  <p className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))]">
                    Choose a path to explore
                  </p>
                </div>

                {pathways.map((pathway) => (
                  <PathwayPanel
                    pathway={pathway}
                    active={active.id === pathway.id}
                    onClick={() => setActiveId(pathway.id)}
                    key={pathway.id}
                  />
                ))}
              </div>

              {/* RIGHT DETAIL */}
              <div className="relative min-h-[600px] bg-[hsl(var(--card))] p-7 md:p-12 lg:p-14">
                <span
                  className="absolute right-8 top-7 font-display text-8xl leading-none text-[hsl(var(--primary))]/5"
                  aria-hidden="true"
                >
                  +
                </span>

                <p className="font-mono-ui text-[9px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
                  {active.eyebrow} · pathway notes
                </p>

                <h2 className="mt-4 font-display text-6xl font-bold leading-[.88] tracking-[-.055em] text-[hsl(var(--primary))]">
                  {active.label}
                </h2>

                <div className="mt-10 h-2 w-20 rotate-[-2deg] bg-[hsl(var(--accent))]" />

                <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Education path
                    </p>

                    <p className="mt-3 text-sm leading-7">{active.education}</p>
                  </div>

                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      What to focus on at SMC
                    </p>

                    <p className="mt-3 text-sm leading-7">{active.smc}</p>
                  </div>

                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Experience ideas
                    </p>

                    <p className="mt-3 text-sm leading-7">
                      {active.experience}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Good questions to ask
                    </p>

                    <ul className="mt-3 grid gap-3 text-sm leading-6">
                      {active.questions.map((question) => (
                        <li key={question} className="flex gap-3">
                          <span className="text-[hsl(var(--accent-foreground))]">
                            →
                          </span>

                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SMC RESOURCES */}
        <section className="mt-24 bg-[hsl(var(--secondary))] px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
              {/* INTRO */}
              <div>
                <p className="font-mono-ui text-[9px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
                  SMC Resources
                </p>

                <h2 className="mt-5 max-w-sm font-display text-5xl font-bold leading-[.92] tracking-[-.05em] text-[hsl(var(--primary))] md:text-6xl">
                  You don&apos;t have to figure it out alone.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                  SMC already has people and resources that can help with course
                  planning, transfer questions, career exploration, and figuring
                  out what comes next.
                </p>
              </div>

              {/* RESOURCE LINKS */}
              <div className="border-t border-[hsl(var(--primary))]/25">
                {/* FEATURED: GENERAL COUNSELING */}
                <a
                  href="https://www.smc.edu/student-support/academic-support/counseling/"
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-[hsl(var(--primary))]/20 py-7 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Start here
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-[hsl(var(--primary))]">
                      General Counseling
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      Plan classes, build an educational plan, and talk through
                      transfer requirements and next steps.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">
                    Meet with a counselor
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </a>

                {/* HEALTH SCIENCES */}
                <a
                  href="https://www.smc.edu/academics/academic-departments/health-sciences/counseling.php"
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-[hsl(var(--primary))]/20 py-7 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Health Sciences
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-[hsl(var(--primary))]">
                      Health Sciences Counseling
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      Get help with SMC health-science programs, educational
                      planning, transcript questions, and transfer pathways.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">
                    Explore counseling
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </a>

                {/* STEM COUNSELING */}
                <a
                  href="https://www.smc.edu/student-support/academic-support/counseling/special-support-programs/stem/counseling.php"
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-[hsl(var(--primary))]/20 py-7 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      STEM
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-[hsl(var(--primary))]">
                      STEM Counseling
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      Talk through STEM majors, academic planning, transfer
                      options, and your educational goals.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">
                    Visit STEM Counseling
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </a>

                {/* CAREER SERVICES */}
                <a
                  href="https://www.smc.edu/student-support/career-services/"
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-[hsl(var(--primary))]/20 py-7 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Careers + Experience
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-[hsl(var(--primary))]">
                      Career Services
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      Explore careers and majors, find internships and volunteer
                      opportunities, and get help with resumes and interviews.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">
                    Explore Career Services
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </a>

                {/* TRANSFER CENTER */}
                <a
                  href="https://www.smc.edu/student-support/academic-support/transfer-center/"
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div>
                    <p className="font-mono-ui text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Transfer
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-[hsl(var(--primary))]">
                      Transfer Center
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      Research transfer schools, articulation agreements,
                      workshops, university visits, and transfer requirements.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">
                    Visit the Transfer Center
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 border-l-4 border-[hsl(var(--accent))] bg-[hsl(var(--muted))] px-7 py-8 md:grid-cols-[.45fr_1.55fr] md:px-10">
            <h3 className="font-display text-2xl font-bold text-[hsl(var(--primary))]">
              Before you make a plan
            </h3>

            <p className="max-w-3xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              This is a student-made starting point, not academic or admissions
              advising. Requirements vary by school and can change, so check
              official program websites and meet with an SMC counselor before
              planning your courses.
            </p>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
function GuideBlurb({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="scribble mb-2 text-[hsl(var(--muted-foreground))]">
        {label}
      </p>
      <p className="max-w-2xl text-sm leading-7">{text}</p>
    </div>
  );
}

function About() {
  return (
    <PageFrame>
      <main>
        {/* ABOUT INTRO */}
        <Masthead
          kicker="About PHPA · Santa Monica College"
          title={
            <>
              A community
              <br />
              <span className="text-[hsl(var(--muted-foreground))]">
                for SMC students
              </span>
              <br />
              interested in healthcare.
            </>
          }
          body="PHPA brings together students exploring medicine, nursing, PA, dentistry, pharmacy, allied health, and other healthcare careers."
        />

        {/* MISSION */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="border-t-4 border-[hsl(var(--accent))] pt-6">
            <p className="scribble">Our mission</p>

            <p className="mt-7 font-display text-4xl font-bold leading-[1.03] tracking-[-.04em]">
              Helping students explore what comes next.
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[hsl(var(--muted-foreground))]">
            <p>
              We connect SMC students with healthcare resources, opportunities,
              events, and other students with similar goals.
            </p>

            <p>
              Whether you already know exactly what you want to do or are still
              exploring, PHPA is a place to learn more, ask questions, and get
              involved.
            </p>

            <NotebookRule />

            <p className="font-mono-ui text-xs uppercase tracking-wide text-[hsl(var(--primary))]">
              Student-led · Santa Monica College
            </p>
          </div>
        </section>

        {/* BOARD */}
        <section className="bg-[hsl(var(--secondary))] px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="Meet the board"
              title="Meet the PHPA board."
              body="Get to know the students helping organize PHPA this year."
            />

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {boardMembers.map((member) => (
                <article
                  key={member.id}
                  data-testid={`card-board-${member.id}`}
                >
                  {/* KEEP THIS PLACEHOLDER UNTIL REAL PHOTOS ARE ADDED */}
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    <PhotoPlaceholder
                      initials={member.initials}
                      label={member.name}
                    />
                  )}
                  /
                  <div className="border-b border-[hsl(var(--primary))]/25 pb-5 pt-4">
                    <h3 className="font-display text-2xl font-bold">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold">{member.role}</p>

                    <a
                      href={`mailto:${member.email}`}
                      data-testid={`link-board-email-${member.id}`}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold underline decoration-[hsl(var(--accent))] decoration-2 underline-offset-4"
                    >
                      <Mail size={13} />
                      Email {member.name.split(" ")[0]}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="scribble mb-3 text-[hsl(var(--muted-foreground))]">
                Get involved
              </p>

              <h2 className="font-display text-5xl font-bold leading-none">
                Want to get involved
                <br />
                with PHPA?
              </h2>
            </div>

            <Link
              href="/join"
              data-testid="link-about-join"
              className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))]"
            >
              Join PHPA <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

function Join() {
  return (
    <PageFrame>
      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <p className="scribble text-[hsl(var(--muted-foreground))]">
              Join PHPA
            </p>

            <h1 className="mt-5 max-w-xl font-display text-7xl font-bold leading-[.85] tracking-[-.07em] text-[hsl(var(--primary))]">
              Come be
              <br />
              part of it.
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">
              You do not need to have your healthcare path figured out to join
              PHPA. Come to an event, meet other students, and get involved
              whenever you&apos;re ready.
            </p>
          </div>

          {/* HOW TO JOIN */}
          <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] paper-shadow">
            <div className="border-b border-[hsl(var(--border))] p-6 md:p-8">
              <p className="font-mono-ui text-[9px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
                Start here
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold text-[hsl(var(--primary))]">
                Three easy ways to get involved.
              </h2>
            </div>

            {/* 01 */}
            <Link
              href="/events"
              className="group grid gap-4 border-b border-[hsl(var(--border))] p-6 transition-colors hover:bg-[hsl(var(--muted))] md:grid-cols-[45px_1fr_auto] md:items-center md:p-8"
            >
              <span className="font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">
                01
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold">
                  Come to an event
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                  Meetings, workshops, speakers, socials, and other PHPA events
                  are an easy way to meet people and see what we&apos;re doing.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-[hsl(var(--muted-foreground))] transition-transform group-hover:translate-x-1"
              />
            </Link>

            {/* 02 */}
            <a
              href="https://www.instagram.com/smcpha/"
              target="_blank"
              rel="noreferrer"
              className="group grid gap-4 border-b border-[hsl(var(--border))] p-6 transition-colors hover:bg-[hsl(var(--muted))] md:grid-cols-[45px_1fr_auto] md:items-center md:p-8"
            >
              <span className="font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">
                02
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold">Follow PHPA</h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                  Follow @SMCPHA for event reminders, announcements, and updates
                  throughout the semester.
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-[hsl(var(--muted-foreground))] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* 03 */}
            <a
              href="mailto:smcpha@gmail.com"
              className="group grid gap-4 p-6 transition-colors hover:bg-[hsl(var(--muted))] md:grid-cols-[45px_1fr_auto] md:items-center md:p-8"
            >
              <span className="font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">
                03
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold">Reach out</h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                  Have a question or want to help with PHPA? Send us a message
                  and someone from the board will get back to you.
                </p>
              </div>

              <Mail size={18} className="text-[hsl(var(--muted-foreground))]" />
            </a>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mx-5 mb-5 bg-[hsl(var(--accent))] lg:mx-8">
          <div className="mx-auto grid max-w-7xl gap-8 px-8 py-12 md:grid-cols-[1.2fr_.8fr] md:items-center md:px-14 md:py-16">
            <div>
              <p className="font-mono-ui text-[9px] uppercase tracking-[.16em] text-[hsl(var(--primary))]/65">
                No application required
              </p>

              <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[.9] tracking-[-.05em] text-[hsl(var(--primary))] md:text-6xl">
                Just show up.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-[hsl(var(--primary))]/75">
                Start with whatever sounds useful to you. You can always figure
                out the rest later.
              </p>
            </div>

            <div className="md:justify-self-end">
              <Link
                href="/events"
                className="inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-6 py-4 text-sm font-bold text-[hsl(var(--primary-foreground))]"
              >
                See upcoming events <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

function NotFoundPage() {
  return (
    <PageFrame>
      <main className="mx-auto flex min-h-[68vh] max-w-7xl items-center px-5 py-16 lg:px-8">
        <div>
          <p className="scribble text-[hsl(var(--muted-foreground))]">
            Page not found · 404
          </p>
          <h1 className="mt-5 font-display text-7xl font-bold leading-[.85] tracking-[-.06em] text-[hsl(var(--primary))]">
            This page
            <br />
            <span className="text-[hsl(var(--muted-foreground))]">
              wandered off.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">
            Try the bulletin board instead. It has better directions.
          </p>
          <ArrowLink href="/" testId="link-404-home">
            Back to the homepage
          </ArrowLink>
        </div>
      </main>
    </PageFrame>
  );
}

export { About, Events, Guide, Home, Join, NotFoundPage, Opportunities };
