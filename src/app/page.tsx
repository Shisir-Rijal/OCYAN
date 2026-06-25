import Image from "next/image";
import { LightningIcon, LinkedInIcon } from "./icons";
import { OrbitalGraphic } from "./orbital-graphic";
import { KpiBars } from "./kpi-bars";
import { HandsOffExecution } from "./hands-off-execution";
import { SmoothLink } from "./smooth-link";

// ─────────────────────────────────────────────────────────────────────────────
// Reusable tiny bits
// ─────────────────────────────────────────────────────────────────────────────
const Logo = ({ size = "text-3xl" }: { size?: string }) => (
  <span className={`font-display font-bold ${size} tracking-[0.5em] text-ink`}>
    OC<span className="text-accent">Y</span>AN
  </span>
);

const PillButton = ({
  children,
  variant = "primary",
  className = "",
  href = "#contact",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}) =>
  variant === "primary" ? (
    <SmoothLink
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-black px-8 py-4 font-mono text-xs tracking-[0.05em] text-white shadow-md transition hover:opacity-80 ${className}`}
    >
      {children}
    </SmoothLink>
  ) : (
    <SmoothLink
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-8 py-4 font-mono text-xs tracking-[0.05em] text-black backdrop-blur-md transition hover:bg-white ${className}`}
    >
      {children}
    </SmoothLink>
  );

// ─────────────────────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-page/70 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1280px] grid-cols-3 items-center px-5 sm:h-20 lg:px-20">
        <Logo size="text-xl sm:text-3xl" />
        <nav className="hidden justify-center gap-10 md:flex">
          {[
            { label: "How it Works", href: "#how-it-works" },
            { label: "Results", href: "#results" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <SmoothLink key={l.label} href={l.href} className="text-base text-muted transition hover:text-ink">
              {l.label}
            </SmoothLink>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-4">
          <SmoothLink
            href="#contact"
            className="rounded-full bg-black px-4 py-2 font-mono text-[10px] tracking-wider text-white shadow-sm transition hover:opacity-80 sm:px-6 sm:py-2.5 sm:text-xs"
          >
            Get Started
          </SmoothLink>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-16 pt-28 sm:pt-40">
      {/* Background image */}
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={95}
        className="pointer-events-none object-cover"
        style={{ filter: "saturate(1) brightness(1.08)", opacity: 0.75 }}
      />
      {/* Soft white fade at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-page to-transparent" />
      <div className="relative z-20 mx-auto flex max-w-[1280px] flex-col items-center gap-5 px-6 text-center sm:gap-6 lg:px-20">
        <h1 className="font-display text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-black sm:text-[40px] lg:text-[52px]">
          Automate your <span className="text-accent">Outreach</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          with Agentic AI.
        </h1>
        <p className="max-w-[672px] text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
          From lead data enrichment to personalized sequences. Completely autonomous, human quality.
          Scale your top of funnel without lifting a finger.
        </p>
        <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:mt-4 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <PillButton variant="primary" href="#contact">Get Started</PillButton>
          <PillButton variant="secondary" href="#contact">Book a Demo</PillButton>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const logos = [
    { name: "Maltego" },
    { name: "Celonis", italic: true },
    { name: "Lithodat" },
    { name: "Scenaryo" },
  ];
  return (
    <section className="border-t border-b border-border/60 bg-[#f6f3f5]/30 py-6 sm:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-5 px-6 sm:gap-6 lg:px-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted/60 sm:text-[11px]">
          Trusted by innovative teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60 sm:gap-x-16 sm:gap-y-6">
          {logos.map((c) => (
            <span
              key={c.name}
              className={`font-display text-lg font-bold tracking-wide text-ink sm:text-2xl ${c.italic ? "italic" : ""}`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutonomousIntelligenceSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 sm:py-20 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Text */}
        <div className="flex flex-col gap-4 text-center lg:text-left lg:gap-5">
          <h2 className="font-display text-[26px] font-semibold tracking-tight text-ink sm:text-[32px]">
            <span className="text-accent">Autonomous</span> Intelligence
          </h2>
          <p className="mx-auto max-w-[440px] text-base leading-relaxed text-muted lg:mx-0">
            Our agents navigate LinkedIn, company websites, and public directories autonomously. They don&apos;t just
            scrape data: they understand organizational structures and ensure precise first touchpoints with
            your prospects.
          </p>
        </div>

        {/* Orbital graphic */}
        <OrbitalGraphic />
      </div>
    </section>
  );
}


function PersonalizationSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 sm:py-20 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Laptop with email inside */}
        <div className="relative mx-auto w-full max-w-[560px] order-2 lg:order-1">
          {/* Soft halo behind */}
          <div className="absolute -inset-12 -z-10 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative aspect-[552/335] w-full">
            {/* Macbook frame */}
            <Image src="/assets/macbook.png" alt="" fill className="object-contain" />
            {/* Email screenshot placed inside screen area */}
            <div className="absolute left-[10.5%] right-[10.5%] top-[3.5%] bottom-[10%] overflow-hidden rounded-[6px]">
              <Image
                src="/assets/screenshot-email.png"
                alt="Personalized email"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 flex flex-col gap-4 text-center lg:order-2 lg:gap-5 lg:pl-8 lg:text-left">
          <h2 className="font-display text-[26px] font-semibold tracking-tight text-ink sm:text-[32px]">
            <span className="text-accent">Personalization</span> at Scale
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Our models synthesize the gathered context to write bespoke, deeply personalized emails. No templates,
            no generic variables. Every message reads as if you spent 30 minutes researching the prospect yourself
            and is refineable to suit your specific expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section id="results" className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12 lg:px-20">
      <div className="overflow-hidden rounded-2xl border border-border bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:p-10 sm:rounded-3xl lg:p-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-2 lg:gap-8">
            <blockquote className="font-display text-[18px] font-semibold italic leading-snug tracking-tight text-[#271901] sm:text-[22px] lg:text-[28px]">
              &ldquo;OcyanOutreach entirely <span className="text-accent">revolutionized</span> our SDR. The quality of
              the personalization is indistinguishable from our best human reps, but it operates at 100&times; the
              volume. Our pipeline has never been healthier.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#271901]/20 bg-page/50">
                <span className="text-base font-bold text-[#271901]">MP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-[#271901]">Magdalena Prantl</span>
                <span className="font-mono text-[11px] tracking-wider text-[#271901]/70">Head of SDR, Maltego</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 border-t border-border pt-6 lg:flex-col lg:gap-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span className="font-display text-[40px] font-bold tracking-[-0.05em] text-[#271901] sm:text-[48px]">32%</span>
            <span className="text-left font-mono text-[10px] uppercase tracking-wider text-[#271901]/80 sm:text-[11px] lg:text-center">
              Increase in demos booked
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


function SelfImprovingSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 sm:py-20 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4 lg:gap-5">
          <h2 className="font-display text-[26px] font-semibold tracking-tight text-ink sm:text-[32px]">
            <span className="text-accent">Self-Improving</span> Intelligence
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Our agents analyze every interaction, learning from conversion data to refine messaging suited to your
            ideal customer profiles in real-time.
          </p>
        </div>
        <KpiBars />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 sm:py-28">
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        sizes="100vw"
        quality={95}
        className="pointer-events-none object-cover"
        style={{ filter: "saturate(1) brightness(1.1)", opacity: 0.75 }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-page to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-page to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center gap-5 px-6 text-center sm:gap-6">
        <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[40px] lg:text-[48px]">
          Ready to put your outreach on <span className="text-accent">autopilot</span>?
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Join ambitious revenue teams scaling their top of funnel with autonomous AI agents.
        </p>
        <PillButton variant="primary" className="mt-2 px-10" href="#contact">
          Get in Touch
        </PillButton>
      </div>
    </section>

  );
}

