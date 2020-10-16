const express = require('express');
const router = express.Router();
const blogModel = require('../models/blog');


router.get('/', async (req,res) => {
    const blogData = await blogModel.getPosts();
    console.log(blogData);
    res.json(blogData).status(200)
})

router.get('/post/:post_id', async (req,res) => {
    console.log(req.params)
    const postId = req.params.post_id;
    const blogData = await blogModel.getSinglepost(postId);
    console.log(blogData);
    res.json(blogData).status(200)
})
router.get('/post/:post_id/comments', async (req,res) => {
    console.log(req.params)
    const postId = req.params.post_id;
    const commentData = await blogModel.getComments(postId);
    console.log(commentData);
    res.json(commentData).status(200)
})



// *** TODO *** Route for comments


module.exports = router;