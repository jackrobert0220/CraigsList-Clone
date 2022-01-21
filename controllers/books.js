const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{
    db.Book.find({}, function(err, foundBooks) {
        if(err) return res.send(err);
        const context = {books: foundBooks};
        res.render('books/index', context)
    });
};

//new
const newBook = (req, res) => {
    db.Book.find({}, (err, foundBook) => {
        if(err) return res.send(err);
        const context = {book: foundBook};
        res.render('books/new', context)
    });
};

//delete
const destroy = (req, res)=> {
    db.Book.findByIdAndDelete(req.params.id, (err, foundBook) => {
        if (err) return res.send(err);

        return res.redirect('/books')
    });
};

//update

const update = (req,res) =>{
    db.Book.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedBook) => {
            if(err) return res.send(err);
            return res.redirect(`/books/${updatedBook._id}`)
        });
};

//create

const create = (req,res) => {
    db.Book.create(req.body, function(err, createdBook) {
        if(err) return res.send(err)
        return res.redirect('/books')
    });
};

//edit

const edit = (req,res) => {
    db.Book.findById(req.params.id, (err, foundBook) => {
        if(err) return res.send(err)
        const context = {book: foundBook};
        res.render('books/edit', context)
    });
};

//show

const show = (req,res) => {
    db.Book.findById(req.params.id, (err, foundBooks) => {
        if(err) return res.send(err)
        

        const context = {books: foundBooks}
        return res.render('books/show', context)

    });
};



module.exports = {
    index,
    show,
    create,
    newBook,
    edit,
    update,
    destroy,
};

