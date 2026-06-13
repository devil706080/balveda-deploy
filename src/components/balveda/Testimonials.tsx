import { Star } from "lucide-react";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Parents love it</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Parents kya kehte hain?</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex gap-0.5 text-sun">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
