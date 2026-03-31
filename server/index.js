import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateText } from "ai";                           // ✅ Vercel AI SDK
import { createOpenRouter } from "@openrouter/ai-sdk-provider"; // ✅ OpenRouter provider

dotenv.config();

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const { text } = await generateText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"), // ✅ free model
      prompt,
    });

    res.json({ text });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("✅ Backend running on http://localhost:3001");
});