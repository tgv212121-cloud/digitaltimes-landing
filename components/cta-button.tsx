import type { AnchorHTMLAttributes } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function CTAButton({ href, label, variant = "primary", className, ...props }: CTAButtonProps) {
  const baseClasses =
    "button-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-petrol";

  const variantClasses =
    variant === "primary"
      ? "bg-graphite text-ivory shadow-glow hover:-translate-y-0.5 hover:bg-petrol"
      : "border border-[var(--line-strong)] bg-[rgba(255,252,248,0.66)] text-graphite hover:-translate-y-0.5 hover:border-petrol hover:bg-white/90";

  return (
    <a className={`${baseClasses} ${variantClasses} ${className ?? ""}`} href={href} {...props}>
      <span className="cta-label-stack">
        <span>{label}</span>
        <span aria-hidden="true">{label}</span>
      </span>
    </a>
  );
}
