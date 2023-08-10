const cloudinary = require('cloudinary')
const express=require('express')
const dotenv=require('dotenv')
const app=express()

cloudinary.config({
    cloud_name: "dthqgnlbt",
    api_key: "482885331891743",
    api_secret: "VNKl4RlCVYZE0dAPv39_m_KWHJY",
})
module.exports=cloudinary