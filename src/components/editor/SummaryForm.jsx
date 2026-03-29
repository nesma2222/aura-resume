// export default function SummaryForm({ formData, setFormData }) {

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       summary: e.target.value,
//     });
//   };

//   return (
//     <textarea
//       value={formData.summary}
//       onChange={handleChange}
//       className="w-full border rounded p-3"
//       placeholder="Write your summary..."
//     />
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

  // AI FUNCTION
  // async function generateSummary() {
  //   try {
  //     setLoading(true);

  //     const res = await fetch("/api/generate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         prompt: `Generate a professional resume summary for:
  //         Name: ${formData.firstName} ${formData.lastName}
  //         Role: ${formData.desiredJobTitle}
  //         Skills: ${formData.skills?.join(", ")}`,
  //       }),
  //     });

  //     const data = await res.json();

  //     console.log("AI RESPONSE:", data);

  //     // HANDLE BACKEND ERROR
  //     if (!res.ok) {
  //       console.error("Backend error:", data.error);
  //       alert("AI Error: " + data.error);
  //       return;
  //     }

  //     // HANDLE EMPTY RESPONSE
  //     if (!data.text) {
  //       alert("No response from AI");
  //       return;
  //     }

  //     // SAFE STATE UPDATE
  //     setFormData((prev) => ({
  //       ...prev,
  //       summary: data.text,
  //     }));

  //   } catch (error) {
  //     console.error("AI Error:", error);
  //     alert("Something went wrong. Check console.");
  //   } finally {
  //     setLoading(false);
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

  return (
    <div>
      <textarea
        value={formData.summary}
        onChange={handleChange}
        className="w-full border rounded p-3"
        placeholder="Write your summary..."
      />

      {/* ✨ BUTTON */}
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