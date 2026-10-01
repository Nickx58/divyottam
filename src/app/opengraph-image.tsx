import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const sparkle =
  "M0 -50 C6 -14 14 -6 50 0 C14 6 6 14 0 50 C-6 14 -14 6 -50 0 C-14 -6 -6 -14 0 -50Z";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#1b2a4e",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="-50 -50 100 100">
            <path d={sparkle} fill="#f6c858" />
          </svg>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 700, maxWidth: 950 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#b3a8f5" }}>{site.disciplines}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#f6b38f" }}>
          Online consultation available
        </div>
      </div>
    ),
    size,
  );
}
