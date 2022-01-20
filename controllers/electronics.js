const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.electronics.find({}, function(err, foundElectronics) {
        if(err) return res.send(err);
        const context = {electronics: foundElectronics};
        res.render('electronics/index', context)
    });
};

//new
const newPost = (req, res) => {
    db.electronics.find({}, (err, foundElectronics) => {
        if(err) return res.send(err);
        const context = {electronics: foundElectronics};
        res.render('electronics/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.electronics.findByIdAndDelete(req.params.id, (err, foundElectronics) => {
        if (err) return res.send(err);

        return res.redirect('/electronics')
    });
};

//update

const update = (req,res) =>{
    db.electronics.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedElectronics) => {
            if(err) return res.send(err);
            return res.redirect(`/electronics/${updatedElectronics._id}`)
        });
};

//create

const create = (req,res) => {
    db.electronics.create(req.body, function(err, createdElectronics) {
        if(err) return res.send(err)
        return res.redirect('/electronics')
    });
};

//edit

const edit = (req,res) => {
    db.electronics.findById(req.params.id, (err, foundElectronics) => {
        if(err) return res.send(err)
        const context = {electronics: foundElectronics};
        res.render('electronics/edit', context)
    });
};

//show

const show = (req,res) => {
    db.electronics.findById(req.params.id, (err, foundElectronics) => {
        if(err) return res.send(err)
        

        const context = {eletronics: foundElectronics}
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

