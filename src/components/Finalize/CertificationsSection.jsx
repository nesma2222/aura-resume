import { Award, ChevronUp, ChevronDown, Trash2 } from "lucide-react";

export default function CertificationsSection({
  formData,
  setFormData,
  openSection,
  toggleSection
}) {
  const isOpen = openSection === "certifications";

  return (
    <div className="bg-gray-50 border rounded-xl p-5 mb-5 shadow-sm">
      
      {/* Header */}
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={() => toggleSection("certifications")}
      >
        <div className="flex gap-4">
          
          {/* Icon Box */}
          <div className="bg-blue-100 p-3 rounded-lg">
            <Award className="text-blue-600 w-6 h-6" />
          </div>

          {/* Title + Subtitle */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Certifications and licenses
            </h3>
            <p className="text-sm text-gray-500">
              Add credentials that back up your expertise.
            </p>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
          <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      {isOpen && (
        <div className="mt-5">
          
          {/* Toolbar */}
          <div className="flex gap-4 border border-gray-200 rounded-t-lg px-3 py-2 bg-white">
            <button className="font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
            <button>•</button>
            <button>1.</button>
            <button>🔗</button>
          </div>

          {/* Textarea */}
          <textarea
            value={formData.certifications || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                certifications: e.target.value
              })
            }
            placeholder="e.g., Google Analytics Certification, CPA License"
            className="w-full min-h-[150px] border border-gray-200 rounded-b-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      )}
    </div>
  );
}
