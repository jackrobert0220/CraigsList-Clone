const db = require('../models');

function create(req, res) {
    db.Book.findById(req.params.id, function (err, books) {
        if(err) return res.send(err)
        books.comments.push(req.body);
        books.save(function (err){
        res.redirect(`/books/${books._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.Book.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect(`/books/${books._id}`)
    });
};


module.exports = {
    create,
    destroy,
}

