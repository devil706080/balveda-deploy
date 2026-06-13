import { Check, ShoppingBag, Sparkles } from "lucide-react";
import heroImg from "@/assets/balveda-chart.jpg.jpg";
import { siteConfig } from "@/lib/site-config";
import { heroBullets } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.93_0.05_135)_0%,transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> 100% Ayurvedic · 12 Power Herbs
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Kya aapka baccha apni umar ke hisaab se{" "}
            <span className="text-primary">poshan</span> pa raha hai?
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            <span className="font-semibold text-cocoa">Bal Veda Smart Poshan Powder</span> — bachchon ke
            sharirik aur mansik vikas ke liye specially designed ayurvedic growth formula.
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {heroBullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground/85">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.buyNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:translate-y-[-1px] hover:bg-primary/90"
            >
              <ShoppingBag className="h-4 w-4" /> Buy Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              Know More
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span>✓ No Chemicals</span>
            <span>✓ No Preservatives</span>
            <span>✓ Made in India</span>
            <span>✓ Trusted by 10,000+ parents</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/15 via-sun/15 to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Bal Veda Ayurvedic Growth Formula with happy children"
            className="w-full rounded-3xl border border-border bg-card object-cover shadow-xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
