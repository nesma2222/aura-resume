import { DESIGN_OPTIONS } from "../../config/designOptions";

export default function DesignPanel({
  designSettings,
  setDesignSettings,
}) {
  const updateSetting = (key, value) => {
    setDesignSettings({
      ...designSettings,
      [key]: value,
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">
        Design & Formatting
      </h2>

      {Object.entries(DESIGN_OPTIONS).map(
        ([key, options]) => (
          <div key={key} className="mb-6">
            <label className="block font-medium mb-2 capitalize">
              {key}
            </label>

            <select
              value={designSettings[key]}
              onChange={(e) =>
                updateSetting(key, e.target.value)
              }
              className="w-full border rounded-lg p-2"
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )
      )}
    </div>
  );
}