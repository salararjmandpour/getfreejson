const express = require("express");
const router = express.Router();

//*>---------- import tools

const getUni = require("app/http/tools/listUni");

//*>---------- create routers

router.get("/", getUni.getAllUni);

module.exports = router;
