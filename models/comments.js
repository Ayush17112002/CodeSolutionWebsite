const mongoose = require('mongoose');
const dblink = '';
mongoose.connect(dblink);
const commentSchema = new mongoose.Schema({
    commentid:{
        type:String,
        required:true,
        unique:true
    },
    postid:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    code:{
        type:String
    }
},{
    timestamps:true
});
const commentModel = mongoose.model('commentModel', commentSchema);
module.exports.commentModel = commentModel;