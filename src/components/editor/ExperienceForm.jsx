// export default function ExperienceForm({ formData, setFormData }) {

//   const experiences = formData.experience || [];

//   const handleChange = (index, field, value) => {
//     const updatedExperiences = [...experiences];
//     updatedExperiences[index][field] = value;
//     setFormData({ ...formData, experience: updatedExperiences });
//   };

//   const handleAddExperience = () => {
//     setFormData({
//       ...formData,
//       experience: [
//         ...experiences,
//         {
//           jobTitle: "",
//           employer: "",
//           location: "",
//           startDate: "",
//           endDate: "",
//           description: ""
//         }
//       ]
//     });
//   };

//   const handleRemoveExperience = (index) => {
//     const updatedExperiences = experiences.filter((_, i) => i !== index);
//     setFormData({ ...formData, experience: updatedExperiences });
//   };

//   return (
//     <div className="space-y-6">

//       <p className="text-sm text-gray-500">
//         Add your professional experience starting from most recent.
//       </p>

//       {experiences.map((exp, index) => (
//         <div
//           key={index}
//           className="border border-gray-200 rounded-xl p-5 space-y-4"
//         >

//           {/* Job Title */}
//           <div>
//             <label className="block text-sm font-semibold text-slate-600 mb-1">
//               Job Title
//             </label>
//             <input
//               type="text"
//               placeholder="Software Developer"
//               value={exp.jobTitle}
//               onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
//               className="inputStyle"
//             />
//           </div>

//           {/* Employer */}
//           <div>
//             <label className="block text-sm font-semibold text-slate-600 mb-1">
//               Employer
//             </label>
//             <input
//               type="text"
//               placeholder="Company name"
//               value={exp.employer}
//               onChange={(e) => handleChange(index, "employer", e.target.value)}
//               className="inputStyle"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-semibold text-slate-600 mb-1">
//               Location
//             </label>
//             <input
//               type="text"
//               placeholder="City, Country"
//               value={exp.location}
//               onChange={(e) => handleChange(index, "location", e.target.value)}
//               className="inputStyle"
//             />
//           </div>

//           {/* Dates */}
//           <div className="grid grid-cols-2 gap-4">

//             <div>
//               <label className="block text-sm font-semibold text-slate-600 mb-1">
//                 Start Date
//               </label>
//               <input
//                 type="month"
//                 value={exp.startDate}
//                 onChange={(e) => handleChange(index, "startDate", e.target.value)}
//                 className="inputStyle"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-600 mb-1">
//                 End Date
//               </label>
//               <input
//                 type="month"
//                 value={exp.endDate}
//                 onChange={(e) => handleChange(index, "endDate", e.target.value)}
//                 className="inputStyle"
//               />
//             </div>

//              {/* Currently Working Checkbox */}
//               <div className="flex items-center gap-2 mt-2">
//                 <input
//                   type="checkbox"
//                   checked={exp.currentlyWorking || false}
//                   onChange={(e) =>
//                     handleChange(
//                       index,
//                       "currentlyWorking",
//                       e.target.checked
//                     )
//                   }
//                 />
//                 <span className="text-sm text-slate-600">
//                   Currently Working Here
//                 </span>
//               </div>
            

//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-slate-600 mb-1">
//               Description
//             </label>
//             <textarea
//               rows="4"
//               placeholder="Describe your responsibilities and achievements..."
//               value={exp.description}
//               onChange={(e) => handleChange(index, "description", e.target.value)}
//               className="inputStyle resize-none"
//             />
//           </div>

//           {/* Remove Button */}
//           {experiences.length > 1 && (
//             <button
//               type="button"
//               onClick={() => handleRemoveExperience(index)}
//               className="text-red-500 text-sm hover:underline"
//             >
//               Remove Experience
//             </button>
//           )}

//         </div>
//       ))}

//       {/* Add Experience Button */}
//       <button
//         type="button"
//         onClick={handleAddExperience}
//         className="bg-peach-500 text-white px-5 py-2 rounded-lg hover:bg-peach-600 transition"
//       >
//         + Add Experience
//       </button>

//     </div>
//   );
// }

import { useState } from "react";

