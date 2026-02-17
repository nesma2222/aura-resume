export default function TemplateTwo({ data }) {

  const fullName = [data?.firstName, data?.lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="bg-peach-50 p-6 rounded-xl">

      <h1 className="text-xl font-bold text-peach-600">
        {fullName || "Your Name"}
      </h1>

      {data?.email && <p>{data.email}</p>}
      {data?.phone && <p>{data.phone}</p>}

      <hr className="my-4" />

      {/* Experience Section */}
      {(data?.experience || []).map((exp, index) => (
        <div key={index} className="mb-3">

          {exp?.jobTitle && (
            <p className="font-semibold">{exp.jobTitle}</p>
          )}

          <p className="text-sm text-gray-600">
            {exp?.employer}
            {exp?.employer && exp?.location && " • "}
            {exp?.location}
          </p>

          <p className="text-sm text-gray-400">
            {exp?.startDate} — {exp?.endDate}
          </p>

          {exp?.description && (
            <p className="text-sm">{exp.description}</p>
          )}

        </div>
      ))}

    </div>
  );
}
