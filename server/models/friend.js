console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendsSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
 birthday: Date
})

var Friends = mongoose.model('Friends', FriendsSchema);
