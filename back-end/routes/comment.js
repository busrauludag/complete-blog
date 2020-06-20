const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

router.get('/comments', (req, res) => {
  Comment
    .find()
    .populate('post', '_id title')
    .then(comments => {
      res.json({ comments });
    })
    .catch(err => {
      console.log(err);
    })
});

router.post('/new-comment', (req, res) => {
  const { body, post } = req.body;

  if(!body || ! post) {
    res.json({ message: 'All fields are required!' });
  }

  Post
    .findOne({ _id : post.id })
    .then(p => {
      const comment = new Comment({
        body,
        post: p
      })
    
      comment
        .save()
        .then(() => {
          res.json({ msg: 'Comment created' })
        })
        .catch((err) => {
          console.log(err);
        });

    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/comments/post/:postId', (req, res) => {
  Comment
    .find({ post: { _id: req.params.postId } })
    .populate('post', '_id title')
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;