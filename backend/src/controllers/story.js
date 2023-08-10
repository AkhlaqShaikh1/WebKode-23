const asyncErrorWrapper = require("express-async-handler")
const Story = require("../models/schema/story");
const cloudinary = require('../cloudinary/cloudinary');
const {searchHelper, paginateHelper} =require("../helpers/query/queryHelpers")

const addStory = asyncErrorWrapper(async  (req,res,next)=> {
    const {title,content} = req.body 
    var wordCount = content.trim().split(/\s+/).length; 

    let readtime = Math.floor(wordCount /200)   ;


    try {
        const response=await cloudinary.uploader.upload(req.file.path)
        payload.profileImg=response.secure_url
        payload.cloudinaryId=response.public_id
        const newStory = await Story.create({
            title,
            content,
            author :req.user._id ,
            image : response.secure_url,
            readtime
        })

        return res.status(200).json({
            success :true ,
            message : "add story successfully ",
            data: newStory
        })
    }

    catch(error) {

        // deleteImageFile(req)
        console.log(error)

        return next(error)
        
    }
  
})

const getAllStories = asyncErrorWrapper( async (req,res,next) =>{

    let query = Story.find();

    query =searchHelper("title",query,req)

    const paginationResult =await paginateHelper(Story , query ,req)

    query = paginationResult.query  ;

    query = query.sort("-likeCount -commentCount -createdAt")

    const stories = await query
    
    return res.status(200).json(
        {
            success:true,
            count : stories.length,
            data : stories ,
            page : paginationResult.page ,
            pages : paginationResult.pages
        })

})

const detailStory =asyncErrorWrapper(async(req,res,next)=>{

    const {slug}=req.params;
    const {activeUser}=req.body 

    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")

    const storyLikeUserIds = story.likes.map(json => json.id)
    const likeStatus = storyLikeUserIds.includes(activeUser._id)


    return res.status(200).
        json({
            success:true,
            data : story,
            likeStatus:likeStatus
        })

})
module.exports ={
    addStory,
    getAllStories,
    detailStory
} 