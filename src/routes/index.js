const express = require("express");
const router = express.Router();

const countriesRouter = require("./countries");
const activitiesRouter = require("./activities");

// Specify router root route
router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
