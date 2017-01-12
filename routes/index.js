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
  var newUser = new User({
    'username': username,
    'favoriteFruit': userFruit
  });
  newUser.save();

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
  User.remove({'username': username}, function(err, result) {
    if (err) {
      res.send('An error occurred!');
    } else {
      if (result.result.n === 0) {
        res.send(username + ' is not in the database!');
      } else {
        res.send(username + ' was successfully removed!');
      }
    }
  });
});

router.get('/findfruit', function(req, res, next) {
  var username = req.query.username;

  // TODO: Check if the user exists. If the user exists, send back
  // their favorite fruit. Otherwise, return an error.
  User.findOne({'username': username}, function(err, user) {
    if (err) {
      res.send('An error occurred!');
    } else {
      if (user) {
        res.send(username + '\'s favorite fruit is ' + user.favoriteFruit);
      } else {
        // If the user does not exist, use this line of code below.
        res.send(username + ' is not in the database!');
      }
    }
  });
});

module.exports = router;
