var User = require('./models/userModel.js');
var jwt = require('jwt-simple');



module.exports.handleData = {
	getData:function(req,res){
		res.json({name:"heeeey there"})
		},
	addData:function(req,res){
		console.log(req.body)
		res.json({name:"heeeey there"})
		}
}


module.exports.handleUser={
	signUp: function(req, res) {
  var name = req.body.name;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var password = req.body.password;
  

  User.findOne({email: email})
  .exec(function (err, user) {
    if (user) {
      res.json('User already exist!');
    } else {
        // make a new user if not one
        return User.create({
          name: name,
          mobile: mobile,
          email: email,
          password: password
        }, function (err, newUser) {
            // create token to send back for auth
            if(err){
              res.json(err);
            } else {
              
              res.json('signup');
            }     
          });
      }
    });
}
}