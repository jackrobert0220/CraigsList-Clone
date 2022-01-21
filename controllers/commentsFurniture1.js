const db = require('../models');

function create(req, res) {
    db.Furniture1.findById(req.params.id, function (err, furniture) {
        if(err) return res.send(err)
        furniture.comments.push(req.body);
        furniture.save(function (err){
        res.redirect(`/furniture/${furniture._id}`);
      });
    });
  }

  const destroy = (req, res)=> {
    db.Furniture1.findByIdAndDelete(req.params.id, (err, foundFurniture1) => {
        if (err) return res.send(err);

        return res.redirect(`/furniture/${furniture._id}`)
    });
};


module.exports = {
    create,
    destroy,
}

