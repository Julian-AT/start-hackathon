import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SITE_URL } from "@/features/marketing/config";
import { getTrackDetail, trackDetails } from "@/features/marketing/content";
import { SiteHeader } from "@/features/marketing/sections/site-header";
import { TrackDetailPage } from "@/features/marketing/sections/track-detail-page";

type TrackPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trackDetails.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrackDetail(slug);

  if (!track) {
    return {};
  }

  const title = `${track.name} - START Hack Vienna '26`;
  const description = `${track.category}: ${track.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/tracks/${track.slug}`,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/tracks/${track.slug}`,
      title,
      description,
      images: [
        {
          url: track.logo,
          alt: `${track.partner} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [track.logo],
    },
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { slug } = await params;
  const track = getTrackDetail(slug);

  if (!track) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <div className="pt-[var(--header-h)]">
        <TrackDetailPage track={track} />
      </div>
    </>
  );
}
