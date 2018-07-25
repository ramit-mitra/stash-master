const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('express-favicon');
const app = express();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

/**
 *  GLOBAL APP CONSTANTS 
 */
global.gitPort = process.env.GITPORT || 5055;
global.appPort = process.env.APPPORT || 2323;
global.stashDir = path.join(__dirname, 'git-stash');
// LOAD USERs & REPOSITORY PERMISSION DATA
global.users = JSON.parse(fs.readFileSync('./app-data/users.json'));
global.permissions = JSON.parse(fs.readFileSync('./app-data/permissions.json'));

/* WELCOME MESSAGE */
console.log('WELCOME TO STASH MASTER');
console.log('An integrated GIT STASH + Jenkins system to power your devops necessity.');
console.log('THE FOLLOWING SERVICES ARE UP & RUNNING ::');

/**
 *  STASH MASTER APP
 */
app.listen(appPort);
app.use(favicon(__dirname + '/public/favicon.png'));
console.log(`STASH MASTER running at http://localhost:${appPort}`);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// middleware configurations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// import router routes
app.use('/', indexRouter);
app.use('/api/', apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/**
 * GIT STASH INTEGRATION
 */
require('./services/stash');

/**
 * JENKINS INTEGRATION
 */
require('./services/jenkins');

/**
 * SONARQUBE INTEGRATION
 */
// require('./services/sonarqube');

module.exports = app;