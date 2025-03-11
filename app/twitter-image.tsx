import { ImageResponse } from "next/og";

// Route segment config
// Remove edge runtime
export const dynamic = "force-static";

// Image metadata
export const alt = "wrapper.sh - An LLM wrapper for your terminal";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 1) 70%)",
            zIndex: 0,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", zIndex: 1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9333ea"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: 40 }}
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" x2="20" y1="19" y2="19"></line>
          </svg>
          <h1 style={{ fontWeight: 600 }}>wrapper.sh</h1>
        </div>
        <p style={{ fontSize: 36, marginTop: 40, zIndex: 1 }}>
          An LLM wrapper for your terminal
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
