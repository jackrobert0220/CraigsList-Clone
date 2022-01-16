const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/movies/:id/reviews', commentsCtrl.create);



module.exports = router;