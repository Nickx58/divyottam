import { site } from "@/content/site";
import { HeadIllustration, MindPair, RotatingBadge, Sparkle } from "./Art";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8 lg:px-12 lg:pt-16">
        {/* Top row: badge + headline */}
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="hidden lg:col-span-2 lg:block">
            <a href="#contact" className="block h-32 w-32" aria-label="Online consultation available — contact us">
              <RotatingBadge
                id="badge-consult"
                text="Online consultation • available • "
                sparkleColor="#b3a8f5"
              />
            </a>
          </div>

          <div className="text-center lg:col-span-9">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:text-sm">
              {site.disciplines}
            </p>
            <h1
              id="hero-heading"
              className="font-display text-[2.75rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[5rem] xl:text-[5.4rem]"
            >
              <span className="sr-only">{site.name} — </span>
              <span className="lg:whitespace-nowrap">
                Understand Your Mind
                <Sparkle className="ml-2 inline-block h-[0.55em] w-[0.55em] -translate-y-[0.4em] text-sun" />
              </span>
              <br />
              <span className="lg:whitespace-nowrap">Strengthen Your Life</span>
            </h1>
          </div>
        </div>

        {/* Bottom row: left copy, illustration, right copy */}
        <div className="mt-10 grid items-end gap-10 lg:mt-6 lg:grid-cols-12 lg:gap-6">
          <div className="order-2 pb-10 lg:order-1 lg:col-span-3 lg:pb-16">
            <p className="text-2xl leading-snug sm:text-[1.7rem]">
              Your mind influences the way you <strong>think</strong>, <strong>feel</strong>,
              behave, connect and experience life.
            </p>
            <a
              href="#about"
              className="mt-6 inline-block border-b-2 border-ink pb-1 text-sm font-medium uppercase tracking-[0.18em]"
            >
              Learn more
            </a>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-white transition hover:scale-105"
                aria-label="Book an online consultation"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M5 12h12m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="text-sm leading-snug text-muted">
                <span className="block font-semibold text-ink">Online consultation available</span>
                Talk to us from wherever you are.
              </p>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:col-span-6">
            <RotatingBadge
              id="badge-hear"
              text="We hear you • We understand • "
              sparkleColor="#ee7d55"
              ring="dark"
              className="absolute left-0 top-[12%] z-10 h-24 w-24 sm:h-36 sm:w-36"
            />
            <HeadIllustration className="animate-float relative h-auto w-full" />
          </div>

          <div className="order-3 flex flex-col gap-14 pb-10 lg:col-span-3 lg:pb-16 lg:text-right">
            <div className="flex flex-col items-start lg:items-end">
              <MindPair className="h-24 w-auto" />
              <p className="mt-4 max-w-[16rem] text-lg leading-relaxed">
                Seeking psychological help is not a sign of <strong>weakness</strong>. It is an act
                of <strong>self-awareness</strong>.
              </p>
            </div>
            <div>
              <p className="flex items-baseline gap-3 lg:justify-end">
                <span className="font-display text-4xl">Mind</span>
                <span className="text-lg">/ maɪnd /</span>
              </p>
              <p className="mt-3 max-w-[17rem] lg:ml-auto leading-relaxed text-muted">
                When something feels difficult, understanding it is the first step towards
                meaningful change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
