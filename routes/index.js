const express = require('express');
const router = express.Router();

// router.get('/posts', function(req, res, next) {
//     res.redirect('/posts');
//   });


// module.exports = router;


module.exports = {
	gigs: require("./gigs"),
  books: require('./books'),
  electronics: require('./electronics'),
  furniture: require('./furniture'),
  commentsGig: require('./commentsGig'),
  commentsBook: require('./commentsBook'),
  commentsElectronic: require('./commentsElectronic'),
  commentsFurniture1: require('./commentsFurniture1'),
};