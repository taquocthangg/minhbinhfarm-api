const hoaDonController = require("../controllers/hoaDonController");

const router = require("express").Router();

//ADD hoaDon
router.post("/", hoaDonController.addhoaDon);

//GET ALL hoaDonS
router.get("/", hoaDonController.getAllhoaDons);

//GET AN hoaDon
router.get("/:id", hoaDonController.getAnhoaDon);


module.exports = router;
