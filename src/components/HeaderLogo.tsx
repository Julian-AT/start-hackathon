import { LottiePlaceholder } from "./LottiePlaceholder";

export function HeaderLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <LottiePlaceholder label="Logo animation" ratio="aspect-[140/40]" className="!rounded-md max-w-[140px]" />
    </div>
  );
}
