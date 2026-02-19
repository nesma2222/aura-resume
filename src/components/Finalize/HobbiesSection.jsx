export default function HobbiesSection({
  formData,
  setFormData,
  openSection,
  toggleSection
}) {

  const addHobby = () => {
    setFormData({
      ...formData,
      hobbies: [...(formData.hobbies || []), { name: "" }],
    });
  };

  const updateHobby = (index, value) => {
    const updated = [...formData.hobbies];
    updated[index].name = value;

    setFormData({
      ...formData,
      hobbies: updated,
    });
  };

  const deleteHobby = (index) => {
    const updated = formData.hobbies.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      hobbies: updated,
    });
  };

  return (
    <div className="bg-white border rounded-lg p-4 mb-4">

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection("hobbies")}
      >
        <div>
          <h3 className="font-semibold">Hobbies and Interests</h3>
          <p className="text-sm text-gray-500">
            Include activities relevant to your job or industry.
          </p>
        </div>

        <span>
          {openSection === "hobbies" ? "▲" : "▼"}
        </span>
      </div>

      {/* Body */}
      {openSection === "hobbies" && (
        <div className="mt-4 space-y-3">

          {(formData.hobbies || []).map((hobby, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                placeholder="Hobby"
                value={hobby.name}
                onChange={(e) => updateHobby(index, e.target.value)}
                className="border p-2 rounded w-full"
              />

              <button
                onClick={() => deleteHobby(index)}
                className="text-red-500"
              >
                🗑
              </button>
            </div>
          ))}

          <button
            onClick={addHobby}
            className="text-peach-600 font-medium"
          >
            + Add Hobby
          </button>

        </div>
      )}

    </div>
  );
}
