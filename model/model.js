const mongoose = require("mongoose");

const hoaDonSchema = new mongoose.Schema({
  nameUser:
  {
    type: String,
    required: true
  },
  numberPhone:
  {
    type: String,
    required: true
  },
  email:
  {
    type: String,
    required: false
  },
  address:
  {
    type: String,
    required: true
  },
  note:
  {
    type: String,
    required: false
  },

  maSp: [
    {
      type: String,
      required: true
    },
  ],
  quantity: [
    {
      type: String,
      required: true
    },
  ],
  TenSp: [
    {
      type: String,
    },
  ],
  total: 
    {
      type: String,
    },
},
  { timestamps: true }
);

const loginSchema = new mongoose.Schema({
  userName:
  {
    type: String,
    required: true
  },
  passWord:
  {
    type: String,
    required: true
  },
})
let hoaDon = mongoose.model("hoaDon", hoaDonSchema);
let login = mongoose.model("login",loginSchema)
module.exports = { hoaDon ,login };
