const router = require("express").Router();

const commentsCtrl = require('../controllers');


router.post('/movies/:id/reviews', commentsCtrl.posts.create);



module.exports = router;