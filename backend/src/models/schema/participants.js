const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    teamMembers:{
        type:Array,
    },
    teamName:{
        type:String
    },
    email: {
        type: String,
    },
    participationType: {
        type: String,
    },
    contestId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"contest",
    }

})

const createUser = new mongoose.model('participant', participantSchema)

module.exports = createUser;