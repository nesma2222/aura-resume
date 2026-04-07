// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { generateText } from "ai";                           //  Vercel AI SDK
// import { createOpenRouter } from "@openrouter/ai-sdk-provider"; //  OpenRouter provider

// dotenv.config();

// const openrouter = createOpenRouter({
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/api/generate", async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ error: "Prompt is required" });
//   }

//   try {
//     const { text } = await generateText({
//       model: openrouter("meta-llama/llama-3.1-8b-instruct"), //  free model
//       prompt,
//     });

//     res.json({ text });

//   } catch (error) {
//     console.error("AI Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3001, () => {
//   console.log(" Backend running on http://localhost:3001");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

dotenv.config();

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

// ─── EXISTING: Generate Summary (SummaryForm.jsx) ─────────────────────────────
app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const { text } = await generateText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      prompt,
    });
    res.json({ text });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── NEW: Generate Experience Bullets (ExperienceForm.jsx) ────────────────────
app.post("/api/generate-experience", async (req, res) => {
  const { jobTitle, employer, skills } = req.body;
  if (!jobTitle) return res.status(400).json({ error: "Job title is required" });

  const prompt = `Write professional resume bullet points for this job role.

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
- Include measurable impact with numbers where possible (e.g. reduced load time by 30%, increased sales by 20%)
- Output ONLY the bullet points, one per line, each starting with •`;

  try {
    const { text } = await generateText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      prompt,
    });
    res.json({ text });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});