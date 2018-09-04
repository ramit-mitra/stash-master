/* LOADING DEPENDENCIES */
const fs = require('fs');
const path = require('path');
const server = require('node-git-server');
var socketIO = null;

/**
 *  GIT STASH
 */
const repos = new server(global.stashDir, {
    autoCreate: true,
    authenticate: (type, repo, user, next) => {
        return new Promise((resolve, reject) => {
            //push to server operation
            if (type == 'push') {
                user((username, password) => {
                    //SU can create repositories
                    //validate if SU and create repository
                    if (global.masterusr == username && global.masterpwd == password) {
                        //SU authorised
                        return resolve();
                    }
                    //else if not SU...
                    //check if permission data exists
                    if (!global.permissions.hasOwnProperty(repo)) {
                        //if there is no existing entry for this repo in permission DS, add a blank key
                        //and save to file
                        global.permissions[repo] = [];
                        fs.writeFile('./app-data/permissions.json', JSON.stringify(global.permissions));
                        //display an error to user to update permissions
                        return reject("You donot have permission to access this repository. Please update the permissions for this repository and try again later.");
                    } else {
                        //validate if user has write permission
                        for (i in global.permissions[repo]) {
                            if (global.permissions[repo][i].username == username && global.permissions[repo][i].writeP) {
                                //user has write permission
                                //validate user password
                                for (j in global.users.active) {
                                    if (global.users.active[j].username == username && global.users.active[j].password == password) {
                                        //user authorised
                                        return resolve();
                                    }
                                }
                            }
                        }
                        //user doesn't have permission or invalid password
                        //display an error to user to update permissions
                        return reject("Invalid credentials, or missing permission, please consult your Stash Admin.");
                    }
                });
            } else if (type == 'fetch') {
                user((username, password) => {
                    //SU can fetch repositories
                    //validate if SU and fetch repository
                    if (global.masterusr == username && global.masterpwd == password) {
                        //SU authorised
                        return resolve();
                    }
                    //else if not SU...
                    //clone & pull operation
                    //check if permission data exists
                    if (!global.permissions.hasOwnProperty(repo)) {
                        //if there is no existing entry for this repo in permission DS, add a blank key
                        //and save to file
                        global.permissions[repo] = [];
                        fs.writeFile('./app-data/permissions.json', JSON.stringify(global.permissions));
                        //display an error to user to update permissions
                        return reject("You donot have permission to access this repository. Please update the permissions for this repository and try again later.");
                    } else {
                        //validate if user has read permission
                        for (i in global.permissions[repo]) {
                            if (global.permissions[repo][i].username == username && global.permissions[repo][i].readP) {
                                //user has read permission
                                //validate user password
                                for (j in global.users.active) {
                                    if (global.users.active[j].username == username && global.users.active[j].password == password) {
                                        //user authorised
                                        return resolve();
                                    }
                                }
                            }
                        }
                        //user doesn't have permission or invalid password
                        //display an error to user to update permissions
                        return reject("Invalid credentials, or missing permission, please consult your Stash Admin.");
                    }
                });
            } else {
                //unknown operation, denounce
                return reject("Invalid operation on repository, please consult your Stash Admin.");
            }
        });
    }
});
/* EVENT HANDLERS */
repos.on('push', (push) => {
    console.log(`push ${push.repo}/${push.commit} (${push.branch})`);
    if (socketIO) {
        socketIO.emit('repoevents', `An user pushed to <kbd>${push.branch}</kbd> branch of repository <kbd>${push.repo}</kbd>`);
    }
    push.accept();
});
repos.on('fetch', (fetch) => {
    console.log(`fetch ${fetch.commit}`);
    fetch.accept();
});
/* SERVER PORT */
repos.listen(gitPort, () => {
    console.log(`GIT SERVER running on http://localhost:${gitPort}`)
});

module.exports = {
    /* this init is used to integrate socket.io with stash events */
    'init': function (io) {
        /* Pushing realtime events */
        let countUsers = 0;
        // on connect log to console
        io.on('connection', function (socket) {
            socketIO = socket;
            console.log('New user connected, total pool : ' + (++countUsers));
            socket.on('disconnect', function () {
                console.log('An user disconnected, total pool : ' + (--countUsers));
            });
        });
    }
};