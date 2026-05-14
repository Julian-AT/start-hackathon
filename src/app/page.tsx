import { BuiltForHow } from "@/components/BuiltForHow";
import { CTAYellow } from "@/components/CTAYellow";
import { Footer } from "@/components/Footer";
import { GalileoTabs } from "@/components/GalileoTabs";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hosts } from "@/components/Hosts";
import { StopJuggling } from "@/components/StopJuggling";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { UnderstandFeatures } from "@/components/UnderstandFeatures";
import { UniversityLogos } from "@/components/UniversityLogos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full flex-1 overflow-x-clip pt-[calc(36px+72px)] lg:pt-[calc(36px+88px)]">
        <Hero />
        <UniversityLogos />
        <GalileoTabs />
        <UnderstandFeatures />
        <TestimonialQuote
          quote={
            "“We wanted a hackathon that felt like a real shipping weekend, not a school exercise. Real cases, real partners, real money on the line.”"
          }
          author="Dániel Sydó"
          role="Co-organizer, START Vienna"
        />
        <BuiltForHow />
        <StopJuggling />
        <TestimonialQuote
          quote={
            "“If you ship things and want to spend a weekend with great people building something that matters, you’re in the right place.”"
          }
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
