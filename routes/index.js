const express = require('express');
// const shell = require('shelljs');
// const Convert = require('ansi-to-html');
// const fs = require('fs');
// const convert = new Convert();
var router = express.Router();

/* Boot Jenkins */
// if (!shell.which('java')) {
//   shell.echo('Sorry, this script requires minimum JAVA 8');
//   shell.exit(1);
// }
// // 
// var jenkinsProcess = shell.exec('java -jar ./jenkins/jenkins.war', {silent:true, async:true});
// var wstream = fs.createWriteStream('./console_output/jenkins-output.html');
// jenkinsProcess.stdout.on('data', function(data) {
//   console.log(data);
//   wstream.write(convert.toHtml(data));
//   /* ... do something with data ... */
// });

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