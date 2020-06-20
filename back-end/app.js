const express = require('express');
const mongoose = require('mongoose');
const { MONGOUIR } = require('./keys');
const app = express();
const PORT = 5000;

// Connection to MongoDB
mongoose.connect(MONGOUIR, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('connected to MongoDB');
});
mongoose.connection.on('eroor', (err) => {
  console.log(`Error: ${err}`);
});

// Models Import
require('./models/post');
require('./models/category');
require('./models/comment');

app.use(express.json());

 // Routes Import
 app.use(require('./routes/post'));
 app.use(require('./routes/category'));
 app.use(require('./routes/comment'));

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});