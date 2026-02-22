export default function DesignPanel({
  designSettings,
  setDesignSettings,
}) {
  const updateSetting = (key, value) => {
    setDesignSettings({
      ...designSettings,
      [key]: value,
    });
  };

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-6">Design & Formatting</h2>

      {/* FONT FAMILY */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Font Style</label>
        <select
          value={designSettings.fontFamily}
          onChange={(e) =>
            updateSetting("fontFamily", e.target.value)
          }
          className="w-full border rounded-lg p-2"
        >
          <option value="font-sans">Sans</option>
          <option value="font-serif">Serif</option>
          <option value="font-mono">Mono</option>
        </select>
      </div>

      {/* PRIMARY COLOR */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Primary Color
        </label>
        <input
          type="color"
          value={designSettings.primaryColor}
          onChange={(e) =>
            updateSetting("primaryColor", e.target.value)
          }
          className="w-full h-10 rounded"
        />
      </div>

      {/* FONT SIZE */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Font Size
        </label>
        <select
          value={designSettings.fontSize}
          onChange={(e) =>
            updateSetting("fontSize", e.target.value)
          }
          className="w-full border rounded-lg p-2"
        >
          <option value="text-sm">Small</option>
          <option value="text-base">Medium</option>
          <option value="text-lg">Large</option>
        </select>
      </div>

      {/* LINE SPACING */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Line Spacing
        </label>
        <select
          value={designSettings.lineSpacing}
          onChange={(e) =>
            updateSetting("lineSpacing", e.target.value)
          }
          className="w-full border rounded-lg p-2"
        >
          <option value="leading-normal">Normal</option>
          <option value="leading-relaxed">Relaxed</option>
          <option value="leading-loose">Loose</option>
        </select>
      </div>

      {/* SECTION SPACING */}
      <div>
        <label className="block font-medium mb-2">
          Section Spacing
        </label>
        <select
          value={designSettings.sectionSpacing}
          onChange={(e) =>
            updateSetting("sectionSpacing", e.target.value)
          }
          className="w-full border rounded-lg p-2"
        >
          <option value="space-y-4">Compact</option>
          <option value="space-y-6">Normal</option>
          <option value="space-y-8">Spacious</option>
        </select>
      </div>

    </div>
  );
}