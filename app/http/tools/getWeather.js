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
    const weatherMessage = `Weather in ${city}: ${response.data.current.temperature}℃`;
    const weatherIconsURL = `URL Weather Icon: ${response.data.current.weather_icons}`;

    //*>---------- Send the response
    return res.status(200).json({ weatherMessage, weatherIconsURL });
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
