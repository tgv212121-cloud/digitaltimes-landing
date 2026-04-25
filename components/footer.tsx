import Link from "next/link";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-gildas-2ab1303a3/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thomas.lav21/",
  },
  {
    label: "Email",
    href: "mailto:Thomas@digitaltimes.fr",
  },
];

const LEGAL = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-de-confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ivory">
      <div className="section-shell py-12 sm:py-16">

        {/* Top : brand + socials */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex select-none items-baseline gap-0">
              <span className="display-font text-[18px] font-[600] leading-none tracking-[-0.03em] text-graphite">
                Digital
              </span>
              <span className="display-font text-[18px] font-[800] leading-none tracking-[-0.03em] text-petrol" style={{ fontStyle: "italic" }}>
                Times
              </span>
            </div>
            <a
              href="mailto:Thomas@digitaltimes.fr"
              className="link-underline mt-3 inline-block text-[13px] text-graphite/50"
            >
              Thomas@digitaltimes.fr
            </a>
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="link-underline text-[13px] text-graphite/50"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[var(--line)]" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-graphite/30">
            © {year} DigitalTimes · Thomas Gildas
          </p>
          <nav className="flex flex-wrap gap-5">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[12px] text-graphite/40"
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
