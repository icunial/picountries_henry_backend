const express = require("express");
const router = express.Router();

const countriesController = require("../controllers/countries");

// Get country by its id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const apiResults = await countriesController.findCountryByIdApi(id);

    if (!apiResults.length) {
      return res.status(404).json({
        statusCode: 404,
        msg: `Country with ID: ${id} not found!`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      data: apiResults,
    });
  } catch (error) {
    return next(error);
  }
});

// GET all countries
router.get("/", async (req, res, next) => {
  const { name, page } = req.query;

  try {
    // Search country by its name
    if (name) {
      const apiResults = await countriesController.findByNameApi(name);

      if (!apiResults.length) {
        return res.status(404).json({
          statusCode: 404,
          msg: `Country with name ${name} not found`,
        });
      }

      return res.status(200).json({
        statusCode: 200,
        data: apiResults,
      });
    }

    const apiResults = await countriesController.getAllApi();

    if (page) {
      // Validates if its a number
      if (page !== 0 && !parseInt(page)) {
        return res.status(400).json({
          statusCode: 400,
          msg: `Page param must be a number!`,
        });
      }

      const totalPages = Math.ceil((apiResults.length - 9) / 10 + 1);

      // Validates if page exists
      if (parseInt(page) === 0 || parseInt(page) > totalPages) {
        return res.status(404).json({
          statusCode: 404,
          msg: `Page ${page} not found!`,
        });
      }
    }

    if (!page || parseInt(page) === 1) {
      return res.status(200).json({
        statusCode: 200,
        resultsPerPage: apiResults.slice(0, 9).length,
        totalResults: apiResults.length,
        totalPages: Math.ceil((apiResults.length - 9) / 10 + 1),
        page: 1,
        data: apiResults.slice(0, 9),
      });
    }

    res.status(200).json({
      statusCode: 200,
      resultsPerPage: countriesController.getCountriesPagination(
        apiResults,
        parseInt(page)
      ).length,
      totalResults: apiResults.length,
      totalPages: Math.ceil((apiResults.length - 9) / 10 + 1),
      page: parseInt(page),
      data: countriesController.getCountriesPagination(
        apiResults,
        parseInt(page)
      ),
    });
  } catch (error) {
    return next(error);
  }
});

// Order features routes
router.get("/filter/:opt", async (req, res, next) => {
  const { opt } = req.params;

  try {
    let results = [];

    switch (opt) {
      case "az":
        results = await countriesController.orderCountriesFromAtoZ();
        break;
      case "za":
        results = await countriesController.orderCountriesFromZtoA();
        break;
      case "more":
        results = await countriesController.orderCountriesFromMoreToLess();
        break;
      case "less":
        results = await countriesController.orderCountriesFromLessToMore();
        break;
      default:
        return res.status(400).json({
          statusCode: 400,
          msg: `Filter not available`,
        });
    }

    res.status(200).json({
      statusCode: 200,
      data: results,
    });
  } catch (error) {
    return next(error);
  }
});

// GET countries filterd by region
router.get("/region/:region", async (req, res, next) => {
  const { region } = req.params;

  try {
    const apiResults = await countriesController.countriesFilteredByRegion(
      region
    );

    if (!apiResults.length) {
      return res.status(404).json({
        statusCode: 404,
        msg: `Region ${region} not found!`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      data: apiResults,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
