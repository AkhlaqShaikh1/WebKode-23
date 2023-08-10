const bycrpt = require("bcrypt")

const validateUserInput =(email,password) =>{

    return(
        email && password
    )

}

const comparePassword =  (password , hashedPassword) =>{

    return  bycrpt.compareSync(password,hashedPassword)

}

module.exports ={
    validateUserInput,
    comparePassword
}