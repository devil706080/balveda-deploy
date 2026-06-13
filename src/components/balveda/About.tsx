import { Check } from "lucide-react";
import { whyChoose } from "./data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Bal Veda</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ek nutritional formula, jo aapke bacche ke liye soch kar banaya gaya hai.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Aaj ke samay mein bahut se bachche balanced nutrition nahi le pate — junk food,
            screen-time aur picky eating sab common hai. <strong className="text-foreground">Bal Veda Smart Poshan Powder </strong>
            unke daily diet ko support karne ka ek convenient aur tasty option hai —
            12 powerful ayurvedic herbs ke saath, delicious chocolate flavour mein.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-bold text-foreground">Bal Veda kyon chunein?</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-xl bg-secondary/60 p-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
