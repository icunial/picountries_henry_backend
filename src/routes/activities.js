const express = require("express");
const router = express.Router();

const Activity = require("../models/Activity");

const axios = require("axios");
const countriesController = require("../controllers/countries");

router.post("/", async (req, res, next) => {
  const { name, difficulty, duration, season, countries } = req.body;
});

module.exports = router;
