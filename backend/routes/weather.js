const express = require("express");
const router = express.Router();
const { getWeatherByCity } = require("../controllers/weatherController");

router.get("/:city", getWeatherByCity);

module.exports = router;