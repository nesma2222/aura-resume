// import { useState } from "react";

// export default function SummaryForm({ formData, setFormData }) {
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       summary: e.target.value,
//     });
//   };

//   async function generateSummary() {
//     if (!formData.firstName && !formData.lastName) {
//       alert("Please enter your name first.");
//       return;
//     }

//     setLoading(true);
//   //calling backend
//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
// //           prompt: `Write a professional and unique resume summary in 3-4 lines.

// // Name: ${formData.firstName || ""} ${formData.lastName || ""}
// // Target Role: ${formData.desiredJobTitle || "Not specified"}
// // Skills: ${formData.skills?.length ? formData.skills.join(", ") : "Not specified"}

// // Make it personalized and impactful.`,
// prompt: `Write a professional resume summary in 3-4 lines.

// Name: ${formData.firstName || ""} ${formData.lastName || ""}
// Target Role: ${formData.desiredJobTitle || "Not specified"}
// Skills: ${formData.skills?.length ? formData.skills.join(", ") : "Not specified"}

// Rules:
// - Output ONLY the summary paragraph
// - Do NOT include any intro line like "Here is a summary for..."
// - Do NOT include any label or heading
// - Do NOT use quotes around the summary
// - Start directly with the summary text`,
//         }),
//       });

//       if (!res.ok) {
//         const text = await res.text();
//         throw new Error(`Server responded with ${res.status}: ${text}`);
//       }

//       const data = await res.json();

//       if (data.error) {
//         alert("AI Error: " + data.error);
//         return;
//       }
//      //updating ui with the ai data
//       setFormData((prev) => ({
//         ...prev,
//         summary: data.text || "No response from AI",
//       }));

//     } catch (error) {
//       console.error("AI Error:", error);
//       alert("Something went wrong. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <textarea
//         value={formData.summary}
//         onChange={handleChange}
//         className="w-full border rounded p-3"
//         placeholder="Write your summary..."
//       />

//       <button
//         onClick={generateSummary}
//         disabled={loading}
//         className="mt-3 bg-peach-500 text-white px-4 py-2 rounded-lg hover:bg-peach-600"
//       >
//         {loading ? "Generating..." : "✨ Generate with AI"}
//       </button>
//     </div>
//   );
// }


import { useState } from "react";

export default function SummaryForm({ formData, setFormData }) {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      summary: e.target.value,
    });
  };

  async function generateSummary() {
    if (!formData.firstName && !formData.lastName) {
      alert("Please enter your name first.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Write a professional resume summary in 3-4 lines.

Name: ${formData.firstName || ""} ${formData.lastName || ""}
Target Role: ${formData.desiredJobTitle || "Not specified"}
Skills: ${formData.skills?.length ? formData.skills.join(", ") : "Not specified"}

Rules:
- Output ONLY the summary paragraph
- Do NOT include any intro line like "Here is a summary for..."
- Do NOT include any label or heading
- Do NOT use quotes around the summary
- Start directly with the summary text`,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server responded with ${res.status}: ${text}`);
      }

      const data = await res.json();

      if (data.error) {
        alert("AI Error: " + data.error);
        return;
      }

      setFormData((prev) => ({
        ...prev,
        summary: data.text || "No response from AI",
      }));

    } catch (error) {
      console.error("AI Error:", error);
      alert("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <textarea
        value={formData.summary}
        onChange={handleChange}
        className="w-full border rounded p-3"
        placeholder="Write your summary..."
      />

      <button
        onClick={generateSummary}
        disabled={loading}
        className="mt-3 bg-peach-500 text-white px-4 py-2 rounded-lg hover:bg-peach-600"
      >
        {loading ? "Generating..." : "✨ Generate with AI"}
      </button>
    </div>
  );
}