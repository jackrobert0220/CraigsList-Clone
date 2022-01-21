const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsFurniture1.create);

router.delete('/:id/comments', commentsCtrl.commentsFurniture1.destroy);



module.exports = router;