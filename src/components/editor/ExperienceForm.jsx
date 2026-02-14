export default function ExperienceForm({ formData, setFormData }) {

  // Safe reference
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
    <div>
      <h2 className="text-lg font-semibold mb-2">Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <input
            type="text"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Employer"
            value={exp.employer}
            onChange={(e) => handleChange(index, "employer", e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Location"
            value={exp.location}
            onChange={(e) => handleChange(index, "location", e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            type="button"
            onClick={() => handleRemoveExperience(index)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddExperience}
        className="bg-peach-500 text-white px-4 py-2 rounded hover:bg-peach-600"
      >
        Add Experience
      </button>
    </div>
  );
}
