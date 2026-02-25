export default function TemplateThree({ data = {} }) {
  const {
    firstName,
    lastName,
    desiredJobTitle,
    email,
    phone,
    city,
    country,
    linkedin,
    portfolio,
    skills = [],
    languages = [],
    hobbies = [],
    certifications,
    summary,
    experience = [],
    education = [],
  } = data;

  const fullName = [firstName, lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex text-slate-800 max-w-5xl mx-auto bg-white shadow-lg">

      {/* LEFT SIDEBAR */}
      <div className="w-1/3 p-6 bg-slate-100 space-y-6">

        {/* Name */}
        <div>
          <h1 className="text-xl font-bold">
            {fullName || "Neena Debrew"}
          </h1>
          {desiredJobTitle && (
            <p className="text-sm text-slate-600">
              {desiredJobTitle}
            </p>
          )}
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          {email && <p className="text-sm">{email}</p>}
          {phone && <p className="text-sm">{phone}</p>}
          {(city || country) && (
            <p className="text-sm">
              {city} {city && country && ","} {country}
            </p>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              LinkedIn
            </a>
          )}

          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline block"
            >
              Portfolio
            </a>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2">Skills</h2>
            <ul className="text-sm space-y-1">
              {skills.map((skill, index) => (
                <li key={index}>
                  {typeof skill === "string" ? skill : skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2">Languages</h2>
            <ul className="text-sm space-y-1">
              {languages.map((lang, index) => (
                <li key={index}>
                  {lang.name}
                  {lang.level && ` — ${lang.level}`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2">Hobbies</h2>
            <ul className="text-sm space-y-1">
              {hobbies.map((hobby, index) => (
                <li key={index}>
                  {typeof hobby === "string" ? hobby : hobby.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {certifications && (
          <div>
            <h2 className="font-semibold mb-2">Certifications</h2>
            <p className="text-sm whitespace-pre-line">
              {certifications}
            </p>
          </div>
        )}
      </div>

      {/* RIGHT MAIN */}
      <div className="w-2/3 p-6 space-y-6">

        {/* Summary */}
        {summary && (
          <div>
            <h2 className="font-semibold border-b pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <h2 className="font-semibold border-b pb-1 mb-3">
              Experience
            </h2>

            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">{exp.jobTitle}</h4>

                <p className="text-sm text-slate-600">
                  {exp.employer}
                  {exp.employer && exp.location && " • "}
                  {exp.location}
                </p>

                <p className="text-xs text-slate-400">
                  {exp.startDate} —{" "}
                  {exp.currentlyWorking
                    ? "Present"
                    : exp.endDate}
                </p>

                {exp.description && (
                  <p className="text-sm mt-1">
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
            <h2 className="font-semibold border-b pb-1 mb-3">
              Education
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">{edu.degree}</h4>

                <p className="text-sm text-slate-600">
                  {edu.school}
                  {edu.school && edu.location && " • "}
                  {edu.location}
                </p>

                <p className="text-xs text-slate-400">
                  {edu.startDate} —{" "}
                  {edu.currentlyStudying
                    ? "Present"
                    : edu.endDate}
                </p>

                {edu.description && (
                  <p className="text-sm mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}