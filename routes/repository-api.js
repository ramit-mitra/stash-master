const express = require('express');
const rimraf = require('rimraf');
const shell = require('shelljs');
const Convert = require('ansi-to-html');
const fs = require('fs');
var router = express.Router();
const convert = new Convert();

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires GIT to be installed');
    shell.exit(1);
}

/* Repository Dashboard API routes */
// get repository details
router.get('/get-repository-details/:reponame', function (req, res) {
    let reponame = req.params.reponame;
    let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // find the branches available for the repository
    let bch = [];
    let branches = shell.exec(headCmd + "git branch -a").stdout;
    branches = branches.split("\n");
    for (let i in branches) {
        let str = ((branches[i].replace("*", "")).trim());
        if (str != "")
            bch.push(str)
    }

    //

    res.json({
        branches: bch
    });
});

module.exports = router;