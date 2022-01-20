const express = require('express');
const router = express.Router();

// router.get('/posts', function(req, res, next) {
//     res.redirect('/posts');
//   });


// module.exports = router;


module.exports = {
	posts: require("./posts"),
  comments: require('./comments')
};