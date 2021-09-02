const mongoose= require('mongoose')
const Schema= mongoose.Schema;

const postSchema= new Schema({
title: {type: String, required: true},
content: {type: String, required: true},
author: {type: String, required: true},
})

const posts= mongoose.model("Posts",postSchema);

module.exports= posts;