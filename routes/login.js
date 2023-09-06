const loginController = require("../controllers/loginController");

const router = require("express").Router();

//ADD login
router.post("/", loginController.addlogin);

//GET ALL loginS
router.get("/", loginController.getAlllogins);

//GET AN login
router.get("/:id", loginController.getAnlogin);

//UPDATE AN login
router.put("/:id", loginController.updatelogin);

//DELETE login
router.delete("/:id", loginController.deletelogin);

module.exports = router;