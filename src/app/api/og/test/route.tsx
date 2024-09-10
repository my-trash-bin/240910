import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { readFileSync } from "fs";

const fontData = readFileSync("assets/Inter-Bold.ttf");

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 900,
            fontSize: 96,
          }}
        >
          Hello world!
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
