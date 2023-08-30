const express = require("express");
const router = express.Router();

//*>---------- import tools

const getCountry = require("app/http/tools/timeZones");

//*>---------- create routers

router.get("/", getCountry.getTimeZones);

module.exports = router;
