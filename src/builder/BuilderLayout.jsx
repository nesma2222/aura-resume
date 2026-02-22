import { useState } from "react";
import {
  LayoutGrid,
  FileText,
  Palette,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import TemplatesPanel from "./panels/TemplatesPanel";
import SectionsPanel from "./panels/SectionsPanel";
import DesignPanel from "./panels/DesignPanel";
import SpellCheckPanel from "./panels/SpellCheckPanel";
import ResumePreview from "./preview/ResumePreview";

export default function BuilderLayout({
  selectedTemplate,
  setSelectedTemplate,
  formData,
  setFormData,
  onBack,
  goToEditorSection
}) {
  const [activePanel, setActivePanel] = useState("sections");

  // 🔹 Section order state
  const [sections, setSections] = useState([
    { id: "contacts", label: "Contacts"},
    { id: "summary", label: "Summary" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
  ]);

  // 🔹 Design settings state
  const [designSettings, setDesignSettings] = useState({
    fontFamily: "font-sans",
    primaryColor: "#2563eb",
    fontSize: "text-base",
    lineSpacing: "leading-normal",
    sectionSpacing: "space-y-6",
  });

  return (
    <div className="flex h-screen bg-gray-100 relative">

      {/* 🔙 Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-24 flex items-center gap-2 text-peach-600 font-medium"
      >
        <ArrowLeft size={18} />
        Back to Editor
      </button>

      {/* LEFT ICON SIDEBAR */}
      <div className="w-20 bg-white shadow-md flex flex-col items-center py-20 gap-8">

        <SidebarIcon
          icon={<LayoutGrid size={22} />}
          label="Templates"
          active={activePanel === "templates"}
          onClick={() => setActivePanel("templates")}
        />

        <SidebarIcon
          icon={<FileText size={22} />}
          label="Sections"
          active={activePanel === "sections"}
          onClick={() => setActivePanel("sections")}
        />

        <SidebarIcon
          icon={<Palette size={22} />}
          label="Design"
          active={activePanel === "design"}
          onClick={() => setActivePanel("design")}
        />

        <SidebarIcon
          icon={<CheckCircle size={22} />}
          label="Spell"
          active={activePanel === "spell"}
          onClick={() => setActivePanel("spell")}
        />

      </div>

      {/* LEFT PANEL CONTENT */}
      <div className="w-96 bg-white shadow-lg overflow-y-auto mt-16">

        {activePanel === "templates" && (
          <TemplatesPanel
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        )}

        {activePanel === "sections" && (
          <SectionsPanel
             sections={sections}
             goToEditorSection={goToEditorSection}
          />
        )}

        {activePanel === "design" && (
          <DesignPanel
            designSettings={designSettings}
            setDesignSettings={setDesignSettings}
          />
        )}

        {activePanel === "spell" && (
          <SpellCheckPanel formData={formData} />
        )}

      </div>

      {/* RIGHT RESUME PREVIEW */}
      <div className="flex-1 flex justify-center items-start overflow-y-auto bg-gray-200 p-8 mt-16">
        <ResumePreview
          selectedTemplate={selectedTemplate}
          formData={formData}
          designSettings={designSettings}
          sections={sections}
        />
      </div>

    </div>
  );
}

function SidebarIcon({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-xs font-medium transition
        ${active ? "text-peach-600" : "text-gray-500 hover:text-peach-500"}
      `}
    >
      <div
        className={`p-3 rounded-xl transition
          ${active ? "bg-peach-100" : ""}
        `}
      >
        {icon}
      </div>
      <span className="mt-2">{label}</span>
    </button>
  );
}