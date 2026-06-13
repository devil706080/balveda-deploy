import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/balveda/SiteHeader";
import { Hero } from "@/components/balveda/Hero";
import { About } from "@/components/balveda/About";
import { Benefits } from "@/components/balveda/Benefits";
import { Ingredients } from "@/components/balveda/Ingredients";
import { HowToUse } from "@/components/balveda/HowToUse";
import { Testimonials } from "@/components/balveda/Testimonials";
import { FAQ } from "@/components/balveda/FAQ";
import { Contact } from "@/components/balveda/Contact";
import { SiteFooter } from "@/components/balveda/SiteFooter";
import { StickyCTA } from "@/components/balveda/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bal Veda — Smart Poshan Powder for Growing Kids | Ayurvedic Growth Formula" },
      {
        name: "description",
        content:
          "Bal Veda Smart Poshan Powder by Topveda — 100% Ayurvedic growth formula with 12 power herbs for height, immunity, brain development & stamina in children.",
      },
      { property: "og:title", content: "Bal Veda — Smart Poshan Powder for Growing Kids" },
      {
        property: "og:description",
        content:
          "Ayurvedic growth formula for children 5-15 years. Height, immunity, brain & energy support — delicious chocolate flavour.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
