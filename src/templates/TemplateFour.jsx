export default function TemplateFour({ data = {} }) {
  const {
    firstName,
    lastName,
    desiredJobTitle,
    email,
    phone,
    city,
    country,
    skills = [],
    experience = [],
    education = [],
  } = data;

  const fullName = [firstName, lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex text-sm font-sans max-w-5xl mx-auto shadow-lg bg-white">

      {/* Sidebar */}
      <div className="w-1/3 bg-slate-800 text-white p-6 space-y-6">

        {/* Name */}
        <div>
          <h1 className="text-xl font-bold">
            {fullName || "Neena Debrew"}
          </h1>
          {desiredJobTitle && (
            <p className="text-slate-300">
              {desiredJobTitle}
            </p>
          )}
        </div>

        {/* Contact */}
        {(email || phone || city || country) && (
          <div>
            <h2 className="font-semibold mb-2">Contact</h2>

            {email && <p>{email}</p>}
            {phone && <p>{phone}</p>}

            {(city || country) && (
              <p>
                {city}
                {city && country && ", "}
                {country}
              </p>
            )}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2">Skills</h2>
            <ul className="space-y-1">
              {skills.map((skill, i) => (
                <li key={i}>
                  • {typeof skill === "string" ? skill : skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 space-y-6">

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <h2 className="font-bold text-slate-800 mb-2 border-b pb-1">
              Experience
            </h2>

            {experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <h4 className="font-semibold">
                  {exp.jobTitle}
                </h4>

                <p className="text-slate-500 text-xs">
                  {exp.employer}
                  {exp.employer && " • "}
                  {exp.startDate} —{" "}
                  {exp.currentlyWorking
                    ? "Present"
                    : exp.endDate}
                </p>

                {exp.description && (
                  <p className="mt-1">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 className="font-bold text-slate-800 mb-2 border-b pb-1">
              Education
            </h2>

            {education.map((edu, i) => (
              <div key={i} className="mb-4">
                <h4 className="font-semibold">
                  {edu.degree}
                </h4>

                <p className="text-slate-500 text-xs">
                  {edu.school}
                  {edu.school && " • "}
                  {edu.startDate} —{" "}
                  {edu.currentlyStudying
                    ? "Present"
                    : edu.endDate}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}