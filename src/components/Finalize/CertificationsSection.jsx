import { Award, ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useRef } from "react";

export default function CertificationsSection({
  formData,
  setFormData,
  openSection,
  toggleSection
}) {
  const isOpen = openSection === "certifications";

  const textareaRef = useRef(null);

  const updateText = (newText) => {
    setFormData({
      ...formData,
      certifications: newText
    });
  };

  const wrapSelection = (before, after) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const text = formData.certifications || "";
    const selected = text.substring(start, end);

    const newText =
      text.substring(0, start) +
      before +
      selected +
      after +
      text.substring(end);

    updateText(newText);
  };

  // FIXED BOLD
  const makeBold = () => {
    wrapSelection("<b>", "</b>");
  };

  // BULLET
  const addBullet = () => {
    const text = formData.certifications || "";
    updateText(text + "\n• ");
  };

  // NUMBERED LIST
  const addNumber = () => {
    const text = formData.certifications || "";
    const matches = text.match(/\n\d+\./g);
    const next = matches ? matches.length + 1 : 1;

    updateText(text + `\n${next}. `);
  };

  // LINK
  const addLink = () => {
    wrapSelection('<a href="https://">', "</a>");
  };

  return (
    <div className="bg-gray-50 border rounded-xl p-5 mb-5 shadow-sm">
      
      {/* Header */}
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={() => toggleSection("certifications")}
      >
        <div className="flex gap-4">
          
          <div className="bg-blue-100 p-3 rounded-lg">
            <Award className="text-blue-600 w-6 h-6" />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Certifications and licenses
            </h3>
            <p className="text-sm text-gray-500">
              Add credentials that back up your expertise.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
          <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      {isOpen && (
        <div className="mt-5">
          
          {/* Toolbar */}
          <div className="flex gap-4 border border-gray-200 rounded-t-lg px-3 py-2 bg-white">
            <button onClick={makeBold} className="font-bold">B</button>

            <button onClick={() => wrapSelection("<i>", "</i>")} className="italic">
              I
            </button>

            <button onClick={() => wrapSelection("<u>", "</u>")} className="underline">
              U
            </button>

            <button onClick={addBullet}>•</button>

            <button onClick={addNumber}>1.</button>

            <button onClick={addLink}>🔗</button>
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
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