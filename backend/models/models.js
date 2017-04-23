var mongoose = require('mongoose')
var connect = process.env.MONGODB_URI
mongoose.connect(connect);

//Define Schema for Venue
var User = new mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});


module.exports = {
  User: mongoose.model('User', User)
}
