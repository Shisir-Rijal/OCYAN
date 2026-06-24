import Image from "next/image";
import { LightningIcon } from "./icons";
import { OrbitalGraphic } from "./orbital-graphic";
import { KpiBars } from "./kpi-bars";
import { HandsOffExecution } from "./hands-off-execution";

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
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) =>
  variant === "primary" ? (
    <a
      href="#"
      className={`inline-flex items-center justify-center rounded-full bg-black px-8 py-4 font-mono text-xs tracking-[0.05em] text-white shadow-md transition hover:opacity-80 ${className}`}
    >
      {children}
    </a>
  ) : (
    <a
      href="#"
      className={`inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-8 py-4 font-mono text-xs tracking-[0.05em] text-black backdrop-blur-md transition hover:bg-white ${className}`}
    >
      {children}
    </a>
  );

// ─────────────────────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-page/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-20">
        <Logo />
        <nav className="hidden gap-10 md:flex">
          {["Product", "Solutions", "Pricing"].map((l) => (
            <a key={l} href="#" className="text-base text-muted transition hover:text-ink">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="rounded-full bg-black px-6 py-2.5 font-mono text-xs tracking-wider text-white shadow-sm transition hover:opacity-80"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-halo relative overflow-hidden pt-40 pb-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-20 text-center">
        <h1 className="font-display text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-black">
          Automate your <span className="text-accent">Outreach</span>
          <br />
          with Agentic AI.
        </h1>
        <p className="max-w-[672px] text-xl leading-relaxed text-muted">
          From lead data enrichment to personalized sequences. Completely autonomous, human-level quality.
          Scale your top-of-funnel without lifting a finger.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <PillButton variant="primary">Get Started</PillButton>
          <PillButton variant="secondary">Book a Demo</PillButton>
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
    <section className="border-t border-b border-border/60 bg-[#f6f3f5]/30 py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/60">
          Trusted by innovative teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-60">
          {logos.map((c) => (
            <span
              key={c.name}
              className={`font-display text-2xl font-bold tracking-wide text-ink ${c.italic ? "italic" : ""}`}
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
    <section className="mx-auto max-w-[1280px] px-20 py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-[32px] font-semibold tracking-tight text-ink">
            <span className="text-accent">Autonomous</span> Intelligence
          </h2>
          <p className="max-w-[440px] text-base leading-relaxed text-muted">
            Our agents navigate LinkedIn, company websites, and public directories autonomously. They don&apos;t just
            scrape data: they understand organizational structures and ensure first perfect-fit touchpoints with
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
    <section className="mx-auto max-w-[1280px] px-20 py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Laptop with email inside */}
        <div className="relative mx-auto w-full max-w-[560px]">
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
        <div className="flex flex-col gap-5 lg:pl-8">
          <h2 className="font-display text-[32px] font-semibold tracking-tight text-ink">
            <span className="text-accent">Personalization</span> at Scale
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Our models synthesize the gathered context to write bespoke, hyper-personalized emails. No templates,
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
    <section className="mx-auto max-w-[1280px] px-20 py-12">
      <div className="overflow-hidden rounded-3xl border border-border bg-white/70 p-16 shadow-xl backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <blockquote className="font-display text-[28px] font-semibold leading-tight tracking-tight text-[#271901]">
              &ldquo;OcyanOutreach entirely <span className="text-accent">revolutionized</span> our SDR. The quality of
              the personalization is indistinguishable from our best human reps, but it operates at 100&times; the
              volume. Our pipeline has never been healthier.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#271901]/20 bg-page/50">
                <span className="text-base font-bold text-[#271901]">MP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-[#271901]">Magdalena Prantl</span>
                <span className="font-mono text-[11px] tracking-wider text-[#271901]/70">Head of SDR, Maltego</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-display text-[48px] font-bold tracking-[-0.05em] text-[#271901]">32%</span>
            <span className="text-center font-mono text-[11px] uppercase tracking-wider text-[#271901]/80">
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
    <section className="mx-auto max-w-[1280px] px-20 py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
            <LightningIcon className="h-5 w-5 text-accent" />
          </div>
          <h2 className="font-display text-[32px] font-semibold tracking-tight text-ink">
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
    <section className="hero-halo relative border-t border-border py-28">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 px-4 text-center">
        <h2 className="font-display text-[48px] font-bold leading-tight tracking-tight text-ink">
          Ready to put your outreach on <span className="text-accent">autopilot</span>?
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Join forward-thinking revenue teams scaling their top-of-funnel with autonomous AI agents.
        </p>
        <PillButton variant="primary" className="mt-2 px-10">
          Start Scaling Now
        </PillButton>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["Documentation", "API Reference", "Status", "Privacy Policy", "Terms of Service", "Contact"];
  return (
    <footer className="border-t border-border bg-[#f1eff0]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-20 py-16 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-muted">Agentic AI for Go-To-Market</p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-2">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-muted transition hover:text-ink">
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-end justify-end md:justify-end">
          <p className="font-mono text-[11px] tracking-wider text-muted">
            © 2026 OCYAN AI. GmbH
            <br />
            All rights reserved.
          </p>
        </div>
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
        <TrustedBySection />
        <AutonomousIntelligenceSection />
        <PersonalizationSection />
        <TestimonialSection />
        <HandsOffExecution />
        <SelfImprovingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
