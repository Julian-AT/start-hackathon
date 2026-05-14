import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
};

export function IconPlaceholder({ className, size = 64 }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border-2 border-dashed border-dark-1/15 bg-light-2 text-dark-3",
        className,
      )}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Illustration placeholder"
    >
      <svg
        className="w-1/2 h-1/2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M21 15l-5-5L5 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
