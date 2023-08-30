const express = require("express");
const router = express.Router();

//*>---------- import tools

const getWeather = require("app/http/tools/getWeather");

//*>---------- create routers

router.get("/", getWeather.getWeather);

module.exports = router;
