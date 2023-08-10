const asyncErrorWrapper = require("express-async-handler")
const { catchAsync } = require('../helpers/error/request');
const CustomError = require("../helpers/error/CustomError");
const { sendToken } = require("../helpers/auth/tokenHelpers");
const { validateUserInput,comparePassword } = require("../helpers/input/inputHelpers");
const memberModel=require('../models/schema/member')
const getPrivateData = asyncErrorWrapper((req,res,next) =>{

    return res.status(200).json({
        success:true ,
        message : "You got access to the private data in this route ",
        user : req.user

    })

})



const login  = catchAsync (async(req,res,next) => {
    const {email,password} = req.body 
    if(!validateUserInput(email,password)) {

        return next(new CustomError("Please check your inputs",400))
    }

    const user = await memberModel.findOne({email}).select("+password")
        console.log(user)

    if(!user) {
        
        return next(new CustomError("Invalid credentials",404))
    }

    if(!comparePassword(password,user.password)){
        return next(new CustomError("Please chech your credentails",404))
    }

    sendToken(user ,200,res)  ;
    
})







module.exports ={

    login,
    getPrivateData
}