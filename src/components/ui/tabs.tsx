"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "border-border relative flex flex-wrap items-center justify-center gap-x-8 gap-y-1 border-b",
        className,
      )}
      {...props}
    />
  );
}

function TabsTab({ className, ...props }: ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "b2 text-dark-3 focus-visible:ring-ring relative -mb-px py-4 font-normal whitespace-nowrap transition-colors outline-none",
        "hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-0",
        "data-[selected]:text-foreground data-[selected]:font-medium",
        className,
      )}
      {...props}
    />
  );
}

function TabsIndicator({ className, ...props }: ComponentProps<typeof TabsPrimitive.Indicator>) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "bg-foreground absolute -bottom-px left-0 h-[2px] transition-all duration-200",
        "w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)]",
        className,
      )}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("focus-visible:ring-ring outline-none focus-visible:ring-2", className)}
      {...props}
    />
  );
}

export { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab };
