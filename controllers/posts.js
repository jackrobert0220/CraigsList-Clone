const db = require('../models/post');

//INDUCES


const idx = (req,res) =>{
    db.Post.find({}, function(err, foundPosts) {
        if(err) return res.send(err);
        const context = {posts: foundPosts};
        res.render('posts/index', context),
    })
}

const newPost = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if(err) return res.send(err);
        const context = {posts: foundPosts};
        res.render('posts/new', context)
    })
}


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

