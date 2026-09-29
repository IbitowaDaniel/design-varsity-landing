import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "primaryFill" | "secondaryFill";
  href?: string;
}

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-body transition-all duration-150";

  const variants = {
    primary: cn(
      "bg-amber-700 text-white",
      "px-6 py-4",
      "rounded-[12px]",
      "border border-[rgba(17,24,39,0.6)]",
      "shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_4px_0_rgba(17,24,39,1)]",
      "hover:opacity-90",
      "active:shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_0px_0_rgba(17,24,39,1)]",
      "active:translate-y-[6px]"
    ),
    secondary: cn(
      "bg-white text-gray-700",
      "px-6 py-4",
      "rounded-[12px]",
      "border border-[rgba(17,24,39,0.6)]",
      "shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_4px_0_rgba(17,24,39,1)]",
      "hover:bg-gray-100",
      "active:shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_0px_0_rgba(17,24,39,1)]",
      "active:translate-y-[6px]"
    ),
    primaryFill: cn(
      "bg-amber-700 text-white",
      "w-full h-[50px]",
      "px-6 py-3",
      "rounded-[12px]",
      "border border-[rgba(17,24,39,0.6)]",
      "shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_4px_0_rgba(17,24,39,1)]",
      "hover:opacity-90",
      "active:shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_0px_0_rgba(17,24,39,1)]",
      "active:translate-y-[6px]"
    ),
    secondaryFill: cn(
      "bg-white text-gray-700",
      "w-full h-[50px]",
      "px-6 py-3",
      "rounded-[12px]",
      "border border-[rgba(17,24,39,0.6)]",
      "shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_4px_0_rgba(17,24,39,1)]",
      "hover:bg-gray-50",
      "active:shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_0px_0_rgba(17,24,39,1)]",
      "active:translate-y-[6px]"
    ),
  };

  if (href) {
    return (
      <a href={href} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}