import { Camera } from "lucide-react";

type Props = {
  /** Human-readable TODO for photographers / content */
  todo: string;
  label: string;
  className?: string;
  aspectClassName?: string;
};

export function ImagePlaceholder({
  todo,
  label,
  className = "",
  aspectClassName = "aspect-[16/10]",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-navy-soft via-[#dce5f0] to-[#cfd9e6] ${aspectClassName} ${className}`}
      role="img"
      aria-label={label}
    >
      {/* TODO: IMAGE — {todo} */}
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,#1b3a6b_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-navy">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/70 text-navy">
          <Camera className="h-6 w-6" aria-hidden />
        </span>
        <span className="max-w-xs text-sm font-medium tracking-wide text-navy/80">
          {label}
        </span>
      </div>
    </div>
  );
}
