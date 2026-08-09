import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Hopperlace — Choose your AI stack on evidence. Get a system you can defend.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          backgroundColor: "#16181a",
          color: "#f6f7f7",
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
            letterSpacing: "-0.015em",
          }}
        >
          <div style={{ display: "flex" }}>
            Choose your AI stack on evidence.
          </div>
          <div style={{ display: "flex", color: "#767d83" }}>
            Get a system you can defend.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              height: 1,
              backgroundColor: "#3a3f44",
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
              color: "#8b9298",
            }}
          >
            <div style={{ display: "flex" }}>
              AI STACK EVALUATION &amp; CURATION &middot; AI ARCHITECTURE
              SUPPORT
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
