export default function TemplateThree({
  data = {},designSettings = {} }) {

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

    const {
    fontFamily = "",
    fontSize = "",
    lineSpacing = "",
    sectionSpacing = "space-y-6",
  } = designSettings;

  const fullName = [firstName, lastName]
    .filter(Boolean)
    .join(" ");

  return (
 <div className={`${fontFamily} ${fontSize} ${lineSpacing} ${sectionSpacing}`}>

      {/* LEFT SIDEBAR */}
      <div
        className="w-1/3 p-6 space-y-6 text-white"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div>
          <h1 className="text-xl font-bold">
            {fullName || "Neena Debrew"}
          </h1>

          {desiredJobTitle && (
            <p className="text-sm text-white/80">
              {desiredJobTitle}
            </p>
          )}
        </div>

        <div>
          <h2 className="font-semibold mb-2 border-b border-white/40 pb-1">
            Contact
          </h2>

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
              className="text-sm underline block"
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

        {skills.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2 border-b border-white/40 pb-1">
              Skills
            </h2>

            <ul className="text-sm space-y-1">
              {skills.map((skill, index) => (
                <li key={index}>
                  {typeof skill === "string" ? skill : skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {languages.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2 border-b border-white/40 pb-1">
              Languages
            </h2>

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

        {hobbies.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2 border-b border-white/40 pb-1">
              Hobbies
            </h2>

            <ul className="text-sm space-y-1">
              {hobbies.map((hobby, index) => (
                <li key={index}>
                  {typeof hobby === "string" ? hobby : hobby.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {certifications && (
          <div>
            <h2 className="font-semibold mb-2 border-b border-white/40 pb-1">
              Certifications
            </h2>

            <p className="text-sm whitespace-pre-line">
              {certifications}
            </p>
          </div>
        )}
      </div>

      {/* RIGHT MAIN */}
     <div className={`w-2/3 p-6 text-slate-700 ${sectionSpacing}`}>

        {summary && (
          <div>
            <h2
              className="font-semibold border-b pb-1 mb-2"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)"
              }}
            >
              Professional Summary
            </h2>

            <p className="text-sm">{summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div>
            <h2
              className="font-semibold border-b pb-1 mb-3"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)"
              }}
            >
              Experience
            </h2>

            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-slate-800">
  {exp.jobTitle}
</h4>

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

        {education.length > 0 && (
          <div>
            <h2
              className="font-semibold border-b pb-1 mb-3"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)"
              }}
            >
              Education
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-slate-800">
  {edu.degree}
</h4>

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