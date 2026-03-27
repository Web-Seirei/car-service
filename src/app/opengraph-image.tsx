import { ImageResponse } from "next/og";

export const alt = "Автосервис BIP-MOBILE — ремонт авто в Витебске";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#1c1c1c",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "#e84b3d",
        }}
      />

      {/* Brand name */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#e84b3d",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        BIP-MOBILE
      </div>

      {/* Main title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 56,
          fontWeight: 700,
          color: "#f3efe8",
          lineHeight: 1.2,
          marginBottom: "24px",
        }}
      >
        <span>Ремонт авто всех марок</span>
        <span>в Витебске</span>
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 24,
          color: "#958470",
          lineHeight: 1.4,
          marginBottom: "40px",
        }}
      >
        Подвеска · Двигатель · Тормоза · ГРМ · Трансмиссия · Шиномонтаж
      </div>

      {/* Bottom row: trust signals */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: 20,
          color: "#d9d1c4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3d8b37",
              flexShrink: 0,
            }}
          />
          <span>С 2015 года</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3d8b37",
              flexShrink: 0,
            }}
          />
          <span>Гарантия на работы</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3d8b37",
              flexShrink: 0,
            }}
          />
          <span>+375 29 599-01-69</span>
        </div>
      </div>
    </div>
  );
}
