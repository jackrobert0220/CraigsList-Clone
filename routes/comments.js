const router = require("express").Router();

const commentsCtrl = require('../controllers');



router.post('/posts/:id/comments', commentsCtrl.posts.create);




module.exports = router;