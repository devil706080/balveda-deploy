import { ShoppingBag, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function StickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom)] sm:hidden">
      <div className="pointer-events-auto mx-3 mb-3 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary px-3 py-3 text-sm font-semibold text-foreground"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href={siteConfig.buyNowUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
        >
          <ShoppingBag className="h-4 w-4" /> Order Bal Veda
        </a>
      </div>
    </div>
  );
}
