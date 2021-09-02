const { request } = require('express');
const express= require('express');
const posts= require('../models/posts');

const router= express.Router();

// Gets all posts
router.get("/",(req,res)=>{
    posts.find()
    .then(post => res.json(post))
    .catch(e => res.status(400).json(`Error: ${e}`));
});

//Create a new post
router.post("/add",(req,res)=>{
    const newPost= new posts({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });
    newPost.save()
    .then(()=>res.json("New post addedd successfully!"))
    .catch(e=> res.status(400).json(`Error: ${e}`));
});

//Read a post with id
router.get("/:id", (req,res)=>{
    posts.findById(req.params.id)
    .then (post => res.json(post))
    .catch(e=> res.status(400).json(`Error: ${e}`));
});

//Update a post with id
router.put("/edit/:id", (req,res)=>{
    posts.findById(req.params.id)
    .then (post=> {
        post.title= req.body.title;
        post.content= req.body.content;
        post.author= req.body.author;

        post.save()
        .then(()=> res.json("Post updated successfully!"))
        .catch(e=> res.status(400).json(`Error: ${e}`));
    })
    .catch(e=> res.status(400).json(`Error: ${e}`));
});

//Delete a post with id
router.delete("/delete/:id", (req,res)=>{
    posts.findByIdAndDelete(req.params.id)
        .then(()=> res.json("Post deleted successfully!"))
        .catch(e=> res.status(400).json(`Error: ${e}`));
});

module.exports= router;

