const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const authController=require('../controllers/auth')
const upload=require('../middleware/multer')
const { getAccessToRoute } = require("../middleware/auth");
router.post("/membership", upload.single("profileImg"),userController.createUser);
router.post("/register",userController.createParticipents);

router.post("/login",authController.login)
router.get("/profile",getAccessToRoute ,userController.profile)

router.get("/private",getAccessToRoute,authController.getPrivateData)
module.exports = router;