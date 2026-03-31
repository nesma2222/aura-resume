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

// import { useState } from "react";

// export default function SummaryForm({ formData, setFormData }) {
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       summary: e.target.value,
//     });
//   };

//   // AI FUNCTION
//   async function generateSummary() {
//     try {
//       setLoading(true);

//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           prompt: `Generate a professional resume summary for:
//           Name: ${formData.firstName} ${formData.lastName}
//           Role: ${formData.desiredJobTitle}
//           Skills: ${formData.skills?.join(", ")}`,
//         }),
//       });

//       const data = await res.json();

//       console.log("AI RESPONSE:", data);

//       // HANDLE BACKEND ERROR
//       if (!res.ok) {
//         console.error("Backend error:", data.error);
//         alert("AI Error: " + data.error);
//         return;
//       }

//       // HANDLE EMPTY RESPONSE
//       if (!data.text) {
//         alert("No response from AI");
//         return;
//       }

//       // SAFE STATE UPDATE
//       setFormData((prev) => ({
//         ...prev,
//         summary: data.text,
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

//       {/*  BUTTON */}
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

Name: ${formData.firstName || ""}
${formData.lastName || ""}

Target Role: ${formData.desiredJobTitle || "Not specified"}

Skills: ${formData.skills?.length ? formData.skills.join(", ") : "Not specified"}

Make it personalized, impactful, and different each time.`,
        }),
      });

      const data = await res.json();

      console.log("AI RESPONSE:", data);

      // HANDLE BACKEND ERROR
      if (!res.ok) {
        console.error("Backend error:", data.error);
        alert("AI Error: " + data.error);
        return;
      }

      // HANDLE EMPTY RESPONSE
      if (!data.text) {
        alert("No response from AI");
        return;
      }

      // SAFE STATE UPDATE
      setFormData((prev) => ({
        ...prev,
        summary: data.text,
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

      {/*  BUTTON */}
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