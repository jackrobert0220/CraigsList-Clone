const router = require("express").Router();

const commentsCtrl = require('../controllers');




router.post('/:id/comments', commentsCtrl.commentsElectronic.create);

router.delete('/:id/comments', commentsCtrl.commentsElectronic.destroy);



module.exports = router;