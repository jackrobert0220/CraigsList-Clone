const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.comments.create);

router.delete('/:id/comments', commentsCtrl.comments.destroy);

// router.post('/:id/comments', commentsCtrl.commentsBook.create);

// router.delete('/:id/comments', commentsCtrl.commentsBook.destroy);


module.exports = router;