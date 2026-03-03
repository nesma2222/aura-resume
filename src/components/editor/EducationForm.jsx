export default function EducationForm({ formData, setFormData }) {
  const educationList = formData.education || [];

  const handleChange = (index, field, value) => {
    const updatedEducation = [...educationList];
    updatedEducation[index][field] = value;

    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...educationList,
        {
          school: "",
          degree: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = educationList.filter((_, i) => i !== index);
    setFormData({ ...formData, education: updatedEducation });
  };

  return (
    <div className="education">
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        Add your education details — even if you haven't graduated yet.
      </p>

      {educationList.map((edu, index) => (
        <div key={index} className="border-b pb-6 space-y-4">
          
          {/* School + Location */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">
                School Name
              </label>
              <input
                value={edu.school}
                onChange={(e) =>
                  handleChange(index, "school", e.target.value)
                }
                className="inputStyle"
                placeholder="School name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">
                Location
              </label>
              <input
                value={edu.location}
                onChange={(e) =>
                  handleChange(index, "location", e.target.value)
                }
                className="inputStyle"
                placeholder="Location"
              />
            </div>
          </div>

          {/* Degree */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Degree
            </label>
            <input
              value={edu.degree}
              onChange={(e) =>
                handleChange(index, "degree", e.target.value)
              }
              className="inputStyle"
              placeholder="Degree / Field of study"
            />
          </div>

          {/* Start + End Date with Calendar */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
                className="inputStyle"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={edu.endDate === "Present" ? "" : edu.endDate}
                onChange={(e) =>
                  handleChange(index, "endDate", e.target.value)
                }
                disabled={edu.endDate === "Present"}
                className="inputStyle"
              />

              {/* Currently Studying Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={edu.endDate === "Present"}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "endDate",
                      e.target.checked ? "Present" : ""
                    )
                  }
                />
                <span className="text-sm text-slate-600">
                  Currently Studying Here
                </span>
              </div>
            </div>

          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Description
            </label>
            <textarea
              value={edu.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              className="inputStyle"
              placeholder="Achievements, honors, GPA etc"
            />
          </div>

          {/* Remove Button */}
          {educationList.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveEducation(index)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove Education
            </button>
          )}
        </div>
      ))}

      {/* Add Education Button */}
      <button
        type="button"
        onClick={handleAddEducation}
        className="bg-peach-500 text-white px-4 py-2 rounded hover:bg-peach-600"
      >
        + Add Education
      </button>
    </div>
    </div>
  );
}