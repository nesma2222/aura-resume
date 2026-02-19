import { useState } from "react";
import LanguagesSection from "./LanguagesSection";
import CertificationsSection from "./CertificationsSection";
import HobbiesSection from "./HobbiesSection";
import CustomSection from "./CustomSection";

export default function Finalize({ formData, setFormData }) {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>

      <h2 className="text-2xl font-semibold mb-2">
        Additional Sections
      </h2>

      <p className="text-gray-500 mb-6">
        Add certifications, languages, awards, or extra details.
      </p>

      <LanguagesSection
        formData={formData}
        setFormData={setFormData}
        openSection={openSection}
        toggleSection={toggleSection}
      />

      <CertificationsSection
        formData={formData}
        setFormData={setFormData}
        openSection={openSection}
        toggleSection={toggleSection}
      />

<HobbiesSection
  formData={formData}
  setFormData={setFormData}
  openSection={openSection}
  toggleSection={toggleSection}
/>

<CustomSection
  formData={formData}
  setFormData={setFormData}
  openSection={openSection}
  toggleSection={toggleSection}
/>

    </div>



  );
}
