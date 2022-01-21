const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsGig.create);

router.delete('/:id/comments', commentsCtrl.commentsGig.destroy);



module.exports = router;