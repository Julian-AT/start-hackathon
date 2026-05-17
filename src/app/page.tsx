import { CaseTabs } from "@/features/marketing/sections/case-tabs";
import { CtaSection } from "@/features/marketing/sections/cta-section";
import { GridFeatures } from "@/features/marketing/sections/grid-features";
import { Hero } from "@/features/marketing/sections/hero";
import { Hosts } from "@/features/marketing/sections/hosts";
import { PartnerMarquee } from "@/features/marketing/sections/partner-marquee";
import { SiteHeader } from "@/features/marketing/sections/site-header";
import { Timeline } from "@/features/marketing/sections/timeline";
import { ValueProps } from "@/features/marketing/sections/value-props";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-x-clip pt-[calc(2.25rem+3.5rem)] pb-16">
        <Hero />
        <PartnerMarquee />
        <CaseTabs />
        <ValueProps />
        <GridFeatures />
        <Timeline />
        <Hosts />
        <CtaSection />
      </main>
    </>
  );
}
