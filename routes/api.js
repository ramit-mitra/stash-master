const express = require('express');
const rimraf = require('rimraf');
const fs = require('fs');
var router = express.Router();

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
    rimraf('./' + global.stashDir + '/' + req.body.data + '.git', function () {
        console.log('Removed git repository :: ' + req.body.data + '.git');
    });

    res.status(200);
    res.end();
});

// fetch user repository permission details
router.get('/get-user-repo-perm/:reponame', function (req, res) {
    let reponame = req.params.reponame;
    if (!global.permissions.reponame) {
        global.permissions.reponame = [];
    }

    //finally
    fs.writeFile('./app-data/permissions.json', JSON.stringify(global.permissions));

    res.json({
        permissions: global.permissions.reponame,
        users: global.users,
        perms: ['R', 'W']
    });
});

// fetch user list
router.get('/get-users', function (req, res) {
    res.json(global.users);
});

module.exports = router;