import {
  approachSteps,
  disclaimer,
  feelings,
  reasons,
  services,
  site,
  values,
  type Service,
} from "@/content/site";
import { Logo, RotatingBadge, Sparkle } from "./Art";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-lavender" : "text-violet"
      }`}
    >
      <Sparkle className="h-3 w-3" />
      {children}
    </p>
  );
}

const container = "mx-auto max-w-7xl px-4 sm:px-8 lg:px-12";

/* ------------------------------------------------------------------ */

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream/50 py-20 sm:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <Eyebrow>About Divyottam</Eyebrow>
          <h2 id="about-heading" className="font-display text-4xl leading-tight sm:text-5xl">
            A professional, confidential &amp; compassionate space
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-ink/85 lg:col-span-7">
          <p>
            Your mind influences the way you think, feel, behave, connect and experience life.
            When something feels difficult, understanding it is the first step towards meaningful
            change.
          </p>
          <p>
            At <strong>{site.name}</strong>, we provide a professional, confidential and
            compassionate space where psychological concerns can be understood through careful
            assessment, evidence-based psychological intervention and individualised support.
          </p>
          <blockquote className="border-l-4 border-coral pl-5 font-display text-2xl leading-snug text-ink">
            We believe that seeking psychological help is not a sign of weakness. It is an act of
            self-awareness.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const accentStyles: Record<Service["accent"], { card: string; dot: string }> = {
  coral: { card: "bg-coral/10", dot: "text-coral" },
  lavender: { card: "bg-lavender/20", dot: "text-violet" },
  sun: { card: "bg-sun/20", dot: "text-[#c9961f]" },
  navy: { card: "bg-navy text-white", dot: "text-sun" },
  sage: { card: "bg-sage/25", dot: "text-[#4d8a5c]" },
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <div className="max-w-3xl">
          <Eyebrow>What we can help you with</Eyebrow>
          <h2 id="services-heading" className="font-display text-4xl leading-tight sm:text-5xl">
            Psychological support for individuals, children, families &amp; caregivers
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const style = accentStyles[service.accent];
            const isAssessment = service.id === "psychological-assessment";
            return (
              <article
                key={service.id}
                id={service.id}
                className={`flex flex-col rounded-3xl p-8 ${style.card} ${
                  isAssessment ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="font-display text-2xl leading-snug">{service.title}</h3>
                {service.intro && (
                  <p className={`mt-4 leading-relaxed ${isAssessment ? "text-white/80" : "text-ink/80"}`}>
                    {service.intro}
                  </p>
                )}
                {service.note && (
                  <p
                    className={`mt-4 leading-relaxed ${
                      isAssessment ? "text-sm font-semibold text-white" : "text-ink/80"
                    }`}
                  >
                    {service.note}
                  </p>
                )}
                {service.items.length > 0 && (
                  <ul
                    className={`mt-5 grid gap-x-8 gap-y-2.5 ${isAssessment ? "sm:grid-cols-2" : ""}`}
                  >
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-snug">
                        <Sparkle className={`mt-1 h-3 w-3 shrink-0 ${style.dot}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="bg-mist/40 py-20 sm:py-28">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Our approach</Eyebrow>
            <h2 id="approach-heading" className="font-display text-4xl leading-tight sm:text-5xl">
              No &ldquo;one-size-fits-all&rdquo;
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/85 lg:col-span-7">
            <p>
              Every individual has a different history, personality, environment, relationships
              and coping style.
            </p>
            <p>
              Therefore, psychological care begins with{" "}
              <strong>understanding the person</strong> — not simply identifying a problem.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Our process">
          {approachSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-3xl bg-white p-6 shadow-sm">
              <span className="font-display text-5xl text-coral">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              {i < approachSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-ink text-xs text-white lg:grid"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold">
            We aim to create a therapeutic environment that is
          </h3>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-full border-2 border-ink bg-white px-5 py-2.5 text-sm font-medium"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function NotSure() {
  return (
    <section aria-labelledby="not-sure-heading" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <Sparkle className="absolute -right-10 top-10 h-48 w-48 text-navy-soft" />
      <Sparkle className="absolute bottom-10 left-6 h-16 w-16 text-coral/70" />
      <div className={`${container} relative grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <Eyebrow light>Sometimes, you may not know what is wrong</Eyebrow>
          <h2 id="not-sure-heading" className="font-display text-4xl leading-tight sm:text-5xl">
            You may simply feel:
          </h2>
          <p className="mt-6 font-display text-3xl leading-snug text-sun sm:text-4xl">
            &ldquo;I&rsquo;m not feeling like myself anymore.&rdquo;
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {feelings.map((f) => (
              <li key={f} className="flex gap-4 py-4 text-lg leading-snug text-white/90">
                <Sparkle className="mt-1.5 h-3.5 w-3.5 shrink-0 text-lavender" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg leading-relaxed text-white/85">
            You don&rsquo;t always need to have the right words before seeking help.{" "}
            <strong className="text-white">
              Understanding what is happening can be the beginning of the process.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function WhyUs() {
  return (
    <section id="why-divyottam" aria-labelledby="why-heading" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <div className="max-w-3xl">
          <Eyebrow>Why {site.name}?</Eyebrow>
          <h2 id="why-heading" className="font-display text-4xl leading-tight sm:text-5xl">
            Care that begins with understanding you
          </h2>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <article key={r.title} className="border-t-2 border-ink pt-6">
              <span className="text-sm font-semibold text-muted">0{i + 1}</span>
              <h3 className="mt-2 font-display text-2xl">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Contact() {
  const { phone, whatsapp, email, address } = site.contact;
  const hasContact = Boolean(phone || whatsapp || email);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream/60 py-20 sm:py-28">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <Eyebrow>Your mind deserves attention too</Eyebrow>
          <h2 id="contact-heading" className="font-display text-4xl leading-tight sm:text-6xl">
            &ldquo;I think I need to talk to someone.&rdquo;
          </h2>
          <div className="mt-8 space-y-3 text-lg leading-relaxed text-ink/85">
            <p>You don&rsquo;t have to wait until things become unbearable.</p>
            <p>
              You don&rsquo;t have to minimise what you&rsquo;re feeling because &ldquo;others
              have it worse.&rdquo;
            </p>
            <p>And you don&rsquo;t have to understand everything before asking for help.</p>
            <p className="font-semibold text-ink">Sometimes, the first step is simply saying it.</p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-[2rem] bg-ink p-8 text-white sm:p-10">
            <RotatingBadge
              id="badge-online"
              text="Online consultation • available • "
              sparkleColor="#f6c858"
              className="absolute -right-4 -top-12 h-28 w-28 rounded-full bg-white sm:-right-8"
            />
            <h3 className="font-display text-3xl">Book an appointment</h3>
            <p className="mt-3 text-white/75">
              For appointments &amp; enquiries, contact {site.legalName}. Online consultation
              available.
            </p>

            {hasContact ? (
              <ul className="mt-8 space-y-3">
                {whatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      className="flex items-center justify-between rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:bg-sun"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp <span aria-hidden="true">→</span>
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="flex items-center justify-between rounded-full border-2 border-white px-6 py-4 font-semibold transition hover:bg-white hover:text-ink"
                    >
                      Call {phone} <span aria-hidden="true">→</span>
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center justify-between rounded-full border-2 border-white px-6 py-4 font-semibold transition hover:bg-white hover:text-ink"
                    >
                      {email} <span aria-hidden="true">→</span>
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <p className="mt-8 rounded-2xl border border-white/20 p-5 text-white/80">
                Contact details coming soon.
              </p>
            )}
            {address && <p className="mt-6 text-sm text-white/60">{address}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className={container}>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2.5">
              <Logo className="h-9 w-9 text-white" />
              <span className="font-display text-3xl">{site.name}</span>
            </p>
            <p className="mt-3 font-display text-xl text-sun">{site.tagline}</p>
            <p className="mt-2 text-sm text-white/60">{site.disciplines}</p>
          </div>
          <a href="#contact" className="text-sm font-semibold uppercase tracking-widest underline underline-offset-4">
            Online consultation available
          </a>
        </div>
        <p className="mt-10 border-t border-white/15 pt-8 text-sm leading-relaxed text-white/60">
          <strong className="text-white/80">Important:</strong> {disclaimer}
        </p>
        <p className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
