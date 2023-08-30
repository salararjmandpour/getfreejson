require("app-module-path").addPath(__dirname);
const app = require("./app/index");
require("dotenv").config();
global.config = require("./app/config");

//>---------------------- Start App

new app();
