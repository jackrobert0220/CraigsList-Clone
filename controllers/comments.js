const db = require('../models');

function create(req, res) {
    db.findById(req.params.id, function (err, post) {
      post.comments.push(req.body);
      post.save(function (err) {
        res.redirect(`/posts/${post._id}`);
      });
    });
  }

module.exports = {
    create,
}