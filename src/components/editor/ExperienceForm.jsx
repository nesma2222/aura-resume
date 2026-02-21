export default function ExperienceForm({ formData, setFormData }) {

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
          description: ""
        }
      ]
    });
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperiences });
  };

  return (
    <div className="space-y-6">

      <p className="text-sm text-gray-500">
        Add your professional experience starting from most recent.
      </p>

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
                    handleChange(
                      index,
                      "currentlyWorking",
                      e.target.checked
                    )
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
