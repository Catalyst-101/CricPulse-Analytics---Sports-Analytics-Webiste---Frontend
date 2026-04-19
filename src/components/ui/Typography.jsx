import { cn } from "../../lib/utils";

export const TitleLg = ({ children, className }) => (
  <h1 className={cn("font-display text-5xl md:text-6xl font-bold tracking-tight text-on-surface", className)}>
    {children}
  </h1>
);

export const TitleMd = ({ children, className }) => (
  <h2 className={cn("font-display text-2xl md:text-3xl font-semibold text-on-surface", className)}>
    {children}
  </h2>
);

export const TitleSm = ({ children, className, active }) => (
  <h3 className={cn("font-display text-xl font-medium", active ? "text-primary" : "text-on-surface", className)}>
    {children}
  </h3>
);

export const Body = ({ children, className, variant = "normal" }) => (
  <p className={cn(
    "font-body",
    variant === "normal" && "text-on-surface text-base",
    variant === "secondary" && "text-on-surface-variant text-sm",
    className
  )}>
    {children}
  </p>
);

export const Label = ({ children, className, active }) => (
  <span className={cn(
    "font-body text-xs font-semibold tracking-wider uppercase",
    active ? "text-primary" : "text-on-surface-variant",
    className
  )}>
    {children}
  </span>
);
