import Link from "next/link";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-gildas-2ab1303a3/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thomas.lav21/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:Thomas@digitaltimes.fr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const LEGAL = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-surface mt-0 text-ivory">
      <div className="section-shell py-14 sm:py-16">

        {/* Top row */}
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">

          {/* Brand block */}
          <div className="max-w-sm">
            <div className="flex select-none items-baseline gap-0">
              <span className="display-font text-[22px] font-[500] leading-none tracking-[-0.02em] text-ivory">
                Digital
              </span>
              <span className="display-font text-[22px] font-bold italic leading-none tracking-[-0.02em] text-saffron">
                Times
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-ivory/60">
              Mini-outils, automatisations n8n et solutions IA sur mesure pour les agences digitales qui veulent vendre mieux et délivrer plus proprement.
            </p>
            <a
              href="mailto:Thomas@digitaltimes.fr"
              className="mt-4 inline-block text-sm text-ivory/50 transition hover:text-ivory/80"
            >
              Thomas@digitaltimes.fr
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-ivory/60 transition duration-300 hover:border-white/24 hover:text-ivory"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/8" />

        {/* Bottom row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-ivory/36">
            © {year} DigitalTimes — Thomas Gildas. Tous droits réservés.
          </p>
          <nav className="flex flex-wrap gap-5">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] text-ivory/50 transition hover:text-ivory/80"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
