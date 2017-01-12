var express = require('express');
var router = express.Router();

// get the User model
var User = require('../schemas/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Rendering the index view with the title 'Sign Up'
  res.render('index', {title: 'Sign Up'});
});

/* GET userlist JSON */
router.get('/userlist', function(req, res, next) {
  // Passing in an empty object to User.find() will return a list of
  // all the users.
  User.find({}, function(err, users) {
    res.send(users);
  });
});

/* POST to adduser */
router.post('/adduser', function(req, res, next) {
  var username = req.body.username;
  var userFruit = req.body.userfruit;

  // TODO: insert the new document into the collection 'users'
  // Insert a new document if the username doesn't already exist.
  // Otherwise, update the existing user!

  // Redirecting back to the root
  res.redirect('/');
});

/* POST to deleteuser */
router.post('/deleteuser', function(req, res, next) {
  var username = req.body.username;

  // TODO: Remove the document from the collection, if it exists.
  // Otherwise, return an error.
  //
  // Hint: How can you tell whether User.remove() was successful?

  res.send('Unimplemented :(');
});

router.get('/findfruit', function(req, res, next) {
  var username = req.query.username;

  // TODO: Check if the user exists. If the user exists, send back
  // their favorite fruit. Otherwise, return an error.
  res.send('Unimplemented :(');

  // If the user does not exist, use this line of code below.
  res.send('Error! Username not found');
});

module.exports = router;
