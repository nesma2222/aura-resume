export default function CustomSection({
  formData,
  setFormData,
  openSection,
  toggleSection
}) {

  const addCustom = () => {
    setFormData({
      ...formData,
      customSections: [
        ...(formData.customSections || []),
        { title: "", description: "" }
      ],
    });
  };

  const updateCustom = (index, field, value) => {
    const updated = [...formData.customSections];
    updated[index][field] = value;

    setFormData({
      ...formData,
      customSections: updated,
    });
  };

  const deleteCustom = (index) => {
    const updated = formData.customSections.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      customSections: updated,
    });
  };

  return (
    <div className="bg-white border rounded-lg p-4 mb-4">

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection("customSections")}
      >
        <div>
          <h3 className="font-semibold">Custom Section</h3>
          <p className="text-sm text-gray-500">
            Create a custom section for any extra info you'd like to add.
          </p>
        </div>

        <span>
          {openSection === "customSections" ? "▲" : "▼"}
        </span>
      </div>

      {/* Body */}
      {openSection === "customSections" && (
        <div className="mt-4 space-y-4">

          {(formData.customSections || []).map((item, index) => (
            <div key={index} className="border p-3 rounded space-y-2">

              <input
                placeholder="Section Title"
                value={item.title}
                onChange={(e) =>
                  updateCustom(index, "title", e.target.value)
                }
                className="border p-2 rounded w-full"
              />

              <textarea
                placeholder="Description"
                value={item.description}
                onChange={(e) =>
                  updateCustom(index, "description", e.target.value)
                }
                className="border p-2 rounded w-full"
              />

              <button
                onClick={() => deleteCustom(index)}
                className="text-red-500 text-sm"
              >
                🗑 Remove
              </button>

            </div>
          ))}

          <button
            onClick={addCustom}
            className="text-peach-600 font-medium"
          >
            + Add Custom Section
          </button>

        </div>
      )}

    </div>
  );
}
