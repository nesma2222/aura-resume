export default function TemplateOne({ data }) {
  return (
    <div className="space-y-4">

      {/* Name */}
      <h1 className="text-2xl font-bold">
        {data.firstName} {data.lastName}
      </h1>

      {/* Contact */}
      <p>{data.email}</p>
      <p>{data.phone}</p>

      <hr />

      {/* Experience Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Experience</h2>

        {(data.experience || []).map((exp, index) => (
          <div key={index} className="mb-4">

            <h4 className="font-semibold">{exp.jobTitle}</h4>

            <p className="text-sm text-gray-500">
              {exp.employer} • {exp.location}
            </p>

            <p className="text-sm text-gray-400">
              {exp.startDate} — {exp.endDate}
            </p>

            <p className="text-sm">{exp.description}</p>

          </div>
        ))}

      </div>
    </div>
  );
}
