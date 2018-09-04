const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('express-favicon');
const createError = require('http-errors');
const indexRouter = require('../routes/index');
const apiRouter = require('../routes/api');
const repositoryApiRouter = require('../routes/repository-api');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

/**
 *  SOCKET.IO INTEGRATION
 */
// an user is connected
// io.on('connection', function (socket) {
//     console.log('a user connected');
// });

http.listen(appPort, function () {
    // do nothing!
});

/**
 *  STASH MASTER APP
 */
// favicon & view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// middleware configurations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(__dirname + '/../public/favicon.png'));

// import router routes
app.use('/', indexRouter);
app.use('/api/', apiRouter);
app.use('/api/', apiRouter);
app.use('/rapi/', repositoryApiRouter);

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

/* WELCOME MESSAGE */
console.log('WELCOME TO STASH MASTER');
console.log('An integrated GIT STASH + Jenkins system to power your devops.');
console.log('THE FOLLOWING SERVICES ARE UP & RUNNING ::');
console.log(`STASH MASTER running at http://localhost:${appPort}`);

module.exports = {
    'app': app,
    'io': io
};