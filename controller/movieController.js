const movieModel = require("../model/movieModel");

class movieController {
  // get all data movies
  static getAllDataMovies = async (req, res, next) => {
    try {
      const result = await movieModel.getMovies(next);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  // get data movie by id
  static getDataMovieById = async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await movieModel.getMovieById(id, next);

      if (!result) {
        next({ name: "notFound" });
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      next(error);
    }
  };

  // add data movie
  static addDataMovie = async (req, res, next) => {
    const movieData = req.body;

    try {
      const result = await movieModel.addMovie(movieData, next);

      res.status(201).json({
        result,
        message: "Data added...",
      });
    } catch (error) {
      next(error);
    }
  };

  // update data movie
  static updateDataMovie = async (req, res, next) => {
    const id = req.params.id;
    const movieData = req.body;

    try {
      const result = await movieModel.updateMovie(id, movieData, next);

      res.status(200).json({ message: "Data updated..." });
    } catch (error) {
      next(error);
    }
  };

  // delete data movie
  static deleteDataMovie = async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await movieModel.deleteMovie(id, next);

      res.status(200).json({ message: "Data deleted..." });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = movieController;
