import logoImg from "@/assets/balveda-logo.jpg.jpg";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "./data";

export function SiteFooter() {
  const c = siteConfig.contact;
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-lg font-bold text-primary">Bal Veda</div>
              <div className="text-xs text-muted-foreground">Smart Poshan, Smart Future</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Bal Veda Smart Poshan Powder is a product of {siteConfig.brand.parent} — committed to
            quality wellness products for Indian families.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${c.phonePrimary.replace(/\s/g, "")}`} className="hover:text-primary">{c.phonePrimary}</a></li>
            <li><a href={`mailto:${c.email}`} className="hover:text-primary">{c.email}</a></li>
            <li>{c.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {siteConfig.brand.parent}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
            <li><a href="#" className="hover:text-primary">Terms</a></li>
            <li><a href="#" className="hover:text-primary">Refund</a></li>
            <li><a href="#" className="hover:text-primary">Shipping</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
