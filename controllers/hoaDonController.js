const { hoaDon } = require("../model/model");

const hoaDonController = {
  //ADD hoaDon
  addhoaDon: async (req, res) => {
    try {
      const newhoaDon = new hoaDon(req.body);
      const savedhoaDon = await newhoaDon.save();
      res.status(200).json(savedhoaDon);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL hoaDonS
  getAllhoaDons: async (req, res) => {
    try {
      const hoaDons = await hoaDon.find();
      res.status(200).json(hoaDons);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN hoaDon
  getAnhoaDon: async (req, res) => {
    try {
      const hoadon = await hoaDon.findById(req.params.id);
      res.status(200).json(hoadon);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE hoaDon


  //DELETE hoaDon
  
};

module.exports = hoaDonController;
