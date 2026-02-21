export default function TemplateTwo({ data }) {
  const fullName = [data?.firstName, data?.lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">

      {/* HEADER */}
      <div className="bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold">
          {fullName || "Your Name"}
        </h1>

        {data?.desiredJobTitle && (
          <p className="text-gray-300">{data.desiredJobTitle}</p>
        )}

        <div className="text-sm mt-2 space-x-4">
          {data?.email && <span>{data.email}</span>}
          {data?.phone && <span>{data.phone}</span>}

           {data?.linkedin && (
      <a
        href={data.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-gray-300 hover:text-white"
      >
        LinkedIn
      </a>
    )}

    {data?.portfolio && (
      <a
        href={data.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-gray-300 hover:text-white"
      >
        Portfolio
      </a>
    )}
        </div>
      </div>

      <div className="grid grid-cols-3">

        {/* LEFT SIDEBAR */}
        <div className="col-span-1 bg-gray-100 p-5 space-y-6">

          {/* Skills */}
          {(data?.skills?.length > 0) && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">Skills</h2>
              <ul className="text-sm space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index}>
                    {typeof skill === "string" ? skill : skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {(data?.languages?.length > 0) && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">Languages</h2>
              <ul className="text-sm space-y-1">
                {data.languages.map((lang, index) => (
                  <li key={index}>
                    {lang.name} {lang.level && `- ${lang.level}`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hobbies */}
          {(data?.hobbies?.length > 0) && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">Hobbies</h2>
              <ul className="text-sm space-y-1">
                {data.hobbies.map((hobby, index) => (
                  <li key={index}>
                    {typeof hobby === "string" ? hobby : hobby.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {data?.certifications && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">
                Certifications
              </h2>
              <p className="text-sm whitespace-pre-line">
                {data.certifications}
              </p>
            </div>
          )}

        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="col-span-2 p-6 space-y-6">

          {/* Summary */}
          {data?.summary && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-sm">{data.summary}</p>
            </div>
          )}

          {/* Experience */}
          {(data?.experience?.length > 0) && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-3">
                Experience
              </h2>

              {data.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{exp.jobTitle}</h4>

                  <p className="text-sm text-gray-600">
                    {exp.employer}
                    {exp.employer && exp.location && " • "}
                    {exp.location}
                  </p>

                  <p className="text-xs text-gray-400">
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
          {(data?.education?.length > 0) && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-3">
                Education
              </h2>

              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{edu.degree}</h4>

                  <p className="text-sm text-gray-600">
                    {edu.school}
                    {edu.school && edu.location && " • "}
                    {edu.location}
                  </p>

                  <p className="text-xs text-gray-400">
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

          {/* Custom Sections */}
          {(data?.customSections?.length > 0) &&
            data.customSections.map((section, index) => (
              section.title && (
                <div key={index}>
                  <h2 className="font-semibold border-b pb-1 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-sm whitespace-pre-line">
                    {section.description}
                  </p>
                </div>
              )
            ))}

        </div>
      </div>
    </div>
  );
}