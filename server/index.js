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

app.post("/api/generate", (req, res) => {
  const { prompt, jobTitle, employer, skills } = req.body;

  if (jobTitle) {
    const experiencePrompt = `Write professional resume bullet points for this job role.

Job Title: ${jobTitle}
Employer: ${employer || "Not specified"}
Skills/Technologies: ${skills?.length ? skills.join(", ") : "Not specified"}

Rules:
- Write exactly 5-6 bullet points
- Each bullet MUST start with a strong past-tense action verb
- Do NOT use "I"
- Keep each bullet concise
- No intro line, heading, or explanation
- No quotes
- Include numbers where possible (e.g. reduced load time by 30%)
- Output ONLY bullet points, one per line, each starting with •`;

    generateText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      prompt: experiencePrompt,
    })
      .then(({ text }) => res.json({ text }))
      .catch((error) => {
        console.error("AI Error:", error);
        res.status(500).json({ error: error.message });
      });

    return;
  }

  if (!prompt) {
    return res.status(400).json({ error: "Prompt or jobTitle is required" });
  }

  generateText({
    model: openrouter("meta-llama/llama-3.1-8b-instruct"),
    prompt,
  })
    .then(({ text }) => res.json({ text }))
    .catch((error) => {
      console.error("AI Error:", error);
      res.status(500).json({ error: error.message });
    });
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});