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

const tips = [
  { type: "good", title: 'Skip "responsible for"', desc: 'Use action verbs like "led", "improved", or "created".' },
  { type: "good", title: "Use bullet points", desc: "Make your achievements stand out with concise bullet points." },
  { type: "good", title: "Keep descriptions short and clear", desc: "Aim for 1–2 lines per bullet so it's easy to read fast." },
  { type: "good", title: "Show your impact", desc: "Highlight your accomplishments, not generic duties." },
  { type: "good", title: "Add numbers when possible", desc: "Stats speak louder than words and prove impact." },
  { type: "bad", title: "Don't abbreviate job titles", desc: "Write the full job title so it's easy to understand." },
  { type: "bad", title: 'Don\'t use "I" or full sentences', desc: "Keep bullet points short, starting with action verbs." },
  { type: "bad", title: "Don't exaggerate or lie", desc: "False claims can backfire during interviews." },
];

export default function ExperienceForm({ formData, setFormData }) {
  const [showTips, setShowTips] = useState(false);

  const experiences = formData.experience || [];

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setFormData({ ...formData, experience: updatedExperiences });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...experiences,
        {
          jobTitle: "",
          employer: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperiences });
  };

  return (
    <div className="space-y-6">

      {/* Header row: subtitle + tips button */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          Add your professional experience starting from most recent.
        </p>
        <button
          type="button"
          onClick={() => setShowTips((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-300 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition whitespace-nowrap"
        >
          <span>💡</span>
          Experience tips
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${showTips ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* Tips Panel */}
      {showTips && (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Experience tips</span>
            <button
              type="button"
              onClick={() => setShowTips(false)}
              className="text-gray-400 hover:text-gray-600 text-lg leading-none"
            >
              ×
            </button>
          </div>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    tip.type === "good"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
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

      {/* Experience Cards */}
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-5 space-y-4"
        >
          {/* Job Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Software Developer"
              value={exp.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
              className="inputStyle"
            />
          </div>

          {/* Employer */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Employer
            </label>
            <input
              type="text"
              placeholder="Company name"
              value={exp.employer}
              onChange={(e) => handleChange(index, "employer", e.target.value)}
              className="inputStyle"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="City, Country"
              value={exp.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
              className="inputStyle"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                className="inputStyle"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="inputStyle"
              />
            </div>

            {/* Currently Working Checkbox */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={exp.currentlyWorking || false}
                onChange={(e) =>
                  handleChange(index, "currentlyWorking", e.target.checked)
                }
              />
              <span className="text-sm text-slate-600">
                Currently Working Here
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe your responsibilities and achievements..."
              value={exp.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="inputStyle resize-none"
            />
          </div>

          {/* Remove Button */}
          {experiences.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveExperience(index)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}

      {/* Add Experience Button */}
      <button
        type="button"
        onClick={handleAddExperience}
        className="bg-peach-500 text-white px-5 py-2 rounded-lg hover:bg-peach-600 transition"
      >
        + Add Experience
      </button>

    </div>
  );
}