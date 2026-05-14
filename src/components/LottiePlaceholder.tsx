import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  className?: string;
  ratio?: string;
};

export function LottiePlaceholder({
  label = "Animation",
  className,
  ratio = "aspect-[4/3]",
}: Props) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center rounded-2xl border-2 border-dashed border-dark-1/15 bg-light-2",
        ratio,
        className,
      )}
      aria-label={label}
      role="img"
    >
      <div className="flex flex-col items-center gap-2 text-dark-3">
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5l14 7-14 7V5z"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
        <span className="text-xs uppercase tracking-wider font-medium">{label}</span>
      </div>
    </div>
  );
}
