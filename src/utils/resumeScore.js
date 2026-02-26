export function calculateResumeScore(data) {
  let score = 0;


  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  /* ================= CONTACT SECTION (30 marks) ================= */

  // Full Name
  if (
    data?.firstName?.trim() &&
    data?.lastName?.trim()
  ) {
    score += 10;
  }

  // Valid Email
  if (
    data?.email &&
    emailRegex.test(data.email.trim())
  ) {
    score += 10;
  }

  // Valid Phone (digits only, min 8 numbers)
  const phoneDigits = data?.phone?.replace(/\D/g, "");
  if (phoneDigits && phoneDigits.length >= 8) {
    score += 10;
  }

  /* ================= JOB TITLE (5 marks) ================= */

  if (data?.desiredJobTitle?.trim()) {
    score += 5;
  }

  /* ================= SUMMARY (10 marks) ================= */

  if (
    data?.summary &&
    data.summary.trim().length > 40
  ) {
    score += 10;
  }

  /* ================= EXPERIENCE (25 marks) ================= */

  if (data?.experience?.length > 0) {

    const hasBasicExperience = data.experience.some(
      (exp) =>
        exp?.jobTitle?.trim() ||
        exp?.employer?.trim() ||
        exp?.description?.trim()
    );

    if (hasBasicExperience) {
      score += 15;

      const detailedExperience = data.experience.some(
        (exp) =>
          exp?.jobTitle?.trim() &&
          exp?.employer?.trim() &&
          exp?.description?.trim() &&
          exp.description.trim().length > 40
      );

      if (detailedExperience) score += 10;
    }
  }

  /* ================= EDUCATION (15 marks) ================= */

  if (data?.education?.length > 0) {
    const validEducation = data.education.some(
      (edu) =>
        edu?.degree?.trim() &&
        edu?.school?.trim()
    );

    if (validEducation) {
      score += 15;
    }
  }

  /* ================= SKILLS (15 marks) ================= */

  if (data?.skills?.length >= 3) {
    score += 15;
  }

  return Math.min(score, 100);
}