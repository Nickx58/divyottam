import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  About,
  Approach,
  Contact,
  Footer,
  NotSure,
  Services,
  WhyUs,
} from "@/components/Sections";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Approach />
        <NotSure />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
