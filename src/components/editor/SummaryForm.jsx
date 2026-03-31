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
  async function generateSummary() {
    try {
      setLoading(true);

      const res = await fetch("/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: `Write a professional and unique resume summary in 3-4 lines.

Name: ${formData.firstName || ""} ${formData.lastName || ""}
Target Role: ${formData.desiredJobTitle || "Not specified"}
Skills: ${
      formData.skills?.length
        ? formData.skills.join(", ")
        : "Not specified"
    }

Make it personalized and impactful.`,
  }),
});

const reader = res.body.getReader();
const decoder = new TextDecoder("utf-8");

let result = "";

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  result += decoder.decode(value);
}

setFormData((prev) => ({
  ...prev,
  summary: result,
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