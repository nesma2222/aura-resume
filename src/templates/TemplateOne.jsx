export default function TemplateOne({ data = {}, designSettings = {} }) {
  const {
    firstName,
    lastName,
    desiredJobTitle,
    email,
    phone,
    address,
    city,
    postCode,
    country,
    linkedin,
    portfolio,
    experience = [],
    education = [],
    skills = [],
    certifications,
    hobbies = [],
    customSections = [],
    languages = [],
    summary,
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

      {/* Name */}
      <h1 className="font-bold text-center">
        {fullName || "John Doe"}
      </h1>

      {/* Desired Job Title */}
      {desiredJobTitle && (
        <p className="text-center text-gray-600">
          {desiredJobTitle}
        </p>
      )}

      {/* Contact */}
      <div className="text-center text-gray-600">
        {email && <p>{email}</p>}
        {phone && <p>{phone}</p>}

        {(address || city || country) && (
          <p>
            {address}
            {address && (city || country) && ", "}
            {city}
            {city && country && ", "}
            {postCode}
            {postCode && country && ", "}
            {country}
          </p>
        )}

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

      <hr />

      {/* Experience */}
      {experience.length > 0 && (
        <div>
          <h2 className="font-semibold">Experience</h2>

          {experience.map((exp, index) => (
            <div key={index}>
              <h4 className="font-semibold">{exp.jobTitle}</h4>

              <p className="text-gray-500">
                {exp.employer}
                {exp.employer && exp.location && " • "}
                {exp.location}
              </p>

              <p className="text-gray-400">
                {exp.startDate} —{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>

              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div>
          <h2 className="font-semibold">Education</h2>

          {education.map((edu, index) => (
            <div key={index}>
              <h4 className="font-semibold">{edu.degree}</h4>

              <p className="text-gray-500">
                {edu.school}
                {edu.school && edu.location && " • "}
                {edu.location}
              </p>

              <p className="text-gray-400">
                {edu.startDate} —{" "}
                {edu.currentlyStudying ? "Present" : edu.endDate}
              </p>

              {edu.description && <p>{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index}>
                {typeof skill === "string" ? skill : skill.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Certifications */}
      {certifications && (
        <div>
          <h2 className="font-semibold">Certifications</h2>
                             <p
  className="text-sm whitespace-pre-line"
  dangerouslySetInnerHTML={{ __html: certifications }}
/>
        </div>
      )}

      {/* Hobbies */}
      {hobbies.length > 0 && (
        <div>
          <h2 className="font-semibold">Hobbies</h2>
          <ul className="list-disc list-inside">
            {hobbies.map((hobby, index) => (
              <li key={index}>
                {typeof hobby === "string" ? hobby : hobby.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div>
          <h2 className="font-semibold">Languages</h2>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>
                <span className="font-medium">{lang.name}</span>
                {lang.level && ` — ${lang.level}`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom Sections */}
      {customSections.length > 0 &&
        customSections.map((section, index) =>
          section.title ? (
            <div key={index}>
              <h2 className="font-semibold">{section.title}</h2>
              <p className="whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ) : null
        )}

      {/* Summary */}
      {summary && (
        <div>
          <h2 className="font-semibold text-left">Summary</h2>
          <p className="text-left">{summary}</p>
        </div>
      )}

    </div>
  );
}