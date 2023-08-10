const dotenv=require('dotenv')
const path=require('path')
dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports={

    // Database
    MONGODB_URL: "mongodb+srv://fahadahad567:hdJJl8J8de6ZPBdG@cluster0.bxxnkwo.mongodb.net/test",   
}
