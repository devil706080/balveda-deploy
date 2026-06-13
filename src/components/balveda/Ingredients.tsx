import { Leaf } from "lucide-react";
import { herbs, nutritionHighlights } from "./data";
import productImg from "@/assets/balveda-product.jpg.jpg";

export function Ingredients() {
  return (
    <section id="ingredients" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ingredients</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">12 powerful ayurvedic herbs</h2>
          <p className="mt-3 text-muted-foreground">
            Centuries-old ayurvedic wisdom, blended into ek single chocolate-flavoured scoop.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {herbs.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-medium"
              >
                <Leaf className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-accent/60 p-5 text-sm text-accent-foreground">
            <strong>Plus:</strong> Moringa & Ashwagandha — known in ayurveda for stamina, immunity
            aur growth support.
          </div>
        </div>

        <div>
          <img
            src={productImg}
            alt="Bal Veda 200g Ayurvedic Growth Formula product pack"
            className="w-full rounded-3xl border border-border bg-card shadow-md"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-2xl font-bold">Nutrition highlights (per daily serving)</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nutritionHighlights.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border bg-card p-4"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sun/30 text-cocoa">
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-foreground">{label}</div>
                <div className="truncate text-xs text-muted-foreground">{value}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          *Reference values for 5-10 years children. Refer to product label for exact composition.
        </p>
      </div>
    </section>
  );
}