const FOUNDERS = [
  {
    initials: "SR",
    name: "Shisir Rijal",
    role: "Co-Founder",
    email: "sr@ocyan.ai",
    linkedin: "https://www.linkedin.com/in/shisir-rijal-724051226/",
  },
  {
    initials: "MN",
    name: "Marko Novak",
    role: "Co-Founder",
    email: "mn@ocyan.ai",
    linkedin: "https://www.linkedin.com/in/marko-n-6766133b4/",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-[#f6f3f5]/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-14">
          <h2 className="font-display text-[28px] font-bold tracking-tight text-ink sm:text-[36px]">
            Let&rsquo;s <span className="text-accent">talk.</span>
          </h2>
          <p className="max-w-[440px] text-base leading-relaxed text-muted">
            We&rsquo;re available directly. Reach out and we&rsquo;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto grid max-w-[640px] grid-cols-1 gap-4 sm:grid-cols-2">
          {FOUNDERS.map((f) => (
            <div
              key={f.email}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-white/70 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#271901]/20 bg-page/50">
                  <span className="text-sm font-bold text-[#271901]">{f.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{f.name}</p>
                  <p className="font-mono text-[10px] tracking-wider text-muted">{f.role}</p>
                </div>
              </div>

              <a
                href={`mailto:${f.email}`}
                className="font-mono text-[12px] tracking-wide text-accent transition hover:opacity-70"
              >
                {f.email}
              </a>

              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted transition hover:text-ink"
              >
                <LinkedInIcon className="h-4 w-4 text-[#0a66c2]" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[#f1eff0]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left lg:px-20">
        <div className="flex flex-col gap-1">
          <Logo size="text-xl" />
          <p className="text-sm text-muted">Agentic AI for Go-To-Market</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#contact" className="text-sm text-muted transition hover:text-ink">Contact</a>
          <a
            href="https://www.linkedin.com/in/shisir-rijal-724051226/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition hover:text-ink"
          >
            <LinkedInIcon className="h-4 w-4" />
            Shisir
          </a>
          <a
            href="https://www.linkedin.com/in/marko-n-6766133b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition hover:text-ink"
          >
            <LinkedInIcon className="h-4 w-4" />
            Marko
          </a>
        </div>
        <p className="font-mono text-[11px] tracking-wider text-muted">
          © 2026 OCYAN AI
        </p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AutonomousIntelligenceSection />
        <PersonalizationSection />
        {/* <TestimonialSection /> — pending legal review */}
        <div id="how-it-works">
          <HandsOffExecution />
        </div>
        <SelfImprovingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
