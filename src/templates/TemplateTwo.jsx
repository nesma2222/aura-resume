export default function TemplateTwo({
  data = {},designSettings = {} }) {
  const {
    firstName,
    lastName,
    desiredJobTitle,
    email,
    phone,
    city,
    postCode,
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
    customSections = [],
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

  // ✅ HARD FIXED COLOR (no designSettings)
  const fixedColor = "#1f2937";

   // ✅ FIX URL FUNCTION (correct place)
  const fixURL = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return "https://" + url;
  };

  return (
     <div className={`${fontFamily} ${fontSize} ${lineSpacing} ${sectionSpacing}`}>


      {/* HEADER */}
      <div
        className="text-white p-6"
        style={{ backgroundColor: fixedColor }}
      >
        <h1 className="text-2xl font-bold">
          {fullName || "John Doe"}
        </h1>

        {desiredJobTitle && (
          <p className="text-gray-300">{desiredJobTitle}</p>
        )}

        <div className="text-sm mt-2 space-x-4">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {city && <span>{city}</span>}
          {postCode && <span>{postCode}</span>}
          {country && <span>{country}</span>}

          
 {linkedin && (
  <a
    href={fixURL(linkedin)}
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn: 
    {linkedin}
  </a>
)}

{portfolio && (
  <a
    href={fixURL(portfolio)}
    target="_blank"
    rel="noopener noreferrer"
  >
    Portfolio: 
    {portfolio}
  </a>
)}

        </div>
      </div>

      <div className="grid grid-cols-3">

        {/* LEFT SIDEBAR */}
        <div className="col-span-1 bg-gray-100 p-5 space-y-6">

          {skills.length > 0 && (
            <div>
              <h2
                className="font-semibold border-b pb-1 mb-2"
                style={{
                  borderColor: fixedColor,
                  color: fixedColor,
                }}
              >
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
              <h2 className="font-semibold border-b pb-1 mb-2">
                Languages
              </h2>
              <ul className="text-sm space-y-1">
                {languages.map((lang, index) => (
  <li key={index}>
    {typeof lang === "string"
      ? lang
      : `${lang.name}${lang.level ? " - " + lang.level : ""}`}
  </li>
))}
              </ul>
            </div>
          )}

          {hobbies.length > 0 && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">
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
              <h2 className="font-semibold border-b pb-1 mb-2">
                Certifications
              </h2>
                     <p
  className="text-sm whitespace-pre-line"
  dangerouslySetInnerHTML={{ __html: certifications }}
/>
              
            </div>
          )}
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="col-span-2 p-6 space-y-6">

          {summary && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-sm">{summary}</p>
            </div>
          )}

          {experience.length > 0 && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-3">
                Experience
              </h2>

              {experience.map((exp, index) => (
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

          {education.length > 0 && (
            <div>
              <h2 className="font-semibold border-b pb-1 mb-3">
                Education
              </h2>

              {education.map((edu, index) => (
  <div key={index} className="mb-4">
    <h4 className="font-semibold">
      {edu.degree || "Education"}
    </h4>

    {edu.description && (
  <p className="text-sm mt-1 whitespace-pre-line">
    {edu.description}
  </p>
)}

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
                </div>
              ))}
            </div>

            
          )}

          {/* Custom Sections */}
      {customSections.length > 0 &&
        customSections.map((section, index) =>
          section.title ? (
            <div key={index}>
              <h2 className="font-semibold border-b pb-1 mb-2">
  {section.title}
</h2>
              <p className="text-sm whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ) : null
        )}
        </div>
      </div>
    </div>
  );
}