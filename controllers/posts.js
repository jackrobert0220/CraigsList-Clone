const db = require('../models');


//INDUCES

//index
const index = (req,res) =>{

    db.Post.find({}, function(err, foundPosts) {
        if(err) return res.send(err);
        const context = {posts: foundPosts};
        res.render('posts/index', context),
    })
}

//new
const newPost = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if(err) return res.send(err);
        const context = {posts: foundPosts};
        res.render('posts/new', context)
    })
}

//delete
const delete = (req, res)=> {
    db.Post.findByIdAndDelete(req.params.id, (err, foundPost) => {
        if (err) return res.send(err);

        return res.redirect('/posts')
    })
}

//update

const update = (req,res) =>{
    db.Post.findByIdAndUpdate(req.params.id,
        {
            $set: {...req.body},
        },

        {new:true},
        (err, updatedPost) => {
            if(err) return res.send(err);
            return res.redirect(`/posts/${updatedPost._id}`)
        }
    )
}

//create

const create = (req,res) => {
    db.Post.create(req.body, function(err, createdPost) {
        if(err) return res.send(err)
        return res.redirect('/posts')
    })
}

//edit

const edit = (req,res) => {
    db.Post.findById(req.params.id, (err, foundPosts) => {
        if(err) return res.send(err)
        const context = {posts: foundPosts};
        res.render('posts/edit', context)
    })
}

//show

const show = (req,res) => {
    db.Post.findById(req.params.id, (err, foundPosts) => {
        if(err) return res.send(err)
        
        const context = {posts: foundPosts}
        return res.render('posts/show, context')
    })
}



module.exports = {
    index,
    show,
    create,
    newPost,
    edit,
    update,
    delete,
};

