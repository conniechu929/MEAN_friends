console.log('friends controller');
var mongoose = require('mongoose');
var Friends = mongoose.model('Friends');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friends.find({}, function(err, friends) {
      if(err) {
        console.log("No friends");
        // res.json({placeholder:friends});
      }
      else {
        res.json({friends});
      }
    })
  };
  this.create = function(req,res){
    var friend = new Friends({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});

    friend.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added new person!');
      }
    })
    // res.json({placeholder:'create'});
  };
  this.update = function(req,res){
    var id = req.params.id;
    Friends.update({_id:id}, {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday}, function(error, friends) {
      if(error) {
        console.log('Not updated!')
      }
      else{
        res.json(friends)
      }
    })
   // res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    var id = req.params.id;
    Friends.remove({_id:id}, function(error, friends){
      if(error){
        console.log('Did not remove!')
      }
      else{
        res.json(friends)
      }
    })
    // res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
    var id = req.params.id;
    Friends.findOne({_id:id}, function(error, friend) {
      if(error) {
        console.log('error!');
      }
      else {
        res.json(friend)
      }
    })
    // res.json({placeholder:'show'});
  };
}

module.exports = new FriendsController(); // what does this export?
