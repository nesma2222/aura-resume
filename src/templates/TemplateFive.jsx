export default function TemplateFive({ data = {} , designSettings = {} }) {
  const {
    firstName,
    lastName,
    email,
    phone,
    desiredJobTitle,
    experience = [],
    skills = [],
  } = data;

  const fullName = [firstName, lastName]
    .filter(Boolean)
    .join(" ");

      const {
    fontFamily = "",
    fontSize = "",
    lineSpacing = "",
    sectionSpacing = "space-y-6",
  } = designSettings;

     //  FIX URL FUNCTION (correct place)
  // const fixURL = (url) => {
  //   if (!url) return "";
  //   if (url.startsWith("http://") || url.startsWith("https://")) {
  //     return url;
  //   }
  //   return "https://" + url;
  // };

  
  return (
    <div
  className={`
    p-10
    ${fontFamily}
    ${fontSize}
    ${lineSpacing}
    ${sectionSpacing}
    text-slate-800
    max-w-4xl
    mx-auto
    bg-white
  `}
>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-light tracking-wide">
          {fullName || "John Doe"}
        </h1>

        {desiredJobTitle && (
          <p className="text-slate-500 mt-1">
            {desiredJobTitle}
          </p>
        )}

        {(email || phone) && (
          <p className="text-slate-500 mt-2">
            {email}
            {email && phone && " • "}
            {phone}
          </p>
        )}

        
      </div>

      <div className="space-y-8">

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <h2 className="uppercase tracking-widest text-xs text-slate-400 mb-3">
              Experience
            </h2>

            {experience.map((exp, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between">
                  <h4 className="font-medium">
                    {exp.jobTitle}
                  </h4>

                  <span className="text-slate-400 text-xs">
                    {exp.startDate} —{" "}
                    {exp.currentlyWorking
                      ? "Present"
                      : exp.endDate}
                  </span>
                </div>

                {exp.employer && (
                  <p className="text-slate-500 text-xs">
                    {exp.employer}
                  </p>
                )}

                {exp.description && (
                  <p className="mt-2">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="uppercase tracking-widest text-xs text-slate-400 mb-3">
              Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 rounded-full text-xs"
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