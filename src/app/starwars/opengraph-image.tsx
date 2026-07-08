import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/og-logo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const HOLO = "#6fd6ff";

export default function Image() {
  const logo = getLogoDataUri(HOLO);

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
          backgroundColor: "#05060c",
          backgroundImage: "linear-gradient(160deg, #0a0c18 0%, #05060c 60%)",
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
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: HOLO, display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#e9ecf5",
            }}
          >
            Holonet Edition
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 34,
            maxWidth: 820,
            fontSize: 22,
            color: "#8d94a8",
            textAlign: "center",
          }}
        >
          A full-stack developer from a galaxy far, far away.
        </div>
      </div>
    ),
    size,
  );
}
