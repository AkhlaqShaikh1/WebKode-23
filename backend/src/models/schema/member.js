const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const memberSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    interest:{
        type: String,
        required: true
    },
    domain:{
        type: String,
        required: true
    },
    password: {
        type: String,
        // required: [true, "Please enter your password"],
    },
    profileImg:{
        type: String,
    },
    cloudinaryId:{
        type: String,
    }
})
memberSchema.pre("save" , async function (next) {

    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10)

    this.password = await bcrypt.hash(this.password,salt)
    next() ;

})


memberSchema.methods.generateJwtFromUser  = function(){
    
    const { JWT_SECRET_KEY,JWT_EXPIRE } = process.env;
    console.log(process.env.JWT_SECRET_KEY)

    payload = {
        id: this._id,
        username : this.username,
        email : this.email
    }

    const token = jwt.sign(payload ,"herllokodpcnc", {expiresIn :"60m"} )

    return token 
}

memberSchema.methods.getResetPasswordTokenFromUser =function(){

    const { RESET_PASSWORD_EXPIRE } = process.env

    const randomHexString = crypto.randomBytes(20).toString("hex")

    const resetPasswordToken = crypto.createHash("SHA256").update(randomHexString).digest("hex")

    this.resetPasswordToken = resetPasswordToken
    
    this.resetPasswordExpire =Date.now()+ parseInt(RESET_PASSWORD_EXPIRE)

    return resetPasswordToken
}

const createUser = new mongoose.model('member', memberSchema)

module.exports = createUser;