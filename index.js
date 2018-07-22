const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const server = require('node-git-server');
const favicon = require('express-favicon');
const app = express();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

/**
 *  GLOBAL APP CONSTANTS 
 */
global.gitPort = process.env.GITPORT || 5055;
global.appPort = process.env.APPPORT || 2323;
global.stashDir = 'git-stash';

/**
 *  WEBFRONT APP
 */
app.listen(appPort);
app.use(favicon(__dirname + '/public/favicon.png'));
console.log(`WEBFRONT running at http://localhost:${appPort}`);
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
 *  GIT STASH
 */
// LOAD USERs & REPOSITORY PERMISSION DATA
global.users = JSON.parse(fs.readFileSync('./app-data/users.json'));
global.permissions = JSON.parse(fs.readFileSync('./app-data/permissions.json'));

const repos = new server(path.resolve(__dirname, stashDir), {
    autoCreate: true,
    authenticate: (type, repo, user, next) => {
        if (type == 'push') {
            user((username, password) => {
                console.log(username, password);
                next();
            });
        } else {
            next();
        }
    }
});
/* EVENT HANDLERS */
repos.on('push', (push) => {
    console.log(`push ${push.repo}/${push.commit} (${push.branch})`);
    push.accept();
});

repos.on('fetch', (fetch) => {
    console.log(`fetch ${fetch.commit}`);
    fetch.accept();
});

repos.listen(gitPort, () => {
    console.log(`NODE GIT SERVER running at http://localhost:${gitPort}`)
});

/**
 * JENKINS INTEGRATION
 */
require('./services/jenkins');

/**
 * SONARQUBE INTEGRATION
 */
// require('./services/sonarqube');

module.exports = app;