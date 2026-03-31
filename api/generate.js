import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await streamText({
      model: google("gemini-1.5-flash"),
      prompt,
    });

    return result.toTextStreamResponse();

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}