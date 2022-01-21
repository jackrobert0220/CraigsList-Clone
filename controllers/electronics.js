const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Electronic.find({}, function(err, foundElectronics) {
        if(err) return res.send(err);
        const context = {electronics: foundElectronics};
        res.render('electronics/index', context)
    });
};

//new
const newPost = (req, res) => {
    db.Electronic.find({}, (err, foundElectronics) => {
        if(err) return res.send(err);
        const context = {electronics: foundElectronics};
        res.render('electronics/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Electronic.findByIdAndDelete(req.params.id, (err, foundElectronic) => {
        if (err) return res.send(err);

        return res.redirect('/electronics')
    });
};

//update

const update = (req,res) =>{
    db.Electronic.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedElectronic) => {
            if(err) return res.send(err);
            return res.redirect(`/electronics/${updatedElectronic._id}`)
        });
};

//create

const create = (req,res) => {
    db.Electronic.create(req.body, function(err, createdElectronic) {
        if(err) return res.send(err)
        return res.redirect('/electronics')
    });
};

//edit

const edit = (req,res) => {
    db.Electronic.findById(req.params.id, (err, foundElectronic) => {
        if(err) return res.send(err)
        const context = {Electronic: foundElectronic};
        res.render('electronics/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Electronic.findById(req.params.id, (err, foundElectronics) => {
        if(err) return res.send(err)
        

        const context = {electronics: foundElectronics}
        return res.render('electronics/show', context)

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

