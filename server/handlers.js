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
  },
  login:function(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email})
    .then(function (users) {

      if (!users) {
       console.log( "user not found")
       res.json("user not found")
     } else {
       users.comparePasswords(password)
       .then(function (isMatch) {
        if (isMatch) {
         console.log( "user ")

         res.json("signin")
       } else {
        console.log( "password ")
        res.json("password not matched")
      }
    });
     }
   });
  },
  getProfileInfo:function (req,res) {
    User.findOne({email:req.body.email})
    .then(function (user) {
      res.json({user:user})
    })
  },
  changeMobileNumber:function (req,res) {
    User.update({email:req.body.email}, { $set: { mobile: req.body.mobile }})
   .then(function (user) {
     res.json("s");
  })
  },
  changeStatus:function (req,res) {
    User.update({email:req.body.email}, { $set: { status: req.body.status }})
   .then(function (user) {
      res.json("s");
  })
  },
  changeName:function (req,res) {
    User.update({email:req.body.email}, { $set: { name: req.body.name }})
   .then(function (user) {
     res.json("s");
  })
  },
  changeImage:function (req,res) {
    User.update({email:req.body.email}, { $set: { image: req.body.image }})
   .then(function (user) {
     res.json("s");
  })
  }

}