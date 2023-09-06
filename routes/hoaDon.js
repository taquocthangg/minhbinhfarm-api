const hoaDonController = require("../controllers/hoaDonController");

const router = require("express").Router();

//ADD hoaDon
router.post("/", hoaDonController.addhoaDon);

//GET ALL hoaDonS
router.get("/", hoaDonController.getAllhoaDons);

//GET AN hoaDon
router.get("/:id", hoaDonController.getAnhoaDon);

//UPDATE AN hoaDon
router.put("/:id", hoaDonController.updatehoaDon);

//DELETE hoaDon
router.delete("/:id", hoaDonController.deletehoaDon);

module.exports = router;