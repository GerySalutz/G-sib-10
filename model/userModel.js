const pool = require("../config/config");

class userModel {
  // Get semua data user
  static getUsers = async (next) => {
    const findQuery = "SELECT * FROM users";

    try {
      const result = await pool.query(findQuery);

      return result.rows;
    } catch (error) {
      next(error);
    }
  };

  // Get data user by id
  static getUserById = async (id, next) => {
    const findQuery = "SELECT * FROM users WHERE id = $1";

    try {
      const result = await pool.query(findQuery, [id]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static addUser = async (userData, next) => {
    const { id, email, gender, password, role } = userData;

    const findQuery =
      "INSERT INTO users (id, email, gender, password, role) VALUES($1, $2, $3, $4, $5)";

    try {
      const result = await pool.query(findQuery, [
        id,
        email,
        gender,
        password,
        role,
      ]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static updateUser = async (id, userData, next) => {
    const { email, gender, password, role } = userData;

    if (!email || !gender || !password || !role) {
      return next({
        name: "requestBodyError",
      });
    }

    const findQuery =
      "UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = $5";

    try {
      const result = await pool.query(findQuery, [
        email,
        gender,
        password,
        role,
        id,
      ]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (id, next) => {
    const findQuery = "DELETE FROM users WHERE id = $1";

    try {
      const result = await pool.query(findQuery, [id]);

      return result.rows[0];
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userModel;
