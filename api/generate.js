import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt,
    });

    return Response.json({ text });

  } catch (error) {
    return Response.json({ error: error.message });
  }
}