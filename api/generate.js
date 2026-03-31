import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      prompt,
    });

    res.status(200).json({ text });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
}