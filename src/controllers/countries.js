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

// Get country by its id from API
const findCountryByIdApi = async (id) => {
  const result = [];

  try {
    const apiResults = await axios.get(API_URL);

    if (apiResults) {
      apiResults.data.forEach((r) => {
        if (r.cca3 === id.toUpperCase()) {
          result.push({
            id: r.cc3,
            name: r.name.common,
            region: r.region,
            flag: r.flags[1],
            capital: r.capital[0],
            subregion: r.subregion,
            area: r.area,
            population: r.population,
          });
        }
      });
    }
    return result;
  } catch (error) {
    throw new Error("Error finding a country by its ID from API");
  }
};

module.exports = {
  getAllApi,
  findCountryByIdApi,
};
