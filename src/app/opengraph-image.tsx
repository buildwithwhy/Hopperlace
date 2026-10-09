import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Hopperlace — Choose AI for what you want to do, and what matters to you.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori can't read the Tailwind theme, so the palette is repeated here.
   Keep these in step with the `@theme` block in globals.css. */
const paper = "#faf8f4";
const heading = "#263d34";
const muted = "#566158";
const primary = "#2e5140";
const sage = "#eff0e8";
const beige = "#efe6d8";

const font = (file: string) =>
  readFile(join(process.cwd(), "src/app/fonts", file));

export default async function OpengraphImage() {
  const [serif, serifSemiBold, mono] = await Promise.all([
    font("SourceSerif4-Regular.ttf"),
    font("SourceSerif4-SemiBold.ttf"),
    font("IBMPlexMono-Medium.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: paper,
        color: heading,
        padding: "72px 80px",
        fontFamily: "Source Serif 4",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", fontWeight: 600, fontSize: 44 }}>
          Hopperlace
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: "0.1em",
            color: muted,
          }}
        >
          HOPPERLACE.AI
        </div>
      </div>

      <div
        style={{
          display: "flex",
          maxWidth: 900,
          fontSize: 80,
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
        }}
      >
        Choose AI for what you want to do &mdash; and what matters to you.
      </div>

      {/* Palette bar: forest green, sage, beige. */}
      <div style={{ display: "flex", height: 12 }}>
        <div
          style={{ display: "flex", width: "40%", backgroundColor: primary }}
        />
        <div style={{ display: "flex", width: "30%", backgroundColor: sage }} />
        <div
          style={{ display: "flex", width: "30%", backgroundColor: beige }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Source Serif 4",
          data: serif,
          weight: 400,
          style: "normal",
        },
        {
          name: "Source Serif 4",
          data: serifSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "IBM Plex Mono",
          data: mono,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
