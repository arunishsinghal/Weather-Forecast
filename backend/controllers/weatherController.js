const axios = require("axios");

exports.getWeatherByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: city,
          days: 5
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching weather data"
    });
  }
};