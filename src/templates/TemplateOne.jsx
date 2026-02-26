export default function TemplateOne({ data }) {
  return (
    <div className="space-y-4">

      {/* Name */}
      <h1 className="text-2xl font-bold text-center">
        {data.firstName} {data.lastName}
      </h1>

      {/* Desired Job Title */}
      {data.desiredJobTitle && (
        <p className="text-center text-sm text-gray-600">
          {data.desiredJobTitle}
        </p>
      )}

      {/* Contact */}
      <div className="text-center text-sm text-gray-600">
        {data.email && <p>{data.email}</p>}
        {data.phone && <p>{data.phone}</p>}

        {/* Address + Country with comma */}
        {(data.address || data.country) && (
          <p>
            {data.address}
            {data.address && data.country && ", "}
            {data.city},
            {data.postCode},
            {data.country}
            
          </p>
        )}        

       {/* ✅ LinkedIn */}
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

{/* ✅ Portfolio */}
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


      

      {/* Experience Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Experience</h2>

        {(data.experience || []).map((exp, index) => (
          <div key={index} className="mb-4">

            <h4 className="font-semibold">{exp.jobTitle}</h4>

            <p className="text-sm text-gray-500">
              {exp.employer}
              {exp.employer && exp.location && " • "}
              {exp.location}
            </p>

            <p className="text-sm text-gray-400">
              {exp.startDate} — {exp.endDate}
            </p>

            <p className="text-sm">{exp.description}</p>

          </div>
        ))}

      </div>

      {/* ✅ Education Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Education</h2>

        {(data.education || []).map((edu, index) => (
          <div key={index} className="mb-4">

            <h4 className="font-semibold">{edu.degree}</h4>

            <p className="text-sm text-gray-500">
              {edu.school} • {edu.location}
            </p>

            <p className="text-sm text-gray-400">
              {edu.startDate} — {edu.endDate}
            </p>

            <p className="text-sm">{edu.description}</p>

          </div>
        ))}
      </div>

        {/* ✅ Skills Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Skills</h2>

        <ul className="list-disc list-inside text-sm">
          {(data.skills || []).map((skill, index) => (
            <li key={index}>
              {typeof skill === "string" ? skill : skill.name}
            </li>
          ))}
        </ul>
      </div>

         {data.certifications && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Certifications</h2>
          <p className="text-sm whitespace-pre-line">
            {data.certifications}
          </p>
        </div>
      )}

       {/* ✅ Hobbies Section */}
      {(data.hobbies && data.hobbies.length > 0) && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Hobbies</h2>

          <ul className="list-disc list-inside text-sm">
            {data.hobbies.map((hobby, index) => (
              <li key={index}>
                {typeof hobby === "string" ? hobby : hobby.name}
              </li>
            ))}
          </ul>
        </div>
      )}

            {/* ✅ Custom Sections */}
      {(data.customSections && data.customSections.length > 0) &&
        data.customSections.map((section, index) => (
          section.title && (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-2">
                {section.title}
              </h2>
              <p className="text-sm whitespace-pre-line">
                {section.description}
              </p>
            </div>
          )
        ))
      }


        {/* ✅ Languages Section */}
      {(data.languages && data.languages.length > 0) && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Languages</h2>

          <ul className="text-sm space-y-1">
            {data.languages.map((lang, index) => (
              <li key={index}>
                <span className="font-medium">{lang.name}</span>
                {lang.level && ` — ${lang.level}`}
              </li>
            ))}
          </ul>
        </div>
      )}

         {/* SUMMARY */}
      {data.summary && (
        <div>
          <h2 className="text-lg font-semibold mb-2 text-left">
            Summary
          </h2>
          <p className="text-sm text-left">{data.summary}</p>
        </div>
      )}




    </div>
  );
}
