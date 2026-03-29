// import OpenAI from "openai";

// export default async function handler(req, res) {
//   //  Allow only POST
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     //  API key check
//     if (!process.env.OPENAI_API_KEY) {
//       return res.status(200).json({
//         text: "Enthusiastic and detail-oriented student with strong skills, seeking opportunities to grow and contribute effectively.",
//       });
//     }

//     const { prompt } = req.body;

//     // Input validation
//     if (!prompt || prompt.trim() === "") {
//       return res.status(200).json({
//         text: "Motivated individual with a passion for learning and building impactful solutions.",
//       });
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     //  AI CALL
//     const response = await openai.responses.create({
//       model: "gpt-4o-mini",
//       input: prompt,
//     });

//     //  Extract safely
//     let text = "Creative and driven individual with strong problem-solving skills.";

//     if (response.output && response.output.length > 0) {
//       const content = response.output[0].content;
//       if (content && content.length > 0 && content[0].text) {
//         text = content[0].text;
//       }
//     }

//     return res.status(200).json({ text });

//   } catch (error) {
//     console.error("🔥 FULL ERROR:", error);

//     //  ALWAYS RETURN 200 (VERY IMPORTANT)
//     return res.status(200).json({
//       text: "Enthusiastic MCA student with strong skills in React, JavaScript, and problem-solving, eager to contribute to innovative projects.",
//     });
//   }
// }




// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(200).json({
//         text: "Please provide input data",
//       });
//     }

//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/google/flan-t5-base",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.HF_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           inputs: prompt,
//         }),
//       }
//     );

//     const data = await response.json();

//     const text =
//       data?.[0]?.generated_text ||
//       "Motivated individual with strong technical skills.";

//     return res.status(200).json({ text });

//   } catch (error) {
//     console.error("HF ERROR:", error);

//     return res.status(200).json({
//       text: "Enthusiastic MCA student with strong skills in web development.",
//     });
//   }
// }

async function generateSummary() {
  try {
    setLoading(true);

    // 🔥 Better prompt (VERY IMPORTANT)
    const prompt = `
Write a professional resume summary in 3-4 lines.

Name: ${formData.firstName || ""}
Role: ${formData.desiredJobTitle || ""}
Skills: ${formData.skills?.join(", ") || ""}

Make it concise, impactful, and professional.
`;

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    console.log("AI RESPONSE:", data);

    // ❌ No need for res.ok (backend always sends 200 now)

    // ⚠️ Handle empty response
    if (!data || !data.text) {
      alert("No response from AI");
      return;
    }

    // ⚠️ Handle model loading case
    if (data.text.includes("waking up")) {
      alert("AI is loading... click again in a few seconds ⏳");
      return;
    }

    // ✅ Update UI
    setFormData((prev) => ({
      ...prev,
      summary: data.text.trim(),
    }));

  } catch (error) {
    console.error("AI Error:", error);
    alert("Something went wrong. Check console.");
  } finally {
    setLoading(false);
  }
}

