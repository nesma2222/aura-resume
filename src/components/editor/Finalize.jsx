export default function Finalize({ formData, selectedTemplate }) {

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Resume Score */}
      <div className="bg-white shadow rounded-lg p-4 mb-6 flex items-center gap-3">
        <span className="bg-green-500 text-white text-sm px-3 py-1 rounded">
          90%
        </span>
        <p className="font-medium">Your resume score 🥰</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Additional Sections
          </h2>

          <p className="text-gray-500 mb-6">
            Add certifications, languages, awards or extra details.
          </p>

          {/* Section Cards */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "Languages",
              "Certifications and licenses",
              "Awards and honors",
              "Websites and social media",
              "References",
              "Hobbies and interests",
              "Custom section"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 flex justify-between items-center hover:shadow cursor-pointer"
              >
                <p>{item}</p>
                <span className="text-blue-500 text-xl">+</span>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE RESUME PREVIEW */}
        <div className="bg-white shadow rounded-lg p-6">

          {selectedTemplate === "templateOne" && (
            <selectedTemplate.component data={formData} />
          )}

          {selectedTemplate === "templateTwo" && (
            <selectedTemplate.component data={formData} />
          )}

        </div>

      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="flex justify-end mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Download Resume
        </button>
      </div>

    </div>
  );
}
