import OpenAI from "openai";

export default async function handler(req, res) {
  // ✅ Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ✅ Check API key
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY is missing in environment variables",
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { prompt } = req.body;

    // ✅ Validate input
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        error: "Prompt is empty",
      });
    }

    // ✅ Call OpenAI (UPDATED METHOD)
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    // ✅ Extract text safely
    const text =
      response.output?.[0]?.content?.[0]?.text ||
      "No response from AI";

    return res.status(200).json({ text });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error);

    return res.status(500).json({
      error:
        error?.message ||
        "Unknown server error",
    });
  }
}