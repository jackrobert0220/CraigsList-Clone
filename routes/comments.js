const router = require("express").Router();

const commentsCtrl = require('../controllers/comments');



router.post('/posts/:id/comments', commentsCtrl.posts.create);




module.exports = router;