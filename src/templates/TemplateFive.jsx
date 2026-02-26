export default function TemplateFive({ data }) {
  return (
    <div className="p-10 font-sans text-sm text-slate-800">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-light tracking-wide">
          {data.firstName} {data.lastName}
        </h1>
        <p className="text-slate-500 mt-2">
          {data.email} • {data.phone}
        </p>
      </div>

      <div className="space-y-8">

        <div>
          <h2 className="uppercase tracking-widest text-xs text-slate-400 mb-3">
            Experience
          </h2>

          {(data.experience || []).map((exp, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between">
                <h4 className="font-medium">{exp.jobTitle}</h4>
                <span className="text-slate-400 text-xs">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="text-slate-500 text-xs">{exp.employer}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="uppercase tracking-widest text-xs text-slate-400 mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {(data.skills || []).map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 rounded-full text-xs"
              >
                {typeof skill === "string" ? skill : skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

