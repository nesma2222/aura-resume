export default function ContactForm({ formData, setFormData }) {

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow border border-peach-100">

      <h2 className="text-xl font-bold mb-4 text-slate-700">
        Contact Details
      </h2>

      <div className="space-y-4">

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-peach-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-peach-300"
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-peach-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-peach-300"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-peach-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-peach-300"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-peach-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-peach-300"
        />

      </div>

    </div>
  );
}
