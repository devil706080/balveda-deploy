import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import logoImg from "@/assets/balveda-logo.jpg.jpg";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <img src={logoImg} alt="Bal Veda logo" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-border" />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-bold text-primary">Bal Veda</div>
            <div className="truncate text-[10px] uppercase tracking-wider text-muted-foreground">Ayurvedic Growth Formula</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/75 transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.buyNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 sm:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" /> Buy Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={siteConfig.buyNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <ShoppingBag className="h-4 w-4" /> Buy Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
