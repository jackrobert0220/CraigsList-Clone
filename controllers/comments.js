const db = require('../models');

function create(req, res) {
    db.posts.findById(req.params.id, function (err, posts) {
        if(err) return res.send(err)
        posts.comments.push(req.body);
        posts.save(function (err){
        res.redirect(`/posts/${posts._id}`);
      });
    });
  }

module.exports = {
    create,
}


// POSSIBLE OTHER OPTION


// function create(req, res) {
//   db.findById(req.params.id, function(err, post) {
//     post.comments.push(req.body);
//     .save(function(err) {
//       res.redirect(`/posts/${post._id}`);
//     });
//   });
// }