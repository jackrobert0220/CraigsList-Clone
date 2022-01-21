const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Furniture1.find({}, function(err, foundfurniture) {
        if(err) return res.send(err);
        const context = {furniture: foundfurniture};
        res.render('furniture/index', context)
    });
};

//new
const newPost = (req, res) => {
    db.Furniture1.find({}, (err, foundFurniture) => {
        if(err) return res.send(err);
        const context = {furniture: foundFurniture};
        res.render('furniture/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Furniture1.findByIdAndDelete(req.params.id, (err, foundfurniture1) => {
        if (err) return res.send(err);

        return res.redirect('/furniture')
    });
};

//update

const update = (req,res) =>{
    db.Furniture1.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedFurniture1) => {
            if(err) return res.send(err);
            return res.redirect(`/furniture/${updatedFurniture1._id}`)
        });
};

//create

const create = (req,res) => {
    db.Furniture1.create(req.body, function(err, createdFurniture1) {
        if(err) return res.send(err)
        return res.redirect('/furniture')
    });
};

//edit

const edit = (req,res) => {
    db.Furniture1.findById(req.params.id, (err, foundFurniture1) => {
        if(err) return res.send(err)
        const context = {Furniture1: foundFurniture1};
        res.render('furniture/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Furniture1.findById(req.params.id, (err, foundFurniture) => {
        if(err) return res.send(err)
        

        const context = {furniture: foundFurniture}
        return res.render('furniture/show', context)

    });
};



module.exports = {
    index,
    show,
    create,
    newPost,
    edit,
    update,
    destroy,
};

