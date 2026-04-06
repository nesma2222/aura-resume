import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  //vercel ai sdk fnctn,openrouter provider,model called
  try {
    const { text } = await generateText({   
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      prompt,
    });

    res.status(200).json({ text });           //sends data from model to frontend in json format

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
}

