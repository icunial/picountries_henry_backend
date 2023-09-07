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

module.exports = {
  validateName,
};
