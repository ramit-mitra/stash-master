const express = require('express');
var router = express.Router();

/* GET landing page */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Welcome to Stash Master'
  });
});
/* GET home page */
router.get('/home', function (req, res, next) {
  res.render('home', {
    title: 'Stash Master // Home',
    ngApp: 'home',
    ngController: 'default'
  });
});
/* GET user management page */
router.get('/manage-users', function (req, res, next) {
  res.render('manage-users', {
    title: 'Stash Master // Manage Users',
    ngApp: 'home',
    ngController: 'manageusers'
  });
});

module.exports = router;