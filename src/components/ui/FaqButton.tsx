// components/ui/FaqButton.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FaqButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
}

export function FaqButton({
  isOpen = false,
  className,
  ...props
}: FaqButtonProps) {
  const base =
    "inline-flex items-center justify-center transition-all duration-150";

  const styling = cn(
    "bg-amber-700 text-white",
    "w-8 h-8 shrink-0", // <-- Added shrink-0 here
    "p-2",
    "rounded-md",
    "border border-[rgba(17,24,39,0.6)]",
    "shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_4px_0_rgba(17,24,39,1)]",
    "hover:opacity-90",
    "active:shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_0px_0_rgba(17,24,39,1)]",
    "active:translate-y-[6px]"
  );

  return (
    <button className={cn(base, styling, className)} {...props}>
      <Image
        src={
          isOpen
            ? "/assets/icons/minus-bold.svg"
            : "/assets/icons/plus-bold.svg"
        }
        alt={isOpen ? "Close accordion" : "Open accordion"}
        width={16}
        height={16}
      />
    </button>
  );
}