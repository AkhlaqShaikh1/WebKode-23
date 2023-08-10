const express = require("express")
// const imageupload = require("../Helpers/Libraries/imageUpload");
const upload=require('../middleware/multer')
const { getAccessToRoute } = require("../middleware/auth");
const {addStory,getAllStories,detailStory} = require("../controllers/story")
const { checkStoryExist } = require("../middleware/databaseErrorhandler");

const router = express.Router() ;

router.post("/addstory" ,[getAccessToRoute, upload.single('image')],addStory)


router.post("/:slug", checkStoryExist, detailStory)


router.get("/getAllStories",getAllStories)


module.exports = router