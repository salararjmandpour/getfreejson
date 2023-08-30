const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const apiKey = config.apiKey;
    const apiAddress = config.apiAddress;
    const city = req.query.city;
    const endPoint = `${apiAddress}?access_key=${apiKey}&query=${city}`;
    const response = await axios.get(endPoint);
    const weatherMessage = `Weather in ${city}: ${response.data.current.temperature}℃`;
    const weatherIconsURL = `URL Weather Icon: ${response.data.current.weather_icons}`;
    return res.status(200).json({ weatherMessage, weatherIconsURL });
  } catch (error) {
    console.error("Error fetching weather:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
};

module.exports = { getWeather };
