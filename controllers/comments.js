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

  const destroy = (req, res)=> {
    db.posts.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect(`/posts/${posts._id}`)
    });
};


module.exports = {
    create,
    destroy,
}