// ── Tips data ──────────────────────────────────────────────────────────────────
const tips = [
  { type: "good", title: 'Skip "responsible for"',           desc: 'Use action verbs like "led", "improved", or "created".' },
  { type: "good", title: "Use bullet points",                 desc: "Make your achievements stand out with concise bullet points." },
  { type: "good", title: "Keep descriptions short",           desc: "Aim for 1–2 lines per bullet so it's easy to read fast." },
  { type: "good", title: "Show your impact",                  desc: "Highlight your accomplishments, not generic duties." },
  { type: "good", title: "Add numbers when possible",         desc: "Stats speak louder than words and prove impact." },
  { type: "bad",  title: "Don't abbreviate job titles",       desc: "Write the full job title so it's easy to understand." },
  { type: "bad",  title: 'Don\'t use "I" or full sentences',  desc: "Keep bullet points short, starting with action verbs." },
  { type: "bad",  title: "Don't exaggerate or lie",           desc: "False claims can backfire during interviews." },
];

export default function ExperienceForm({ formData, setFormData }) {
  const [showTips,    setShowTips]    = useState(false);
  const [loadingIdx,  setLoadingIdx]  = useState(null);
  const [panelIdx,    setPanelIdx]    = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [addedSet,    setAddedSet]    = useState({});
  const [tooltip,     setTooltip]     = useState(null);

  const experiences = formData.experience || [];

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setFormData({ ...formData, experience: updated });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...experiences,
        { jobTitle: "", employer: "", location: "", startDate: "", endDate: "", description: "" },
      ],
    });
  };

  const handleRemoveExperience = (index) => {
    setFormData({ ...formData, experience: experiences.filter((_, i) => i !== index) });
    if (panelIdx === index) closePanel();
  };

  const closePanel = () => {
    setPanelIdx(null);
    setSuggestions([]);
    setAddedSet({});
  };

  const parseBullets = (text) =>
    text
      .split("\n")
      .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
      .filter((l) => l.length > 0);

  // ── Fetch AI suggestions — calls /api/generate with jobTitle in body ─────────
  const generateSuggestions = async (index) => {
    const exp = experiences[index];

    if (!exp.jobTitle) {
      setTooltip(index);
      setTimeout(() => setTooltip(null), 2500);
      return;
    }

    setLoadingIdx(index);
    setSuggestions([]);
    setAddedSet({});
    setPanelIdx(index);

    try {
      const res = await fetch("/api/generate", {          // ← same endpoint as SummaryForm
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: exp.jobTitle,                         // ← generate.js detects jobTitle → runs experience prompt
          employer: exp.employer,
          skills:   formData.skills || [],
        }),
      });

      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data.error) { alert("AI Error: " + data.error); closePanel(); return; }

      setSuggestions(parseBullets(data.text || ""));
    } catch (err) {
      console.error("AI Error:", err);
      alert("Something went wrong. Check the console.");
      closePanel();
    } finally {
      setLoadingIdx(null);
    }
  };

  const addBulletToDescription = (index, bullet) => {
    const exp     = experiences[index];
    const current = exp.description?.trim() || "";
    const newLine = `• ${bullet}`;
    const updated = [...experiences];
    updated[index].description = current ? `${current}\n${newLine}` : newLine;
    setFormData({ ...formData, experience: updated });
    setAddedSet((prev) => ({ ...prev, [bullet]: true }));
  };

  return (
    <div className="space-y-6">

      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          Add your professional experience starting from most recent.
        </p>
        <button
          type="button"
          onClick={() => setShowTips((p) => !p)}
          className="flex items-center gap-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-300 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition whitespace-nowrap"
        >
          💡 Experience tips
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${showTips ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* Tips panel */}
      {showTips && (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Experience tips</span>
            <button type="button" onClick={() => setShowTips(false)}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
          </div>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  tip.type === "good" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                }`}>
                  {tip.type === "good" ? "✓" : "✕"}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-700">{tip.title}</p>
                  <p className="text-xs text-gray-500">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience cards */}
      {experiences.map((exp, index) => (
        <div key={index} className="border border-gray-200 rounded-xl p-5 space-y-4">

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Job Title</label>
            <input type="text" placeholder="Software Developer" value={exp.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
              className="inputStyle" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Employer</label>
            <input type="text" placeholder="Company name" value={exp.employer}
              onChange={(e) => handleChange(index, "employer", e.target.value)}
              className="inputStyle" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Location</label>
            <input type="text" placeholder="City, Country" value={exp.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
              className="inputStyle" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">Start Date</label>
              <input type="month" value={exp.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                className="inputStyle" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">End Date</label>
              <input type="month" value={exp.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="inputStyle" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" checked={exp.currentlyWorking || false}
                onChange={(e) => handleChange(index, "currentlyWorking", e.target.checked)} />
              <span className="text-sm text-slate-600">Currently Working Here</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Description</label>

            {/* Toolbar with Generate button */}
            <div className="flex items-center justify-between border border-gray-200 border-b-0 rounded-t-lg px-3 py-2 bg-gray-50">
              <div className="flex items-center gap-1 text-gray-500 text-sm select-none">
                <span className="font-bold px-0.5">B</span>
                <span className="italic px-0.5">I</span>
                <span className="underline px-0.5">U</span>
                <span className="line-through px-0.5 text-xs">S</span>
                <span className="mx-1 text-gray-300">|</span>
                <span className="px-0.5">🔗</span>
                <span className="mx-1 text-gray-300">|</span>
                <span className="px-0.5">≡</span>
                <span className="px-0.5">•≡</span>
                <span className="mx-1 text-gray-300">|</span>
                <span className="px-0.5">↩</span>
                <span className="px-0.5">↪</span>
              </div>

              {/* Generate button + tooltip */}
              <div className="relative">
                {tooltip === index && (
                  <div className="absolute bottom-full right-0 mb-2 w-56 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 z-20 shadow-lg">
                    Enter your job title in order to use the feature
                    <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800" />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => generateSuggestions(index)}
                  disabled={loadingIdx === index}
                  className="flex items-center gap-1.5 bg-peach-500 hover:bg-peach-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
                >
                  {loadingIdx === index ? (
                    <>
                      <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Generating...
                    </>
                  ) : <>✨ Generate with AI</>}
                </button>
              </div>
            </div>

            {/* Textarea */}
            <textarea
              rows="4"
              placeholder="Describe your responsibilities and achievements..."
              value={exp.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="inputStyle resize-none rounded-t-none"
            />

            {/* Ideas Suggestion Panel */}
            {panelIdx === index && (
              <div className="mt-3 border border-gray-200 rounded-xl bg-white shadow-md">
                <div className="flex items-start justify-between px-4 pt-4 pb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Ideas Suggestion</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Click the left-facing arrow icon to add bullet points to the description
                    </p>
                  </div>
                  <button type="button" onClick={closePanel}
                    className="text-gray-400 hover:text-gray-600 text-xl leading-none mt-0.5">×</button>
                </div>
                <div className="px-3 pb-4 space-y-2">
                  {suggestions.length === 0 && (
                    <p className="text-sm text-gray-400 px-1 py-2">Generating ideas...</p>
                  )}
                  {suggestions.map((bullet, bi) => {
                    const isAdded = !!addedSet[bullet];
                    return (
                      <div key={bi} className={`flex items-start gap-3 rounded-lg px-3 py-2.5 border transition ${
                        isAdded ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-100 hover:border-gray-300"
                      }`}>
                        <button
                          type="button"
                          onClick={() => !isAdded && addBulletToDescription(index, bullet)}
                          disabled={isAdded}
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition ${
                            isAdded
                              ? "bg-blue-500 border-blue-500 text-white cursor-default"
                              : "bg-white border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-500"
                          }`}
                        >
                          {isAdded ? (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <polyline points="15 18 9 12 15 6" />
                            </svg>
                          )}
                        </button>
                        <p className={`text-sm leading-snug ${isAdded ? "text-blue-700" : "text-slate-700"}`}>
                          {bullet}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {experiences.length > 1 && (
            <button type="button" onClick={() => handleRemoveExperience(index)}
              className="text-red-500 text-sm hover:underline">
              Remove Experience
            </button>
          )}

        </div>
      ))}

      <button type="button" onClick={handleAddExperience}
        className="bg-peach-500 text-white px-5 py-2 rounded-lg hover:bg-peach-600 transition">
        + Add Experience
      </button>

    </div>
  );
}