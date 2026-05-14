import type { SVGProps } from "react";

export function LogoStartHack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M4 12 L10 6 L16 12 L10 18 Z" />
        <path d="M10 6 L10 18 M4 12 L16 12" strokeWidth="0.9" />
      </g>
      <text
        x="24"
        y="17"
        fontFamily="var(--font-iowan), Georgia, serif"
        fontSize="16"
        fontWeight="600"
        fill="currentColor"
      >
        START Hack Vienna
      </text>
    </svg>
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
