import { CaseTabs } from "@/features/marketing/sections/case-tabs";
import { CtaSection } from "@/features/marketing/sections/cta-section";
import { Faq } from "@/features/marketing/sections/faq";
import { Hero } from "@/features/marketing/sections/hero";
import { Hosts } from "@/features/marketing/sections/hosts";
import { PartnerMarquee } from "@/features/marketing/sections/partner-marquee";
import { SiteFooter } from "@/features/marketing/sections/site-footer";
import { SiteHeader } from "@/features/marketing/sections/site-header";
import { Timeline } from "@/features/marketing/sections/timeline";
import { ValueProps } from "@/features/marketing/sections/value-props";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="h-full w-full flex-1 overflow-x-clip pt-[calc(36px+72px)] lg:pt-[calc(36px+88px)]">
        <Hero />
        <PartnerMarquee />
        <CaseTabs />
        <ValueProps />
        <Faq />
        <Timeline />
        <Hosts />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
