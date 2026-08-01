import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-gold text-cream hover:bg-gold-dark shadow-sm shadow-gold/30",
  outline:
    "border border-gold text-gold-dark hover:bg-gold hover:text-cream",
  ghost: "text-ink hover:text-gold-dark",
};

type ButtonProps = {
  variant?: keyof typeof styles;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string }) {
  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}
