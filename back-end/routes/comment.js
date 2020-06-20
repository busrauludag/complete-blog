const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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

// router.post('/new-comment', (req, res) => {
//   const { title, description, imgUrl, category, numberOfLikes, isFeatured } = req.body;

//   if(!title || ! description || !imgUrl || !category || !numberOfLikes || !isFeatured) {
//     res.json({ message: 'All fields are required!' });
//   }

//   Category
//     .findOne({ _id : category.id })
//     .then(cat => {
      
//       const post = new Post({
//         title,
//         description,
//         imgUrl,
//         numberOfLikes,
//         isFeatured,
//         category: cat
//       })
    
//       post
//         .save()
//         .then(() => {
//           res.json({ msg: 'Post created' })
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//     })
//     .catch(err => {
//       console.log(err);
//     })
// })

module.exports = router;