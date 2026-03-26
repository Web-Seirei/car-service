import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  variant?: "beige" | "white" | "dark";
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const variantClasses: Record<NonNullable<SectionProps["variant"]>, string> = {
  beige: "bg-bg-page",
  white: "bg-white",
  dark: "bg-bg-dark text-text-on-dark",
};

export function Section({
  id,
  variant = "beige",
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn(variantClasses[variant], className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

export function SectionHeader({
  title,
  subtitle,
  variant = "light",
}: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <h2
        className={cn(
          "text-3xl font-bold md:text-4xl",
          variant === "light" ? "text-text-primary" : "text-text-on-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-3xl text-lg",
            variant === "light" ? "text-text-secondary" : "text-text-on-dark/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
