export default function TemplateFour({ data }) {
  return (
    <div className="flex text-sm font-sans">

      {/* Sidebar */}
      <div className="w-1/3 bg-slate-800 text-white p-6 space-y-6">

        <div>
          <h1 className="text-xl font-bold">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-slate-300">{data.desiredJobTitle}</p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.city}, {data.country}</p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Skills</h2>
          <ul className="space-y-1">
            {(data.skills || []).map((skill, i) => (
              <li key={i}>• {typeof skill === "string" ? skill : skill.name}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 space-y-6">

        <div>
          <h2 className="font-bold text-slate-800 mb-2 border-b pb-1">
            Experience
          </h2>

          {(data.experience || []).map((exp, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-semibold">{exp.jobTitle}</h4>
              <p className="text-slate-500 text-xs">
                {exp.employer} • {exp.startDate} — {exp.endDate}
              </p>
              <p className="mt-1">{exp.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-bold text-slate-800 mb-2 border-b pb-1">
            Education
          </h2>

          {(data.education || []).map((edu, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-slate-500 text-xs">
                {edu.school} • {edu.startDate} — {edu.endDate}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
