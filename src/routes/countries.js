const express = require("express");
const router = express.Router();

const countriesController = require("../controllers/countries");

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
