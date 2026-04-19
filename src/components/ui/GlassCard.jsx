import { cn } from "../../lib/utils";

export const GlassCard = ({ children, className, glow = false }) => {
  return (
    <div
      className={cn(
        "rounded-md bg-surface-container/40 backdrop-blur-[12px] border border-outline-variant/15",
        glow && "shadow-[0_0_40px_rgba(156,255,147,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
};
