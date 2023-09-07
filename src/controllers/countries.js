const axios = require("axios");

const API_URL = "https://restcountries.com/v3/all";

// Get all countries from API
const getAllApi = async () => {
  const results = [];
  try {
    const apiResults = await axios.get(API_URL);
    if (apiResults) {
      apiResults.data.forEach((r) => {
        results.push({
          name: r.name.common,
          region: r.region,
          flag: r.flags[1],
        });
      });
    }
    return results;
  } catch (error) {
    console.log(error.message);
    throw new Error("Error trying to get all countries from API");
  }
};

module.exports = {
  getAllApi,
};
