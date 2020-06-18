const express = require('express');
const mongoose = require('mongoose');
const { MONGOUIR } = require('./keys');
const app = express();
const PORT = 500;

// Connection to MongoDB
mongoose.connect(MONGOUIR, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('connected to MongoDB');
})
mongoose.connection.on('eroor', (err) => {
  console.log(`Error: ${err}`);
})

// Routes
// app.get('/home', (req, res) => {
//   res.send('Home!');
// })

// app.get('/category', (req, res) => {
//   res.send('Category!');
// })

// Models Import
require('./models/post');
require('./models/category');

app.use(express.json());

 // Routes Import
 app.use(require('./routes/post'));

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
})