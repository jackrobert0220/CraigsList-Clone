const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.books.find({}, function(err, foundBooks) {
        if(err) return res.send(err);
        const context = {books: foundBooks};
        res.render('books/index', context)
    });
};

//new
const newPost = (req, res) => {
    db.books.find({}, (err, foundBooks) => {
        if(err) return res.send(err);
        const context = {books: foundBooks};
        res.render('books/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.books.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect('/books')
    });
};

//update

const update = (req,res) =>{
    db.books.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedBooks) => {
            if(err) return res.send(err);
            return res.redirect(`/books/${updatedBooks._id}`)
        });
};

//create

const create = (req,res) => {
    db.books.create(req.body, function(err, createdPost) {
        if(err) return res.send(err)
        return res.redirect('/books')
    });
};

//edit

const edit = (req,res) => {
    db.books.findById(req.params.id, (err, foundBooks) => {
        if(err) return res.send(err)
        const context = {books: foundBooks};
        res.render('books/edit', context)
    });
};

//show

const show = (req,res) => {
    db.books.findById(req.params.id, (err, foundBooks) => {
        if(err) return res.send(err)
        

        const context = {books: foundPosts}
        return res.render('books/show', context)

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

