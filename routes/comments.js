const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');


router.post('/addComment/:postID/:commentID', commentController.addComment);
router.put('/updateComment/:postID/:commentID', commentController.addComment);
//router.delete('/delete/:postID/' commentController.delComment);

module.exports = router;