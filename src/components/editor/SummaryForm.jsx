export default function SummaryForm({ formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      summary: e.target.value,
    });
  };

  return (
    <textarea
      value={formData.summary}
      onChange={handleChange}
      className="w-full border rounded p-3"
      placeholder="Write your summary..."
    />
  );
}
