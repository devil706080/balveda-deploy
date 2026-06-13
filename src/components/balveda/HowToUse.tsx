import { steps } from "./data";

export function HowToUse() {
  return (
    <section id="how-to-use" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How to use</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kaise istemal karein?</h2>
          <p className="mt-3 text-muted-foreground">4 simple steps — sirf 60 seconds mein taiyaar.</p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Use as directed on the label. Allergy ya medical condition wale bachchon ke liye pehle doctor se salah lein.
        </p>
      </div>
    </section>
  );
}
