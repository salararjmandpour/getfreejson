const express = require("express");
const router = express.Router();

//*>---------- import tools

const getPhoneCode = require("app/http/tools/states");

//*>---------- create routers

router.get("/", getPhoneCode.getPhoneCode);

module.exports = router;
