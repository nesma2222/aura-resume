import { GripVertical, Pencil, Trash2, Lock } from "lucide-react";
import { useState } from "react";

export default function SectionsPanel({ sections, setSections, goToEditorSection }) {
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    // Prevent moving locked section
    if (sections[dragIndex].locked || sections[dropIndex].locked) return;

    const updated = [...sections];
    const draggedItem = updated.splice(dragIndex, 1)[0];
    updated.splice(dropIndex, 0, draggedItem);

    setSections(updated);
    setDragIndex(null);
  };

  const handleDelete = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-1">Sections</h2>
      <p className="text-sm text-slate-500 mb-6">
        Drag & drop to reorder sections.
      </p>

      <div className="space-y-3">
{sections.map((section, index) => (
  <div
    key={section.id}
    draggable={!section.locked}
    onDragStart={() => handleDragStart(index)}
    onDragOver={handleDragOver}
    onDrop={() => handleDrop(index)}
    className={`flex items-center justify-between p-4 rounded-xl border bg-white
      ${
        section.locked
          ? "opacity-70 cursor-not-allowed"
          : "cursor-move hover:border-peach-400"
      }
    `}
  >
    <div className="flex items-center gap-3">
      {section.locked ? (
        <Lock size={18} className="text-slate-400" />
      ) : (
        <GripVertical size={18} className="text-slate-400" />
      )}

      <span className="font-medium">{section.label}</span>
    </div>

    <button
      onClick={() => goToEditorSection(section.id)}
      className="text-slate-400 hover:text-peach-600 flex items-center gap-2"
    >
      <Pencil size={16} />
      Edit
    </button>
  </div>
))}
     

      </div>
    </div>
  );
}