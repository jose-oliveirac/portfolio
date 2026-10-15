import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createRandom, round } from "@/lib/random";
import pt from "@/messages/pt.json";
import en from "@/messages/en.json";

// The preview card shown when the link is shared (LinkedIn, WhatsApp, X...)
export const alt = "José Henrique — Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dictionaries = { pt, en };

// Same font as the site (Geist), read once when the module loads
const geistRegular = readFile(join(process.cwd(), "assets/fonts/Geist-Regular.ttf"));
const geistBold = readFile(join(process.cwd(), "assets/fonts/Geist-Bold.ttf"));

const random = createRandom(1921);
const stars = Array.from({ length: 70 }, () => ({
  x: round(random() * 1200),
  y: round(random() * 630),
  size: round(1 + random() ** 3 * 3),
  opacity: round(0.25 + random() * 0.6),
}));

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = dictionaries[locale === "en" ? "en" : "pt"];

  const photo = await readFile(join(process.cwd(), "public/foto-jose-henrique.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          gap: 70,
          background: "linear-gradient(135deg, #102463 0%, #040c27 60%)",
          color: "#eef3ff",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        {stars.map((star, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              borderRadius: 9999,
              background: "white",
              opacity: star.opacity,
            }}
          />
        ))}

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#8db0ff", textTransform: "uppercase" }}>
            {dict.hero.role.replace(".", "")}
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1, marginTop: 22 }}>
            José Henrique
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "#a3b4d6", marginTop: 30, maxWidth: 640 }}>
            {dict.hero.tagline}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only supports <img> */}
        <img
          src={photoSrc}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 40, border: "3px solid #172c62", objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: await geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: await geistBold, weight: 700, style: "normal" },
      ],
    },
  );
}
