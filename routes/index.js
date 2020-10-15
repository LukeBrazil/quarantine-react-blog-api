const express = require('express');
const router = express.Router();
const blogModel = require('../models/blog');


router.get('/', async (req,res) => {
    const blogData = await blogModel.getPosts();
    console.log(blogData);
    res.json(blogData.status(200))
})

router.get('/post', async (req,res) => {
    const blogData = await blogModel.getSinglepost();
    console.log(blogData);
    res.json(blogData.status(200))
})


// *** TODO *** Route for comments


module.exports = router;