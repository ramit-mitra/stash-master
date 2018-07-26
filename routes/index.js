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
/* GET repository overview page */
router.get('/repository-dashboard/:reponame', function (req, res, next) {
  let reponame = req.params.reponame;

  res.render('repository-dashboard', {
    title: 'Stash Master // Repository Dashboard - ' + reponame,
    reponame: reponame,
    ngApp: 'home',
    ngController: 'repodashboard'
  });
});

module.exports = router;