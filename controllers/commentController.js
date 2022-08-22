const commentModel = require('../models/comments');
module.exports.addComment = function(req,res){
    let cID = req.params.commentID;
    let pID = req.params.postID;
    //check for post exists --> for false query
    try{
        commentModel.findOne({commentID:cID}, function(err,comment){
            if(comment){
                //comment already exist
                comment.description = req.body.description;
                comment.code = req.body.code;
                comment.save();
                return res.send('Updated the Comment');
            }else{
                //create comment
                commentModel.create({
                    postID : pID,
                    commentID : cID,
                    description : req.body.description,
                    code : req.body.code
                }, function(err, comment){
                    return res.send('Added the Comment');
                });
            }
        })
    }catch(err){
        return res.send('Error');
    }
}