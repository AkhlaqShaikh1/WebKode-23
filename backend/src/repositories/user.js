// const userModel=require('../models/schema/user')
const memberModel =require('../models/schema/member')
const participantModel=require('../models/schema/participants')
const cloudinary = require('../cloudinary/cloudinary');
var random = require('random-string-alphanumeric-generator');
exports.create=async(payload,path)=>{
    const pass=random.randomAlphanumeric(7)
    let user= await memberModel.findOne({email:payload.email})
    // console.log(user)
    if(user){
        // console.log(1)
        return {
            status:"exist",
            data:user}
    }
    const response=await cloudinary.uploader.upload(path)
    payload.profileImg=response.secure_url
    payload.cloudinaryId=response.public_id
    payload.password=pass
    user=await memberModel.create(payload)
    return {
        status:"create",
        data:user,
        pass:pass
        
    }
    
}
exports.createParticipants=async(payload)=>{
    
    let user= await participantModel.findOne({email:payload.email})
    if(user){
        return {
            status:"exist",
            data:user}
    }
    user=await participantModel.create(payload)
    return {
        status:"create",
        data:user
        
    }
    
}