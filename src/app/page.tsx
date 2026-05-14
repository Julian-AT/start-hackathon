import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UniversityLogos } from "@/components/UniversityLogos";
import { GalileoTabs } from "@/components/GalileoTabs";
import { UnderstandFeatures } from "@/components/UnderstandFeatures";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { BuiltForHow } from "@/components/BuiltForHow";
import { StopJuggling } from "@/components/StopJuggling";
import { Hosts } from "@/components/Hosts";
import { CTAYellow } from "@/components/CTAYellow";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 h-full w-full overflow-x-clip pt-[calc(36px+72px)] lg:pt-[calc(36px+88px)]">
        <Hero />
        <UniversityLogos />
        <GalileoTabs />
        <UnderstandFeatures />
        <TestimonialQuote
          quote={"“We wanted a hackathon that felt like a real shipping weekend, not a school exercise. Real cases, real partners, real money on the line.”"}
          author="Dániel Sydó"
          role="Co-organizer, START Vienna"
        />
        <BuiltForHow />
        <StopJuggling />
        <TestimonialQuote
          quote={"“If you ship things and want to spend a weekend with great people building something that matters, you’re in the right place.”"}
          author="Abdul Basit Banbhan"
          role="Co-organizer, START Vienna"
          py="pt-16 pb-24 lg:pt-20 lg:pb-28"
        />
        <Hosts />
        <CTAYellow />
      </main>
      <Footer />
    </>
  );
}
