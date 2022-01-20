const db = require('../models');

function create(req, res) {
    db.posts.findById(req.params.id, function (err, post) {
        if(err) return res.send(err)
        console.log(post)
        post.comments.push(req.body);
        post.save(function (err) {
        res.redirect(`/posts/${post._id}`);
      });
    });
  }

module.exports = {
    create,
}