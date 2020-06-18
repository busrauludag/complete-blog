const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

router.get('/posts', (req, res) => {
  Post.find()
    .populate('category', '_id name')
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/new-post', (req, res) => {
  const { title, description, imgUrl } = req.body;

  if(!title || ! description || !imgUrl) {
    res.json({ message: 'All fields are required!' });
  }

  const post = new Post({
    title,
    description,
    imgUrl
  })

  post
    .save()
    .then(() => {
      res.json({ msg: 'Post created' })
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router;