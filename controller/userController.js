const userModel = require("../model/userModel");

class userController {
  // get all data users
  static getAllDataUsers = async (req, res, next) => {
    try {
      const result = await userModel.getUsers(next);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  // get data user by id
  static getDataUserById = async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await userModel.getUserById(id, next);

      if (!result) {
        next({ name: "notFound" });
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      next(error);
    }
  };

  // add data user
  static addDataUser = async (req, res, next) => {
    const userData = req.body;

    try {
      const result = await userModel.addUser(userData, next);

      res.status(201).json({
        result,
        message: "Data added...",
      });
    } catch (error) {
      next(error);
    }
  };

  // update data user
  static updateDataUser = async (req, res, next) => {
    const id = req.params.id;
    const userData = req.body;

    try {
      const result = await userModel.updateUser(id, userData, next);

      res.status(200).json({ message: "Data updated..." });
    } catch (error) {
      next(error);
    }
  };

  // delete data user
  static deleteDataUser = async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await userModel.deleteUser(id, next);

      res.status(200).json({ message: "Data deleted..." });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userController;
