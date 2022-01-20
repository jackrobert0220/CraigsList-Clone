const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.comments.create);

router.delete('/:id/comments', commentsCtrl.comments.destroy);



module.exports = router;