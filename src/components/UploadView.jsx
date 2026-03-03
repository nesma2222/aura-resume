import { UploadCloud, ArrowLeft } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";



pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

function UploadView({ onBack, setFormData, goToEditor }) {

  const extractEmail = (text) =>
    text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)?.[0] || "";

  const extractPhone = (text) =>
    text.match(/\+?\d[\d\s\-()]{8,15}/)?.[0] || "";


const splitName = (text) => {
  const words = text.trim().split(/\s+/);

  if (words.length >= 2) {
    return {
      firstName: words[0],
      lastName: words[1],
    };
  }

  return { firstName: "", lastName: "" };
};

const extractSection = (text, keywords) => {
  const allSections =
    "OBJECTIVE|EXPERIENCE|EDUCATION|SKILLS|PROJECTS|WORKSHOPS|ACHIEVEMENTS|LANGUAGES";

  const regex = new RegExp(
    `(${keywords})([\\s\\S]*?)(?=${allSections}|$)`,
    "i"
  );

  return text.match(regex)?.[2]?.trim() || "";
};

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = async function () {
      const typedarray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument(typedarray).promise;

      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();

        const pageText = textContent.items
          .map((item) => item.str)
          .join(" ");

        fullText += "\n" + pageText;
      }

      // -------- BASIC INFO --------
      const { firstName, lastName } = splitName(fullText);
      const email = extractEmail(fullText);
      const phone = extractPhone(fullText);

      // -------- SUMMARY --------
      const summary =
  extractSection(fullText, "Summary|Profile|Objective") || "";

      // -------- SKILLS --------
      const skillsText = extractSection(fullText, "Skills");
      const skills = skillsText
        .split(/,|\n|•|-/)
        .map((s) => s.trim())
        .filter((s) => s.length > 1);

       const languagesText = extractSection(fullText, "LANGUAGES");

const languages = languagesText
  ? languagesText
      .split(",")
      .map(l => l.trim())
      .filter(l => l.length > 1)
      .map(l => {
        const name = l.split("(")[0].trim();
        return { name, level: "" };
      })
  : [];



      // -------- EXPERIENCE --------
      const experienceText = extractSection(
        fullText,
        "Experience|Work Experience"
      );

      const experience = experienceText
        ? [
            {
              jobTitle: "",
              employer: "",
              location: "",
              startDate: "",
              endDate: "",
              description: experienceText,
            },
          ]
        : [];

      // -------- EDUCATION --------
     const educationText = extractSection(fullText, "Education|Academic Background|Qualifications");

const education = educationText
  ? [
      {
        school: "",
        degree: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        description: educationText,
      },
    ]
  : [];


  const projectsText = extractSection(fullText, "Projects|Personal Projects");

const customSections = [];

if (projectsText) {
  customSections.push({
    title: "Projects",
    description: projectsText,
  });
}

console.log({
  firstName,
  lastName,
  email,
  phone,
  education,
  experience,
});

setFormData({
  firstName: firstName || "",
  lastName: lastName || "",
  email: email || "",
  phone: phone || "",
  desiredJobTitle: "",
  country: "",
  city: "",
  address: "",
  postCode: "",
  linkedin: "",
  portfolio: "",
  experience: experience.length ? experience : [],
  education: education.length ? education : [],
  skills: skills.length ? skills : [],
  languages: languages.length ? languages : [],
  hobbies: [],
  certifications: "",
  summary: summary || "",
  customSections: customSections.length ? customSections : [],
});
      goToEditor();
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="max-w-7xl mx-auto px-12 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-peach-500 font-bold mb-12"
      >
        <ArrowLeft size={20} />
        Go Back
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-dashed border-peach-200 rounded-[40px] p-20 text-center shadow-xl flex flex-col items-center">
          
          <UploadCloud size={48} className="text-peach-500 mb-8" />

          <h2 className="text-3xl font-black text-slate-800 mb-4">
            Upload Resume (PDF)
          </h2>

          <input
            type="file"
            id="resumeUpload"
            className="hidden"
            accept=".pdf"
            onChange={handleFileUpload}
          />

          <label
            htmlFor="resumeUpload"
            className="cursor-pointer bg-peach-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-peach-600 transition"
          >
            Upload from device
          </label>
        </div>
      </div>
    </div>
  );
}

export default UploadView;