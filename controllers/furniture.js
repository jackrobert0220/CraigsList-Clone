const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.furniture.find({}, function(err, foundfurniture) {
        if(err) return res.send(err);
        const context = {furniture: foundfurniture};
        res.render('furniture/index', context)
    });
};

//new
const newPost = (req, res) => {
    db.furniture.find({}, (err, foundfurniture) => {
        if(err) return res.send(err);
        const context = {furniture: foundfurniture};
        res.render('furniture/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.furniture.findByIdAndDelete(req.params.id, (err, foundfurniture) => {
        if (err) return res.send(err);

        return res.redirect('/furniture')
    });
};

//update

const update = (req,res) =>{
    db.furniture.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedPost) => {
            if(err) return res.send(err);
            return res.redirect(`/furniture/${updatedfurniture._id}`)
        });
};

//create

const create = (req,res) => {
    db.furniture.create(req.body, function(err, createdfurniture) {
        if(err) return res.send(err)
        return res.redirect('/furniture')
    });
};

//edit

const edit = (req,res) => {
    db.furniture.findById(req.params.id, (err, foundfurniture) => {
        if(err) return res.send(err)
        const context = {furniture: foundfurniture};
        res.render('furniture/edit', context)
    });
};

//show

const show = (req,res) => {
    db.furniture.findById(req.params.id, (err, foundfurniture) => {
        if(err) return res.send(err)
        

        const context = {furniture: foundfurniture}
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

