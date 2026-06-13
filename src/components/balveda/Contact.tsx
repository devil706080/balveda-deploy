import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function Contact() {
  const c = siteConfig.contact;
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact us</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Aapke sawaal, hamare jawaab.</h2>
          <p className="mt-3 text-muted-foreground">
            Order, bulk enquiry ya product ke baare mein kuch bhi puchhna ho — humse jab chahein
            connect karein. WhatsApp pe sabse fast response milta hai.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          <ContactItem icon={Phone} label="Customer Care" lines={[c.phonePrimary, c.phoneSecondary]} href={`tel:${c.phonePrimary.replace(/\s/g, "")}`} />
          <ContactItem icon={Mail} label="Email" lines={[c.email]} href={`mailto:${c.email}`} />
          <ContactItem icon={MessageCircle} label="WhatsApp" lines={[c.phonePrimary]} href={whatsappLink()} />
          <ContactItem icon={MapPin} label="Address" lines={[c.address]} />
        </ul>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon, label, lines, href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="grid h-full grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-2xl border border-border bg-secondary/40 p-4 transition hover:border-primary/40">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        {lines.map((l) => (
          <div key={l} className="truncate text-sm font-medium text-foreground">{l}</div>
        ))}
      </div>
    </div>
  );
  return (
    <li>
      {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner}
    </li>
  );
}
