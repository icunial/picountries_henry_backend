const express = require("express");
const router = express.Router();

const Activity = require("../models/Activity");

const axios = require("axios");
const countriesController = require("../controllers/countries");

const validations = require("../utils/validations");

// Create a new Activity
router.post("/", async (req, res, next) => {
  const { name, difficulty, duration, season, countries } = req.body;

  // Validations -> body parameters
  if (validations.validateName(name)) {
    return res.status(400).json({
      statusCode: 400,
      msg: validations.validateName(name),
    });
  }

  if (validations.validateDifficulty(difficulty)) {
    return res.status(400).json({
      statusCode: 400,
      msg: validations.validateDifficulty(difficulty),
    });
  }

  if (validations.validateDuration(duration)) {
    return res.status(400).json({
      statusCode: 400,
      msg: validations.validateDuration(duration),
    });
  }

  if (validations.validateSeason(season)) {
    return res.status(400).json({
      statusCode: 400,
      msg: validations.validateSeason(season),
    });
  }

  try {
    const activityCreated = await Activity.create({
      name,
      difficulty,
      duration,
      season: season.toUpperCase(),
    });

    if (activityCreated) {
      return res.status(201).json({
        statusCode: 201,
        data: activityCreated,
      });
    }
  } catch (error) {
    return next(new Error("Error trying to create a new activity!"));
  }
});

module.exports = router;
