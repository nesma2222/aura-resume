import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ContactForm({ formData, setFormData }) {
  const [showAdditional, setShowAdditional] = useState(false);
  const [emailError, setEmailError] = useState("");


  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e?.target || {};
    if (!name) return;

    let updatedValue = value;

    updatedValue = updatedValue.trimStart();

    
    if (name === "email") {
      updatedValue = updatedValue.toLowerCase();

      if (updatedValue === "") {
        setEmailError("");
      } else if (!validateEmail(updatedValue)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        Add your up-to-date contact information so employers and recruiters can easily reach you.
      </p>

      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            First Name
          </label>
          <input
            name="firstName"
            placeholder="First name"
            value={formData?.firstName || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Last Name
          </label>
          <input
            name="lastName"
            placeholder="Last name"
            value={formData?.lastName || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
      </div>

      {/* Desired Job Title */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-1">
          Desired Job Title
        </label>
        <input
          name="desiredJobTitle"
          placeholder="Desired job title"
          value={formData?.desiredJobTitle || ""}
          onChange={handleChange}
          className="inputStyle"
        />
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Phone
          </label>
          <input
            name="phone"
            placeholder="Phone"
            value={formData?.phone || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Email
          </label>
          <input
            name="email"
            placeholder="Email"
            value={formData?.email || ""}
            onChange={handleChange}
            className={`inputStyle ${
              emailError ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
        </div>
      </div>

      {/* Country + City */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Country
          </label>
          <input
            name="country"
            placeholder="Country"
            value={formData?.country || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            City
          </label>
          <input
            name="city"
            placeholder="City"
            value={formData?.city || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
      </div>

      {/* Address + Post Code */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Address
          </label>
          <input
            name="address"
            placeholder="Address"
            value={formData?.address || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Post Code
          </label>
          <input
            name="postCode"
            placeholder="Post code"
            value={formData?.postCode || ""}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
      </div>

      {/* Additional Information Toggle */}
      <div
        onClick={() => setShowAdditional(!showAdditional)}
        className="flex items-center justify-between cursor-pointer text-peach-500 font-medium"
      >
        Additional Information
        {showAdditional ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {/* Additional Fields */}
      {showAdditional && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              LinkedIn URL
            </label>
            <input
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData?.linkedin || ""}
              onChange={handleChange}
              className="inputStyle"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Portfolio URL
            </label>
            <input
              name="portfolio"
              placeholder="Portfolio URL"
              value={formData?.portfolio || ""}
              onChange={handleChange}
              className="inputStyle"
            />
          </div>
        </div>
      )}
    </div>
  );
}