// Single source of truth for site-wide configuration.
// All values come from VITE_* env vars so non-technical users can change them
// in .env without touching code. Safe defaults are provided.

export const siteConfig = {
  brand: {
    name: "Bal Veda",
    parent: "Topveda Herbal Research & Lab",
    tagline: "Smart Poshan, Smart Future",
    subTagline: "Har Din Poshan, Har Din Vikas",
  },
  buyNowUrl:
    import.meta.env.VITE_BUY_NOW_URL ||
    "https://your-store.example.com/products/bal-veda",
  contact: {
    phonePrimary:
      import.meta.env.VITE_CONTACT_PHONE_PRIMARY || "+91 97186 67766",
    phoneSecondary:
      import.meta.env.VITE_CONTACT_PHONE_SECONDARY || "+91 97186 67728",
    whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "919718667766",
    email: import.meta.env.VITE_CONTACT_EMAIL || "support@balveda.in",
    address:
      import.meta.env.VITE_CONTACT_ADDRESS ||
      "Ghaziabad, Uttar Pradesh, India",
  },
} as const;

export const whatsappLink = (message = "Hi, I'd like to know more about Bal Veda.") =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
