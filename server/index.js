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
import { generateText } from "ai";                            // Vercel AI SDK
import { createOpenRouter } from "@openrouter/ai-sdk-provider"; // OpenRouter provider

dotenv.config();

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

// ─── EXISTING: Generate Summary ───────────────────────────────────────────────
app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const { text } = await generateText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"), // free model
      prompt,
    });

    res.json({ text });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── NEW: Generate Experience Description ─────────────────────────────────────
app.post("/api/generate-experience", async (req, res) => {
  const { jobTitle, employer, skills } = req.body;

  if (!jobTitle) {
    return res.status(400).json({ error: "Job title is required" });
  }

  const prompt = `Write a professional resume experience description for the following role.

Job Title: ${jobTitle}
Employer: ${employer || "Not specified"}
Skills/Technologies: ${skills?.length ? skills.join(", ") : "Not specified"}

Rules:
- Write 3-4 bullet points only
- Each bullet must start with a strong action verb (Led, Built, Improved, Developed, etc.)
- Do NOT use "I" or full sentences
- Do NOT include any intro line or heading
- Do NOT use quotes
- Keep each bullet to 1-2 lines
- Show impact with numbers where possible
- Output ONLY the bullet points, each on a new line starting with •`;

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