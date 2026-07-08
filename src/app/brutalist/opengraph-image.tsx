import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/og-logo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const INK = "#141311";
const ACCENT = "#ff4d00";

export default function Image() {
  const logo = getLogoDataUri(INK);

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
          backgroundColor: "#f2efe6",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "56px 72px",
            backgroundColor: "#f2efe6",
            border: `4px solid ${INK}`,
            boxShadow: `14px 14px 0 0 ${INK}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={520} height={192} alt="" />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 30,
            }}
          >
            <div style={{ width: 14, height: 14, backgroundColor: ACCENT, display: "flex" }} />
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: INK,
              }}
            >
              Print Edition
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 760,
              fontSize: 21,
              color: INK,
              textAlign: "center",
            }}
          >
            Same developer, same facts, more ink.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
