const express = require('express'),
  uui = require('uuid'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

//Requiring Models
const Models = require('./database/models');

const User = Models.User;

mongoose.connect('mongodb://localhost:27017', {useNewURLParser: true, useUnifiedTopology: true});

const app = express();
const passport = require('passport');
require('./passport');
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let auth = require('./auth')(app);



//API Endpoints
app.get('/', (req, res) => {
  res.send('Welcome!!');
});

//Error handling
app.use((err, req, res, next) => {
console.error(err);
res.status(500).send('Something went wrong!');
});

//Server
app.listen(port, () => {
console.log(`Your app is listening on port ${port}`);
});