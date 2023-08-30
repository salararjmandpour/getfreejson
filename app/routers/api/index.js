const express = require("express");
const app = express();
const router = express.Router();

//!>-------------------- public route

const statesRouter = require("./v1/states");
router.use("/api/v1/states", statesRouter);


const citiesRouter = require("./v1/cities");
router.use("/api/v1/cities", citiesRouter);


const phoneCodeRouter = require("./v1/phoneCode");
router.use("/api/v1/phoneCode", phoneCodeRouter);


//*>---------- not found route

app.all("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "صفحه مورد نظر یافت نشد ):",
  });
  if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

app.use((err, req, res) => {
  res.sendStatus(500).send(err.message);
});

//*>---------------------- module export

module.exports = router;
