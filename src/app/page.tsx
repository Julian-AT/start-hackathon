import { CaseTabs } from "@/features/marketing/sections/case-tabs";
import { CtaSection } from "@/features/marketing/sections/cta-section";
import { Faq } from "@/features/marketing/sections/faq";
import { Hero } from "@/features/marketing/sections/hero";
import { Hosts } from "@/features/marketing/sections/hosts";
import { PartnerMarquee } from "@/features/marketing/sections/partner-marquee";
import { SiteFooter } from "@/features/marketing/sections/site-footer";
import { SiteHeader } from "@/features/marketing/sections/site-header";
import { Testimonial } from "@/features/marketing/sections/testimonial";
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
        <Testimonial
          quote="“We wanted a hackathon that felt like a real shipping weekend, not a school exercise. Real cases, real partners, real money on the line.”"
          author="Dániel Sydó"
          role="Co-organizer, START Vienna"
        />
        <Faq />
        <Timeline />
        <Testimonial
          quote="“If you ship things and want to spend a weekend with great people building something that matters, you’re in the right place.”"
          author="Abdul Basit Banbhan"
          role="Co-organizer, START Vienna"
          py="pt-16 pb-24 lg:pt-20 lg:pb-28"
        />
        <Hosts />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
