const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const movieRouter = require("./movies");
const uploadRouter = require("./upload");

router.get("/test", (req, res) => {
  res.send("Test route");
});

router.use("/", uploadRouter);
router.use("/users", userRouter);
router.use("/movies", movieRouter);

module.exports = router;
