const db = require('../models');

function create(req, res) {
    db.electronic.findById(req.params.id, function (err, electronics) {
        if(err) return res.send(err)
        electronics.comments.push(req.body);
        electronics.save(function (err){
        res.redirect(`/electronics/${electronics._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.electronics.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect(`/electronics/${electronics._id}`)
    });
};


module.exports = {
    create,
    destroy,
}

