export function calculateResumeScore(data) {
  let score = 0;

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  /* ================= CONTACT SECTION (30) ================= */
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
  if (data?.desiredJobTitle?.trim()) {
    score += 5;
  }

  /* ================= SUMMARY (10) ================= */
  if (data?.summary?.trim() && data.summary.trim().length > 40) {
    score += 10;
  }

  /* ================= EXPERIENCE (25) ================= */
  

const hasExperience =
  data?.experience?.length > 0 &&
  data.experience.some(
    (exp) =>
      exp?.jobTitle?.trim() &&
      exp?.employer?.trim()
  );

if (hasExperience) {
  score += 15;

  const detailedExperience = data.experience.some(
    (exp) =>
      exp?.jobTitle?.trim() &&
      exp?.employer?.trim() &&
      exp?.description?.trim() &&
      exp.description.trim().length > 40
  );

  if (detailedExperience) score += 10;
} else {
  // No experience? Reward strong education + summary instead

  if (data?.summary?.trim() && data.summary.trim().length > 80) {
    score += 10;
  }

  if (
    data?.education?.length > 0 &&
    data.education.some(
      (edu) => edu?.degree?.trim() && edu?.school?.trim()
    )
  ) {
    score += 10;
  }

  if (data?.skills?.length >= 5) {
    score += 5;
  }
}

  /* ================= EDUCATION (15) ================= */
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
  if (data?.skills?.length >= 3) {
    score += 15;
  }

  // Cap at 100
  return Math.min(score, 100);
}