import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/og-logo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const GOLD = "#c4a265";

export default function Image() {
  const logo = getLogoDataUri(GOLD);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0b09",
          backgroundImage: "linear-gradient(160deg, #15120e 0%, #0d0b09 60%)",
          fontFamily: "serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={640} height={236} alt="" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 36,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: GOLD, display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#ece6da",
            }}
          >
            Atelier Edition
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 34,
            maxWidth: 820,
            fontSize: 24,
            fontStyle: "italic",
            color: "#9d9588",
            textAlign: "center",
          }}
        >
          From database schema to final pixel — one pair of hands, end to end.
        </div>
      </div>
    ),
    size,
  );
}
