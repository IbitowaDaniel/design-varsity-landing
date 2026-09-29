import Image from "next/image";

interface EyebrowProps {
  label: string;
  className?: string;
}

export default function Eyebrow({ label, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-2xl bg-amber-50 border border-gray-300 px-4 py-2 text-body text-gray-500 ${className}`}
    >
      <Image
        src="/assets/icons/section-eyebrow-icon.svg"
        alt=""
        width={20}
        height={24}
        aria-hidden
      />
      {label}
    </span>
  );
}