const express = require("express");
const router = express.Router();
const movieController = require("../controller/movieController");

router.get("/", movieController.getAllDataMovies);
router.get("/:id", movieController.getDataMovieById);
router.post("/", movieController.addDataMovie);
router.put("/:id", movieController.updateDataMovie);
router.delete("/:id", movieController.deleteDataMovie);

module.exports = router;
