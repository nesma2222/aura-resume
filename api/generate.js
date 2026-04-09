import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, jobTitle, employer, skills } = req.body;

  // ─── Route: /api/generate-experience (Experience description bullets) ───────
  if (jobTitle) {
    const experiencePrompt = `Write professional resume bullet points for this job role.

Job Title: ${jobTitle}
Employer: ${employer || "Not specified"}
Skills/Technologies: ${skills?.length ? skills.join(", ") : "Not specified"}

Rules:
- Write exactly 5-6 bullet points so the user has plenty of choices
- Each bullet MUST start with a strong past-tense action verb (Led, Built, Improved, Developed, Designed, Optimized, etc.)
- Do NOT use "I"
- Keep each bullet concise — one clear achievement per line
- Do NOT include any intro line, heading, label, or explanation
- Do NOT use quotes
- Include measurable impact with numbers where possible (e.g. reduced load time by 30%)
- Output ONLY the bullet points, one per line, each starting with •`;

    try {
      const { text } = await generateText({
        model: openrouter("meta-llama/llama-3.1-8b-instruct"),
        prompt: experiencePrompt,
      });
      return res.status(200).json({ text });
    } catch (error) {
      console.error("AI Error:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  // ─── Route: /api/generate (Summary) ─────────────────────────────────────────
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const { text } = await generateText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      prompt,
    });
    return res.status(200).json({ text });
  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: error.message });
  }
}