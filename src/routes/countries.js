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
  try {
    const apiResults = await countriesController.getAllApi();

    res.status(200).json({
      statusCode: 200,
      data: apiResults,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
