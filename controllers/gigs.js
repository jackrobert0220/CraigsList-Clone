const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Gig.find({}, function(err, foundPosts) {
        if(err) return res.send(err);
        const context = {gigs: foundPosts};
        res.render('gigs/index', context)
    });
};

//new
const newPost = (req, res) => {
    db.Gig.find({}, (err, foundPosts) => {
        if(err) return res.send(err);
        const context = {gigs: foundPosts};
        res.render('gigs/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Gig.findByIdAndDelete(req.params.id, (err, foundGig) => {
        if (err) return res.send(err);

        return res.redirect('/gigs')
    });
};

//update

const update = (req,res) =>{
    db.Gig.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedGig) => {
            if(err) return res.send(err);
            return res.redirect(`/gigs/${updatedGig._id}`)
        });
};

//create

const create = (req,res) => {
    db.Gig.create(req.body, function(err, createdGig) {
        if(err) return res.send(err)
        return res.redirect('/gigs')
    });
};

//edit

const edit = (req,res) => {
    db.Gig.findById(req.params.id, (err, foundGig) => {
        if(err) return res.send(err)
        const context = {Gig: foundGig};
        res.render('gigs/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Gig.findById(req.params.id, (err, foundGigs) => {
        if(err) return res.send(err)
        

        const context = {gigs: foundGigs}
        return res.render('gigs/show', context)

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

