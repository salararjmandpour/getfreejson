const axios = require("axios");

//*>---------- get weather method

const getWeather = async (req, res) => {
  try {
    const apiKey = config.apiKey;
    const apiAddress = config.apiAddress;
    const city = req.query.city;
    const endPoint = `${apiAddress}?access_key=${apiKey}&query=${city}`;

    //*>---------- Properly construct the response message

    const response = await axios.get(endPoint);
    const weatherTemperature = `${response.data.current.temperature}℃`;
    const weatherIconsURL = response.data.current.weather_icons;
    const weatherLocation = {
      name: response.data.location.name,
      country: response.data.location.country,
      region: response.data.location.region,
      lat: response.data.location.lat,
      lon: response.data.location.lon,
      timezone_id: response.data.location.timezone_id,
    };

    //*>---------- Send the response
    return res
      .status(200)
      .json({ weatherTemperature, weatherIconsURL, weatherLocation });
  } catch (error) {
    //*>---------- Handle errors here
    console.error("Error fetching weather:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
};

//*>---------- Export the method

module.exports = { getWeather };
