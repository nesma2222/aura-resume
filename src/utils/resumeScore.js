export function calculateResumeScore(data) {
  let score = 0;
  let maxScore = 0;

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  /* ================= CONTACT SECTION (30) ================= */
  maxScore += 30;

  if (data?.firstName?.trim() && data?.lastName?.trim()) {
    score += 10;
  }

  if (data?.email && emailRegex.test(data.email.trim())) {
    score += 10;
  }

  const phoneDigits = data?.phone?.replace(/\D/g, "");
  if (phoneDigits && phoneDigits.length >= 8) {
    score += 10;
  }

  /* ================= JOB TITLE (5) ================= */
  maxScore += 5;
  if (data?.desiredJobTitle?.trim()) {
    score += 5;
  }

  /* ================= SUMMARY (OPTIONAL - 10) ================= */
  if (data?.summary?.trim()) {
    maxScore += 10;

    if (data.summary.trim().length > 40) {
      score += 10;
    }
  }

  /* ================= EXPERIENCE (OPTIONAL - 25) ================= */
  const hasExperience =
    data?.experience?.length > 0 &&
    data.experience.some(
      (exp) =>
        exp?.jobTitle?.trim() ||
        exp?.employer?.trim() ||
        exp?.description?.trim()
    );

  if (hasExperience) {
    maxScore += 25;

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

  /* ================= EDUCATION (15) ================= */
  maxScore += 15;

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

  /* ================= SKILLS (15) ================= */
  maxScore += 15;

  if (data?.skills?.length >= 3) {
    score += 15;
  }

  // Normalize to 100
  const finalScore =
    maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  return finalScore;
}