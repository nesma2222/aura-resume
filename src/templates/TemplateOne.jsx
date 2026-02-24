export default function TemplateOne({ data, designSettings = {} }) {
  const {
    fontFamily = "",
    fontSize = "",
    lineSpacing = "",
    sectionSpacing = "space-y-6",
  } = designSettings;

  return (
    <div className={`${fontFamily} ${fontSize} ${lineSpacing} ${sectionSpacing}`}>

      {/* Name */}
      <h1 className="font-bold text-center">
        {data.firstName} {data.lastName}
      </h1>

      {/* Desired Job Title */}
      {data.desiredJobTitle && (
        <p className="text-center text-gray-600">
          {data.desiredJobTitle}
        </p>
      )}

      {/* Contact */}
      <div className="text-center text-gray-600">
        {data.email && <p>{data.email}</p>}
        {data.phone && <p>{data.phone}</p>}

        {(data.address || data.country) && (
          <p>
            {data.address}
            {data.address && data.country && ", "}
            {data.city}, {data.postCode}, {data.country}
          </p>
        )}

        {data.linkedin && (
          <p>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {data.linkedin}
            </a>
          </p>
        )}

        {data.portfolio && (
          <p>
            <a
              href={data.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {data.portfolio}
            </a>
          </p>
        )}
      </div>

      <hr />

      {/* Experience */}
      <div>
        <h2 className="font-semibold">Experience</h2>

        {(data.experience || []).map((exp, index) => (
          <div key={index}>
            <h4 className="font-semibold">{exp.jobTitle}</h4>

            <p className="text-gray-500">
              {exp.employer}
              {exp.employer && exp.location && " • "}
              {exp.location}
            </p>

            <p className="text-gray-400">
              {exp.startDate} — {exp.endDate}
            </p>

            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 className="font-semibold">Education</h2>

        {(data.education || []).map((edu, index) => (
          <div key={index}>
            <h4 className="font-semibold">{edu.degree}</h4>

            <p className="text-gray-500">
              {edu.school} • {edu.location}
            </p>

            <p className="text-gray-400">
              {edu.startDate} — {edu.endDate}
            </p>

            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="font-semibold">Skills</h2>

        <ul className="list-disc list-inside">
          {(data.skills || []).map((skill, index) => (
            <li key={index}>
              {typeof skill === "string" ? skill : skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      {data.certifications && (
        <div>
          <h2 className="font-semibold">Certifications</h2>
          <p className="whitespace-pre-line">
            {data.certifications}
          </p>
        </div>
      )}

      {/* Hobbies */}
      {(data.hobbies && data.hobbies.length > 0) && (
        <div>
          <h2 className="font-semibold">Hobbies</h2>

          <ul className="list-disc list-inside">
            {data.hobbies.map((hobby, index) => (
              <li key={index}>
                {typeof hobby === "string" ? hobby : hobby.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom Sections */}
      {(data.customSections && data.customSections.length > 0) &&
        data.customSections.map((section, index) =>
          section.title ? (
            <div key={index}>
              <h2 className="font-semibold">
                {section.title}
              </h2>
              <p className="whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ) : null
        )}

      {/* Languages */}
      {(data.languages && data.languages.length > 0) && (
        <div>
          <h2 className="font-semibold">Languages</h2>

          <ul>
            {data.languages.map((lang, index) => (
              <li key={index}>
                <span className="font-medium">{lang.name}</span>
                {lang.level && ` — ${lang.level}`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Summary */}
      {data.summary && (
        <div>
          <h2 className="font-semibold text-left">
            Summary
          </h2>
          <p className="text-left">{data.summary}</p>
        </div>
      )}

    </div>
  );
}