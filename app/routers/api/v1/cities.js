const express = require("express");
const router = express.Router();

//*>---------- import tools

const getCities = require("app/http/tools/states");

//*>---------- create routers

router.get("/", getCities.getCities);

module.exports = router;
