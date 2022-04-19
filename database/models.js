const mongoose = require("mongoose");

//Defining Schema
let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true}
});

//Creating Models
let User = mongoose.model('User', userSchema);

//Exporting the Models
module.exports.User = User;

