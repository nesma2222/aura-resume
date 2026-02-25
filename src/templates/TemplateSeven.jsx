export default function TemplateSeven({ data = {} }) {
  const {
    firstName,
    lastName,
    email,
    phone,
    skills = [],
    experience = [],
    education = [],
    summary,
  } = data;

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  return (
    <div className="flex max-w-5xl mx-auto bg-white shadow">

      <div className="w-1/3 bg-gray-100 p-6 space-y-4">
        <h1 className="text-xl font-bold">
          {fullName || "Your Name"}
        </h1>

        <div>
          <h2 className="font-semibold">Contact</h2>
          <p>{email}</p>
          <p>{phone}</p>
        </div>

        {skills.length > 0 && (
          <div>
            <h2 className="font-semibold">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((s, i) => (
                <li key={i}>{typeof s === "string" ? s : s.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-2/3 p-6 space-y-6">
        {summary && (
          <div>
            <h2 className="font-semibold border-b">Summary</h2>
            <p>{summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div>
            <h2 className="font-semibold border-b">Experience</h2>
            {experience.map((exp, i) => (
              <div key={i}>
                <strong>{exp.jobTitle}</strong>
                <p>{exp.employer}</p>
              </div>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2 className="font-semibold border-b">Education</h2>
            {education.map((edu, i) => (
              <div key={i}>
                <strong>{edu.degree}</strong>
                <p>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}