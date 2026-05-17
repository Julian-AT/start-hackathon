import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

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
      <span className="text-dark-1 text-lg font-medium tracking-tight">START HACK Vienna</span>
    </div>
  );
}
