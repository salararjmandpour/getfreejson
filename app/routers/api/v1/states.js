const express = require("express");
const router = express.Router();

//*>---------- import tools

const getStates = require("app/http/tools/states");

//*>---------- create routers

router.get("/", getStates.getStates);

module.exports = router;
