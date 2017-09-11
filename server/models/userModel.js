var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

// use schema to add it to mongo data base
var UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    // unique: true
  },
  mobile:{
    type: String,
    //required: true,
    //unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    // unique: true
  },
  image:{
    type: String,
    //required: true,
    // unique: true
  },
  status:{
    type: String,
    //required: true,
    // unique: true
  },
  post:[
  {
    postText:{
      type:String
    },
    image:{
      type:String
    },
    
    lat:{
      type:String
    },
    lang:{
      type:String
    }  
  }],
  following:[
  {
    email:{
      type:String,
      required: true,
      unique: true
    } 
  }],
  follower:[
  {
    email:{
      type:String,
      required: true,
      unique: true
    } 
  }]

});




UserSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) {
  return next();
}

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
  if (err) {
    return next(err);
  }

  // hash the password along with our new salt
  bcrypt.hash(user.password, salt, null, function (err, hash) {
    if (err) {
      return next(err);
    }

    // override the cleartext password with the hashed one
    user.password = hash;
    user.salt = salt;
    next();
  });
});
});

module.exports = mongoose.model('facebookclone_user ', UserSchema);
