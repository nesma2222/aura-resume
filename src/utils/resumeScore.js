export function calculateResumeScore(data) {
  let score = 0;

  /* CONTACT SECTION (30 marks) */
  if (data?.firstName && data?.lastName) score += 10;
  if (data?.email && data.email.includes("@")) score += 10;
  if (data?.phone && data.phone.length >= 8) score += 10;

  /* JOB TITLE (5 marks) */
  if (data?.desiredJobTitle) score += 5;

  /* SUMMARY (10 marks) */
  if (data?.summary && data.summary.length > 40) {
    score += 10;
  }

  /* EXPERIENCE (25 marks) */
  if (data?.experience?.length > 0) {
    score += 15;

    const detailedExperience = data.experience.some(
      exp =>
        exp?.jobTitle &&
        exp?.employer &&
        exp?.description &&
        exp.description.length > 40
    );

    if (detailedExperience) score += 10;
  }

  /* EDUCATION (15 marks) */
  if (data?.education?.length > 0) {
    const validEducation = data.education.some(
      edu => edu?.degree && edu?.institution
    );

    if (validEducation) score += 15;
  }

  /* SKILLS (15 marks) */
  if (data?.skills?.length >= 3) {
    score += 15;
  }

  return Math.min(score, 100);
}
