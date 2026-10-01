import type { SVGProps } from "react";

const SPARKLE_PATH =
  "M0 -50 C6 -14 14 -6 50 0 C14 6 6 14 0 50 C-6 14 -14 6 -50 0 C-14 -6 -6 -14 0 -50Z";

export function Sparkle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-50 -50 100 100" aria-hidden="true" className={className} {...props}>
      <path d={SPARKLE_PATH} fill="currentColor" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <path d="M3 21 A17 17 0 0 0 37 21 Z" fill="currentColor" />
      <circle cx="20" cy="15" r="5.5" fill="#f6c858" />
    </svg>
  );
}

type BadgeProps = {
  id: string;
  text: string;
  sparkleColor: string;
  ring?: "light" | "dark";
  className?: string;
};

/** Circular rotating text with a sparkle in the middle (purely decorative). */
export function RotatingBadge({ id, text, sparkleColor, ring = "light", className }: BadgeProps) {
  const textColor = ring === "dark" ? "#ffffff" : "#141414";
  return (
    <div className={className ?? "relative"} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
        <defs>
          <path id={id} d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        {ring === "dark" && <circle cx="100" cy="100" r="100" fill="#141414" />}
        <text
          fill={textColor}
          fontSize="15"
          letterSpacing="5.5"
          fontWeight="600"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] grid place-items-center rounded-full bg-ink">
        <Sparkle className="h-1/2 w-1/2" style={{ color: sparkleColor }} />
      </div>
    </div>
  );
}

/** Head-in-profile illustration with a calm cosmos and a growing lotus inside. */
export function HeadIllustration({ className }: { className?: string }) {
  const head =
    "M150 540 L150 440 C105 405 78 352 78 282 C78 160 170 76 284 76 C388 76 452 148 458 240 C460 272 455 292 472 320 L494 356 C499 366 492 374 481 376 L467 378 L470 402 C472 414 464 420 453 422 C464 430 462 443 453 449 L457 472 C460 492 442 503 416 500 L362 493 L362 540 Z";

  const stars: [number, number, number][] = [
    [190, 160, 7], [360, 150, 6], [130, 330, 6], [410, 300, 8], [240, 470, 6],
    [330, 420, 5], [170, 230, 4], [300, 120, 4], [420, 220, 4], [120, 400, 5],
  ];
  const dots: [number, number, number][] = [
    [215, 120, 3], [395, 175, 3], [150, 280, 2.5], [440, 260, 2.5], [280, 500, 3],
    [205, 410, 2.5], [375, 465, 3], [345, 250, 2], [110, 360, 2.5], [260, 210, 2],
  ];

  return (
    <svg
      viewBox="0 0 560 560"
      role="img"
      aria-labelledby="head-illustration-title"
      className={className}
    >
      <title id="head-illustration-title">
        Illustration of a calm mind: a head silhouette filled with stars, planets and a blooming lotus
      </title>
      <defs>
        <clipPath id="head-clip">
          <path d={head} />
        </clipPath>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f6c858" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f6c858" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Cream leaves behind the head */}
      <g fill="#f2e6d3">
        <path d="M455 120 C470 70 520 60 540 40 C530 90 500 125 455 140 Z" />
        <path d="M470 175 C510 160 545 170 560 160 C540 200 505 210 470 200 Z" />
        <path d="M60 470 C20 455 5 420 -5 405 C40 410 70 430 85 460 Z" />
        <path d="M70 520 C30 525 10 550 0 560 C45 560 75 545 95 525 Z" />
        <path d="M440 70 C445 35 470 15 480 0 C490 35 470 65 450 85 Z" />
      </g>

      <path d={head} fill="#1b2a4e" />

      <g clipPath="url(#head-clip)">
        {/* soft waves */}
        <path
          d="M60 250 C140 210 210 290 300 250 C380 215 430 260 500 240 L500 330 C420 350 380 300 300 335 C210 375 140 300 60 340 Z"
          fill="#2a3d6b"
          opacity="0.9"
        />
        <path
          d="M60 420 C150 380 210 450 300 420 C390 390 440 430 500 410 L500 560 L60 560 Z"
          fill="#2a3d6b"
          opacity="0.75"
        />
        <path
          d="M80 150 C150 120 200 170 270 140 C320 120 370 140 420 120"
          fill="none"
          stroke="#5b54c9"
          strokeWidth="3"
          opacity="0.6"
        />

        {/* planets */}
        <circle cx="395" cy="215" r="38" fill="#ee7d55" />
        <path d="M362 205 C380 198 405 222 430 210" stroke="#c75a35" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M360 228 C385 220 405 238 428 230" stroke="#f6b38f" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="155" cy="355" r="26" fill="#5b54c9" />
        <circle cx="365" cy="440" r="24" fill="#f6b38f" />
        <circle cx="358" cy="434" r="7" fill="#ee7d55" opacity="0.6" />
        <circle cx="215" cy="185" r="13" fill="#b3a8f5" />

        {/* orbit ring */}
        <ellipse cx="290" cy="315" rx="120" ry="20" fill="none" stroke="#7c74e0" strokeWidth="3" />

        {/* glow + lotus */}
        <circle cx="290" cy="285" r="120" fill="url(#glow)" />
        <g transform="translate(290 300)">
          <path d="M0 -95 C28 -60 28 -20 0 10 C-28 -20 -28 -60 0 -95Z" fill="#f6b38f" />
          <path d="M0 10 C-10 -40 -50 -75 -88 -70 C-80 -30 -45 0 0 10Z" fill="#ee7d55" />
          <path d="M0 10 C10 -40 50 -75 88 -70 C80 -30 45 0 0 10Z" fill="#ee7d55" />
          <path d="M0 12 C-40 -10 -95 -15 -120 5 C-90 25 -40 28 0 12Z" fill="#b3a8f5" />
          <path d="M0 12 C40 -10 95 -15 120 5 C90 25 40 28 0 12Z" fill="#b3a8f5" />
          <circle cx="0" cy="-30" r="9" fill="#f6c858" />
        </g>

        {/* stars & dots */}
        {stars.map(([x, y, s], i) => (
          <path
            key={`s${i}`}
            d={SPARKLE_PATH}
            transform={`translate(${x} ${y}) scale(${s / 50})`}
            fill={i % 3 === 0 ? "#f6c858" : "#f2e6d3"}
          />
        ))}
        {dots.map(([x, y, r], i) => (
          <circle key={`d${i}`} cx={x} cy={y} r={r} fill="#ffffff" opacity="0.85" />
        ))}
      </g>

      {/* stars outside the head */}
      <path d={SPARKLE_PATH} transform="translate(505 470) scale(0.22)" fill="#ee7d55" />
      <path d={SPARKLE_PATH} transform="translate(470 520) scale(0.12)" fill="#ee7d55" />
      <path d={SPARKLE_PATH} transform="translate(40 300) scale(0.14)" fill="#f6c858" />
    </svg>
  );
}

/** Two overlapping circles (calm / busy mind) used beside the hero heading. */
export function MindPair({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 120" aria-hidden="true" className={className}>
      <circle cx="92" cy="60" r="52" fill="#141414" />
      <circle cx="58" cy="60" r="52" fill="#f7f7fa" stroke="#e3e5ea" />
      {/* calm swirl */}
      <path
        d="M40 58 C40 45 62 42 66 54 C70 66 52 72 48 62 C45 54 58 52 58 58"
        stroke="#b3a8f5"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* busy scribble */}
      <path
        d="M104 44 L114 54 L102 60 L116 68 L104 76"
        stroke="#f6c858"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
