const express = require('express');
const rimraf = require('rimraf');
const fs = require('fs');
var router = express.Router();

// if (process.env.mode === 'docker') {
//     var cache = require('express-redis-cache')({
//         host: 'redis',
//         port: 6379
//     });
// }

/* API routes */
// get repository details
router.get('/get-repo-details', function (req, res, next) {
    let list = fs.readdirSync('./git-stash/');
    let stashlist = [];
    for (let i in list) {
        stashlist.push(list[i].replace(/.git/g, ""));
    }
    let re = new RegExp(global.appPort, "g");

    res.json({
        stashlist: stashlist,
        host: req.headers.host.replace(re, global.gitPort)
    });
});

// create new stash user
router.post('/create-user', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    let newuser = {};
    newuser.username = username;
    newuser.password = password;
    newuser.role = 'developer';
    newuser.status = 1;

    global.users.active.push(newuser);
    fs.writeFile('./app-data/users.json', JSON.stringify(global.users));

    res.status(200);
    res.end();
});

// delete stash user
router.get('/delete-user/:username', function (req, res) {
    let username = req.params.username;

    let activeUsers = [];
    for (let i in global.users.active) {
        if (global.users.active[i].username == username) {
            // delete user
            global.users.active[i].status = 0;
            global.users.deleted.push(global.users.active[i]);
        } else {
            activeUsers.push(global.users.active[i]);
        }
    }

    global.users.active = activeUsers;
    fs.writeFile('./app-data/users.json', JSON.stringify(global.users));

    res.status(200);
    res.end();
});

// delete repository action
router.post('/delete', function (req, res) {
    rimraf(global.stashDir + '/' + req.body.data + '.git', function () {
        console.log('Removed git repository :: ' + req.body.data + '.git');
    });

    res.status(200);
    res.end();
});

// fetch user repository permission details
router.get('/get-user-repo-perm/:reponame', function (req, res) {
    let reponame = req.params.reponame;

    if (!global.permissions.hasOwnProperty(reponame)) {
        //if there is no existing entry for this repo in permission DS, add a blank key
        //and save to file
        global.permissions[reponame] = [];
        fs.writeFile('./app-data/permissions.json', JSON.stringify(global.permissions));
    }

    res.json({
        permissions: global.permissions.reponame,
        users: global.users,
        perms: ['R', 'W'],
        reponame: reponame
    });
});

// update user repository permission details
router.post('/set-user-repo-perm', function (req, res) {
    let reponame = req.body.reponame;
    let perms = JSON.parse(req.body.perms);

    global.permissions[reponame] = perms;
    fs.writeFile('./app-data/permissions.json', JSON.stringify(global.permissions));

    res.status(200);
    res.end();
});

// fetch user list
router.get('/get-users', function (req, res) {
    res.json(global.users);
});

// fetch user password
router.get('/get-user-password/:username', function (req, res) {
    let username = req.params.username;
    for (let i in global.users.active) {
        if (global.users.active[i].username == username) {
            res.json(global.users.active[i].password);
        }
    }
    //fallback
    res.status(404);
    res.end();
});

// update user password
router.post('/set-user-password', function (req, res) {
    let resdata = req.body.data;
    for (let i in global.users.active) {
        if (global.users.active[i].username == resdata.username) {
            global.users.active[i].password = resdata.newpwd;
            fs.writeFile('./app-data/users.json', JSON.stringify(global.users));
            res.status(200);
        } else {
            res.status(404);
        }
    }
    res.end();
});

// get console output for a running service
router.get('/get-output/:service', function (req, res) {
    let service = req.params.service;
    switch (service) {
        case 'jenkins':
            var data = fs.readFileSync('./console_output/jenkins-output.html');
            break;
        default:
            res.send(404);
            res.end();
    }
    res.status(200);
    res.write(data);
    res.end();
});

module.exports = router;