export default function TemplateSix({ data = {}, designSettings = {} }) {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    country,
    summary,
    experience = [],
    education = [],
    skills = [],
  } = data;

  const {
  fontFamily = "",
  fontSize = "",
  lineSpacing = "",
  sectionSpacing = "space-y-6",
} = designSettings;

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  return (
    <div
  className={`
    p-10
    ${fontFamily}
    ${fontSize}
    ${lineSpacing}
    ${sectionSpacing}
    text-black
    max-w-4xl
    mx-auto
    bg-white
  `}
>

      <h1 className="text-2xl font-bold">
        {fullName || "John Doe"}
      </h1>

      <p className="mt-1">
        {email} {email && phone && " | "} {phone}
      </p>
      <p>{city} {city && country && ","} {country}</p>

      <hr className="my-4" />

      {summary && (
        <>
          <h2 className="font-bold">Professional Summary</h2>
          <p className="mb-4">{summary}</p>
        </>
      )}

      {experience.length > 0 && (
        <>
          <h2 className="font-bold">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <strong>{exp.jobTitle}</strong>
              <p>{exp.employer}</p>
              <p>{exp.startDate} — {exp.currentlyWorking ? "Present" : exp.endDate}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </>
      )}

      {education.length > 0 && (
        <>
          <h2 className="font-bold mt-4">Education</h2>
          {education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.degree}</strong>
              <p>{edu.school}</p>
              <p>{edu.startDate} — {edu.endDate}</p>
            </div>
          ))}
        </>
      )}

      {skills.length > 0 && (
        <>
          <h2 className="font-bold mt-4">Skills</h2>
          <p>{skills.map(s => typeof s === "string" ? s : s.name).join(", ")}</p>
        </>
      )}
    </div>
  );
}