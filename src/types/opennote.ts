/* Opennote clone — domain types */

export type NavLink = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  illustration: string;
};

export type ColoredFeatureCard = FeatureCard & {
  color: "blue" | "yellow" | "pink" | "green" | "sage";
  rotation: 1 | 2 | 3 | 4;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type GalileoTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  videoSrc: string;
};
