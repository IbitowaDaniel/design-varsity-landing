import Image from "next/image";
import { cn } from "@/lib/utils";

interface ResponsiveAssetProps {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean; // pass true for hero / above-the-fold usage
}

export function ResponsiveAsset({
  mobile,
  tablet,
  desktop,
  alt,
  className,
  imgClassName,
  priority = false,
}: ResponsiveAssetProps) {
  return (
    <picture className={cn("flex w-full items-center justify-center", className)}>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <Image
        src={mobile}
        alt={alt}
        width={980}
        height={735}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ height: "auto" }} // <--- Add this inline style to clear the aspect ratio warning
        className={cn("w-full", imgClassName)} // Removed h-auto from className since we put it in style
      />
    </picture>
  );
}