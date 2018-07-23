/* LOADING DEPENDENCIES */
const fs = require('fs');
const path = require('path');
const server = require('node-git-server');

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
    console.log(`GIT SERVER running on http://localhost:${gitPort}`)
});

module.exports = {};