const express = require("express");
const router = express.Router();

const countriesRoutes = require("./countries");

// Specify router root route
router.use("/countries", countriesRoutes);

module.exports = router;
