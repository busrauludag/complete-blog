const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');

router.get('/posts', (req, res) => {
  Post
    .find()
    .populate('category', '_id name')
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/new-post', (req, res) => {
  const { title, description, imgUrl, category } = req.body;

  if(!title || ! description || !imgUrl || !category) {
    res.json({ message: 'All fields are required!' });
  }

  Category
    .findOne({ _id : category.id })
    .then(cat => {
      
      const post = new Post({
        title,
        description,
        imgUrl,
        category: cat
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
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;