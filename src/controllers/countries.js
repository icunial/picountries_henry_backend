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
          population: r.population,
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

// Get countries by their name from API
const findByNameApi = async (name) => {
  try {
    const apiResults = await getAllApi();

    return apiResults.filter((r) =>
      r.name.toUpperCase().startsWith(name.toUpperCase())
    );
  } catch (error) {
    throw new Error("Error trying to get a country by its name from API");
  }
};

// Get countries ordered from A to Z from API
const orderCountriesFromAtoZ = async () => {
  try {
    const apiResults = await getAllApi();

    return apiResults.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  } catch (error) {
    throw new Error("Error trying to order countries from A to Z from API");
  }
};

// Get countries ordered from Z to A from API
const orderCountriesFromZtoA = async () => {
  try {
    const apiResults = await getAllApi();

    return apiResults.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  } catch (error) {
    throw new Error("Error trying to order countries from Z to A from API");
  }
};

// Get countries ordered from more population to less from API
const orderCountriesFromMoreToLess = async () => {
  try {
    const apiResults = await getAllApi();

    return apiResults.sort((a, b) => {
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    });
  } catch (error) {
    throw new Error(
      "Error trying to order countries from more population to less from API"
    );
  }
};

module.exports = {
  getAllApi,
  findCountryByIdApi,
  findByNameApi,
  orderCountriesFromAtoZ,
  orderCountriesFromZtoA,
  orderCountriesFromMoreToLess,
};
