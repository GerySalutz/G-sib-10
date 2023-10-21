const pool = require("../config/config");

class movieModel {
  // Get semua data user
  static getMovies = async (next) => {
    const findQuery = "SELECT * FROM movies";

    try {
      const result = await pool.query(findQuery);

      return result.rows;
    } catch (error) {
      next(error);
    }
  };

  // Get data user by id
  static getMovieById = async (id, next) => {
    const findQuery = "SELECT * FROM movies WHERE id = $1";

    try {
      const result = await pool.query(findQuery, [id]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static addMovie = async (userData, next) => {
    const { id, title, genres, year, photo } = userData;

    const findQuery =
      "INSERT INTO movies (id, title, genres, year, photo) VALUES($1, $2, $3, $4, $5)";

    try {
      const result = await pool.query(findQuery, [
        id,
        title,
        genres,
        year,
        photo,
      ]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static updateMovie = async (id, userData, next) => {
    const { title, genres, year, photo } = userData;

    if (!title || !genres || !year || !photo) {
      return next({
        name: "requestBodyError",
      });
    }

    const findQuery =
      "UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE id = $5";

    try {
      const result = await pool.query(findQuery, [
        title,
        genres,
        year,
        photo,
        id,
      ]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = async (id, next) => {
    const findQuery = "DELETE FROM movies WHERE id = $1";

    try {
      const result = await pool.query(findQuery, [id]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };
}

module.exports = movieModel;
