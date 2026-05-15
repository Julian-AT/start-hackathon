import Image from "next/image";
import type { ComponentPropsWithoutRef, SVGProps } from "react";

import { cn } from "@/lib/utils";

export function LogoStartHack({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <Image
        src="/images/logo_transparent.png"
        alt=""
        width={200}
        height={200}
        className="h-8 w-auto shrink-0"
        aria-hidden="true"
      />
      <span className="text-dark-1 text-lg font-medium tracking-tight">START Hack Vienna</span>
    </div>
  );
}

export function FiveStars(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="124"
      height="20"
      viewBox="0 0 124 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${10 + i * 24} 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L${10 + i * 24} 2z`}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
