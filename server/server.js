const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session');
const mongoose = require('mongoose');

var handlers = require('./handlers.js');

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;

//middleware
app.use(express.static(__dirname + '/../client/www'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/api/signup',handlers.handleUser.signUp);
app.post('/api/login',handlers.handleUser.login);
app.post('/api/getprofileinfo',handlers.handleUser.getProfileInfo);
app.post('/api/changemobilenumber',handlers.handleUser.changeMobileNumber);
app.post('/api/changestatus',handlers.handleUser.changeStatus);
app.post('/api/changename',handlers.handleUser.changeName);
app.post('/api/changeimage',handlers.handleUser.changeImage);
app.post('/api/onpostdata',handlers.handlePost.onPostData);
app.post('/api/getprofilepost',handlers.handlePost.getProfilePost);

app.get('/api/getMethod',handlers.handleData.getData);
app.post('/api/postmethod',handlers.handleData.addData);
  
 

app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;
