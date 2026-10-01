import Link from "next/link";
import { nav, site } from "@/content/site";
import { Logo } from "./Art";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Logo className="h-9 w-9 text-ink" />
          <span className="font-display text-3xl leading-none tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-sm font-medium uppercase tracking-wide">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline-offset-4 transition hover:underline focus-visible:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border-2 border-ink px-7 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-ink hover:text-white sm:inline-flex"
          >
            Book a session <span aria-hidden="true">&nbsp;→</span>
          </a>

          {/* Mobile menu — no JavaScript needed */}
          <details className="group relative lg:hidden">
            <summary
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-2 border-ink"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-5 bg-ink shadow-[0_6px_0_#141414,0_-6px_0_#141414] group-open:rotate-45 group-open:shadow-none" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-3 w-64 rounded-2xl border border-black/10 bg-white p-3 shadow-xl"
            >
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-mist/40"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="#contact"
                    className="block rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
                  >
                    Book a session →
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
