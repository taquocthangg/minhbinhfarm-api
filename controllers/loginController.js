const { login } = require("../model/model");

const loginController = {
  //ADD login
  addlogin: async (req, res) => {
    try {
      const newlogin = new login(req.body);
      const savedlogin = await newlogin.save();
      res.status(200).json(savedlogin);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL loginS
  getAlllogins: async (req, res) => {
    try {
      const logins = await login.find();
      res.status(200).json(logins);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN login
  getAnlogin: async (req, res) => {
    try {
      const login = await login.findById(req.params.id).populate("books");
      res.status(200).json(login);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE login
  updatelogin: async (req, res) => {
    try {
      const login = await login.findById(req.params.id);
      await login.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE login
  deletelogin: async (req, res) => {
    try {
      await Book.updateMany({ login: req.params.id }, { login: null });
      await login.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = loginController;
