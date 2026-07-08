import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/og-logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  const logo = getLogoDataUri("#ff4d00");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080808",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={128} height={47} alt="" />
      </div>
    ),
    size,
  );
}
