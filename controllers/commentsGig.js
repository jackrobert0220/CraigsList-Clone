const db = require('../models');

function create(req, res) {
    db.Gig.findById(req.params.id, function (err, gigs) {
        if(err) return res.send(err)
        gigs.comments.push(req.body);
        gigs.save(function (err){
        res.redirect(`/gigs/${gigs._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.Gig.findByIdAndDelete(req.params.id, (err, foundGig) => {
        if (err) return res.send(err);

        return res.redirect(`/gigs/${gigs._id}`)
    });
};


module.exports = {
    create,
    destroy,
}


