// app/api/generate/route.js
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        { status: 400 }
      );
    }

    // Call Google Gemini model
    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt,
    });

    return new Response(JSON.stringify({ text }), { status: 200 });

  } catch (error) {
    console.error("AI API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}