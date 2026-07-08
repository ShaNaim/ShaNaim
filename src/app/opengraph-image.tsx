import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/og-logo";
import { personal } from "@/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const ACCENT = "#ff4d00";

export default function Image() {
  const logo = getLogoDataUri(ACCENT);

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
          backgroundColor: "#080808",
          backgroundImage: "linear-gradient(160deg, #0d0d0d 0%, #080808 60%)",
          fontFamily: "monospace",
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
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: ACCENT, display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#e8e8e8",
            }}
          >
            Personal Edition
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 34,
            maxWidth: 820,
            fontSize: 22,
            color: "#666666",
            textAlign: "center",
          }}
        >
          &ldquo;{personal.quote}&rdquo;
        </div>
      </div>
    ),
    size,
  );
}
