import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #122847 0%, #1B3A6B 55%, #D35400 160%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", opacity: 0.8 }}>
          Kostolac
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16, lineHeight: 1.05 }}>
          Auto škola Sale
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.9, maxWidth: 800 }}>
          Obuka vozača B kategorije · Kondicioni časovi
        </div>
      </div>
    ),
    { ...size },
  );
}
