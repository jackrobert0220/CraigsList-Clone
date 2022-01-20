const router = require("express").Router();

const commentsCtrl = require('../controllers');



router.post('/:id/comments', commentsCtrl.comments.create);




module.exports = router;