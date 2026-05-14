import type { SVGProps } from "react";

export function HeroSurferDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 380 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Birds flying */}
        <path d="M70 60 q5 -6 10 0 q5 -6 10 0" />
        <path d="M310 50 q5 -6 10 0 q5 -6 10 0" />
        <path d="M340 70 q4 -5 8 0 q4 -5 8 0" />

        {/* Long arrow with feathers, person holding from top */}
        <path d="M170 30 L260 105" strokeWidth="1.8" />
        <path d="M250 92 L262 105 L249 116" strokeWidth="1.8" fill="none" />
        {/* Arrow feathers (back end) */}
        <path d="M168 28 L160 22 M170 30 L162 33 M172 32 L168 40" />

        {/* Surfer head */}
        <circle cx="195" cy="98" r="8" fill="currentColor" stroke="none" />
        {/* Hair bun */}
        <circle cx="200" cy="89" r="3.5" fill="currentColor" stroke="none" />

        {/* Body / torso (pink swimsuit triangle) */}
        <path d="M185 105 L210 110 L208 130 L182 125 Z" fill="#ff7aba" stroke="#ff7aba" />

        {/* Arm holding arrow */}
        <path d="M200 105 Q210 90 215 75" />

        {/* Lower body / legs */}
        <path d="M182 125 Q175 145 170 165" />
        <path d="M208 130 Q215 145 212 168" />
        <path d="M168 165 L165 175 M210 168 L208 178" />

        {/* Surfboard */}
        <ellipse
          cx="190"
          cy="180"
          rx="55"
          ry="11"
          fill="currentColor"
          stroke="currentColor"
        />

        {/* Wave squiggle line */}
        <path
          d="M30 200 Q70 195 100 205 Q130 215 170 200 Q210 185 250 195 Q290 205 330 195 Q360 188 380 200"
          strokeWidth="1.6"
        />
        <path
          d="M120 215 Q150 220 180 215 Q220 210 260 218 Q290 222 320 218"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}
