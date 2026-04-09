export default function TemplateFour({
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

      {/* TOP HEADER BAR */}
      <div
        className="p-8 text-white"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <h1 className="text-3xl font-bold tracking-wide">
          {fullName || "John Doe"}
        </h1>

        {desiredJobTitle && (
          <p className="mt-2 text-white/90 text-lg">
            {desiredJobTitle}
          </p>
        )}

        <div className="mt-4 text-sm flex flex-wrap gap-x-6 gap-y-2">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {(city || country) && (
            <span>
              {city} {city && country && ","} {country}
            </span>
          )}
         {linkedin && (
  <a
    href={fixURL(linkedin)}
    target="_blank"
    rel="noopener noreferrer"
  >
    {linkedin}
  </a>
)}

{portfolio && (
  <a
    href={fixURL(portfolio)}
    target="_blank"
    rel="noopener noreferrer"
  >
    {portfolio}
  </a>
)}
 
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="p-10 space-y-10">

        {/* SUMMARY */}
        {summary && (
          <div>
            <h2
              className="text-xl font-bold mb-3 relative"
              style={{ color: "var(--primary-color)" }}
            >
              Professional Summary
              <span
                className="absolute left-0 -bottom-1 h-1 w-16"
                style={{ backgroundColor: "var(--primary-color)" }}
              />
            </h2>

            <p className="text-sm leading-relaxed mt-4">
              {summary}
            </p>
          </div>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <div>
            <h2
              className="text-xl font-bold mb-5 relative"
              style={{ color: "var(--primary-color)" }}
            >
              Experience
              <span
                className="absolute left-0 -bottom-1 h-1 w-16"
                style={{ backgroundColor: "var(--primary-color)" }}
              />
            </h2>
             
             {experience.map((exp, index) => {
  const {
    jobTitle,
    startDate,
    endDate,
    currentlyWorking,
    employer,
    location,
    description,
  } = exp || {};

  return (
    <div key={index} className="mb-8">
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-lg">
          {jobTitle}
        </h4>

        <p className="text-xs text-slate-500">
          {startDate} — {currentlyWorking ? "Present" : endDate}
        </p>
      </div>

      {(employer || location) && (
        <p className="text-sm text-slate-600">
          {employer}
          {employer && location && " • "}
          {location}
        </p>
      )}

      {description && (
        <p className="text-sm mt-2">
          {description}
        </p>
      )}
    </div>
  );
})}
          </div>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <div>
            <h2
              className="text-xl font-bold mb-5 relative"
              style={{ color: "var(--primary-color)" }}
            >
              Education
              <span
                className="absolute left-0 -bottom-1 h-1 w-16"
                style={{ backgroundColor: "var(--primary-color)" }}
              />
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-lg">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-slate-500">
                    {edu.startDate} —{" "}
                    {edu.currentlyStudying
                      ? "Present"
                      : edu.endDate}
                  </p>
                </div>

                <p className="text-sm text-slate-600">
                  {edu.school}
                  {edu.school && edu.location && " • "}
                  {edu.location}
                </p>

                {edu.description && (
                  <p className="text-sm mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {skills.length > 0 && (
          <div>
            <h2
              className="text-xl font-bold mb-4 relative"
              style={{ color: "var(--primary-color)" }}
            >
              Skills
              <span
                className="absolute left-0 -bottom-1 h-1 w-16"
                style={{ backgroundColor: "var(--primary-color)" }}
              />
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 rounded-full border"
                  style={{
                    borderColor: "var(--primary-color)",
                    color: "var(--primary-color)",
                  }}
                >
                  {typeof skill === "string"
                    ? skill
                    : skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}