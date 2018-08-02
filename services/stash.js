/* LOADING DEPENDENCIES */
const fs = require('fs');
const path = require('path');
const server = require('node-git-server');

/**
 *  GIT STASH
 */
const repos = new server(global.stashDir, {
    autoCreate: true,
    authenticate: (type, repo, user, next) => {

        console.log(1);

        //push to server operation
        if (type == 'push') {
            return new Promise((resolve, reject) => {

                console.log(2);

                user((username, password) => {
                    //check if permission data exists
                    if (!global.permissions.hasOwnProperty(repo)) {

                        console.log(3);

                        //if there is no existing entry for this repo in permission DS, add a blank key
                        //and save to file
                        global.permissions[repo] = [];
                        fs.writeFile('./app-data/permissions.json', JSON.stringify(global.permissions));
                        //display an error to user to update permissions
                        return reject("You donot have permission to access this repository. Please update the permissions for this repository and try again later.");
                    } else {

                        console.log(4);

                        //validate if user has write permission
                        for (i in global.permissions[repo]) {
                            if (global.permissions[repo][i].username == username && global.permissions[repo][i].writeP) {

                                console.log(5);

                                //user has write permission
                                //validate user password
                                for (j in global.users.active) {
                                    if (global.users.active[j].username == username && global.users.active[j].password == password) {
                                        console.log(6);
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
            });
        } else if (type == 'fetch') {
            //clone & pull operations
            next();
        } else {
            next();
        }
    }
});
/* EVENT HANDLERS */
repos.on('push', (push) => {
    console.log(`push ${push.repo}/${push.commit} (${push.branch})`);
    console.log(push)
    push.accept();
});

repos.on('fetch', (fetch) => {
    console.log(`fetch ${fetch.commit}`);
    console.log(fetch)
    fetch.accept();
});

repos.listen(gitPort, () => {
    console.log(`GIT SERVER running on http://localhost:${gitPort}`)
});

module.exports = {};