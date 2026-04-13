import type { AnchorHTMLAttributes } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function CTAButton({ href, label, variant = "primary", className, ...props }: CTAButtonProps) {
  const baseClasses =
    "button-ring inline-flex items-center justify-center px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] transition-[letter-spacing,background-color,color] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-petrol";

  const variantClasses =
    variant === "primary"
      ? "bg-graphite text-ivory hover:tracking-[0.24em] hover:bg-petrol"
      : "border border-[var(--line-strong)] bg-transparent text-graphite hover:tracking-[0.24em] hover:border-petrol hover:text-petrol";

  return (
    <a className={`${baseClasses} ${variantClasses} ${className ?? ""}`} href={href} {...props}>
      {label}
    </a>
  );
}
