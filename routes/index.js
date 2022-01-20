const express = require('express');
const router = express.Router();

// router.get('/posts', function(req, res, next) {
//     res.redirect('/posts');
//   });


// module.exports = router;


module.exports = {
	posts: require("./posts"),
  books: require('./books'),
  comments: require('./comments'),
  furniture: require('./furniture'),
  electronics: require('./electronics'),
};