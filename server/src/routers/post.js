const express = require('express');
const Post = require("../models/post");
const auth = require("../auth/auth")

const router = new express.Router();

router.post("/posts" , auth , async (req,res) => {
    const trimmedPost = {
        blocks: req.body.blocks,
        entityMap: req.body.entityMap,
        breadcrumbs: req.body.breadcrumbs
    } 
    
    const post = new Post(trimmedPost)
    

    try {
        await post.save()
        res.status(201).send({post})
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get("/posts/:page" , async(req,res) => {
    const posts = await Post.find({}).sort([["createdAt", -1]]).skip(10 * req.params.page).limit(10);
    const total = await Post.find({}).count({})


    try {
        res.status(201).send({posts,total})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/posts/:tabName/:page" , async(req,res) => {
    const posts = await Post.find({breadcrumbs: req.params.tabName}).sort([["createdAt", -1]]).skip(10 * req.params.page).limit(10);
    const total = await Post.find({breadcrumbs: req.params.tabName}).count({})

    try {
        res.status(201).send({posts,total})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/post/:_id" , async (req,res) => {
    try {
        const post = await Post.findById(req.params._id)
        if (post === null)
            throw new Error("Paylaşım bulunamadı.")
        res.status(201).send(post)
    } catch (e) {
        res.status(404).send()
    }
})

router.put("/post/:_id" , auth , async(req,res) => {
    try {
        const updatedBody = {
            blocks: req.body.blocks,
            entityMap: req.body.entityMap,
            breadcrumbs: req.body.breadcrumbs
        } 

        const post = await Post.updateOne({_id: req.params._id} , updatedBody)
        res.send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete("/post/:_id", auth , async (req,res) => {
    try {
        console.log(req.params._id)
        const post = await Post.findById(req.params._id)
        await post.remove()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router;