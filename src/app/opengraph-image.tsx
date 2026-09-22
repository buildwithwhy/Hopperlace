import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Hopperlace — Choose AI for what you want to do, and what matters to you.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori can't read the Tailwind theme, so the palette is repeated here. `ink`
   and `paper` are the theme tokens; the two greys are the warm equivalents of
   `muted` and `rule` at the contrast this dark card needs. Keep them in step
   with the `@theme` block in globals.css. */
const ink = "#1b1a18";
const paper = "#f4f2ed";
const mutedOnInk = "#8e8a82";
const ruleOnInk = "#3a3833";

const font = (file: string) =>
  readFile(join(process.cwd(), "src/app/fonts", file));

export default async function OpengraphImage() {
  const [serif, serifSemiBold, mono] = await Promise.all([
    font("SourceSerif4-Regular.ttf"),
    font("SourceSerif4-SemiBold.ttf"),
    font("IBMPlexMono-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: ink,
          color: paper,
          padding: 72,
          fontFamily: "Source Serif 4",
        }}
      >
        <div
          style={{
            display: "flex",
            fontWeight: 600,
            fontSize: 34,
            letterSpacing: "0.01em",
          }}
        >
          Hopperlace
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 58,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          <div style={{ display: "flex" }}>Choose AI for what you want to do</div>
          <div style={{ display: "flex", color: mutedOnInk }}>
            &mdash; and what matters to you.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              height: 1,
              backgroundColor: ruleOnInk,
              marginBottom: 22,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              fontSize: 17,
              letterSpacing: "0.12em",
              color: mutedOnInk,
            }}
          >
            <div style={{ display: "flex" }}>
              INDEPENDENT TESTING &middot; COMPARISON &middot; INFORMED CHOICE
            </div>
            <div style={{ display: "flex" }}>HOPPERLACE.AI</div>
          </div>
        </div>
      </div>
    ),
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
