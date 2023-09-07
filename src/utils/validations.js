// validates name
const validateName = (name) => {
  if (!name) return "Name parameter is missing";
  if (typeof name !== "string") return "Name must be a string!";
  return false;
};

// validates difficulty
const validateDifficulty = (difficulty) => {
  if (!difficulty) return "Difficulty parameter is missing";
  if (typeof difficulty !== "number") return "Difficulty must be a number!";
  if (difficulty < 1 || difficulty > 5) {
    return "Difficulty must be between 1 and 5";
  }

  return false;
};

// validates duration
const validateDuration = (duration) => {
  if (!duration) return "Duration parameter is missing";
  if (typeof duration !== "number") return "Duration must be a number!";
  return false;
};

// validates season
const validateSeason = (season) => {
  if (!season) return "Season parameter is missing";
  if (typeof season !== "string") return "Season must be a string!";
  if (
    season.toLowerCase() !== "autumn" &&
    season.toLowerCase() !== "winter" &&
    season.toLowerCase() !== "spring" &&
    season.toLowerCase() !== "summer"
  ) {
    return "Season must be AUTUMN, WINTER, SPRING or SUMMER";
  }
  return false;
};

module.exports = {
  validateName,
  validateDifficulty,
  validateDuration,
  validateSeason,
};
