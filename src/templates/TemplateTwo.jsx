export default function TemplateTwo({ data }) {

  return (
    <div className="bg-peach-50 p-6 rounded-xl">

      <h1 className="text-xl font-bold text-peach-600">
        {data.firstName} {data.lastName}
      </h1>

      <p>{data.email}</p>
      <p>{data.phone}</p>

      <hr className="my-4" />

      {/* ✅ Experience Section FIXED */}
      {(data.experience || []).map((exp, index) => (
        <div key={index} className="mb-3">
          <p className="font-semibold">{exp.jobTitle}</p>

          <p className="text-sm text-gray-600">
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
  );
}
