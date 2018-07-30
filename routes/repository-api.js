const express = require('express');
const rimraf = require('rimraf');
const shell = require('shelljs');
const Convert = require('ansi-to-html');
const fs = require('fs');
const randomstring = require('randomstring');
const dateFormat = require('dateformat');
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

    // total commits
    let ccount = shell.exec("git rev-list --all --count").stdout;

    res.json({
        branches: bch,
        ccount: ccount
    });
});

// create new branch
router.get('/create-branch/:reponame/:branchname', function (req, res) {
    let reponame = req.params.reponame;
    let branchname = req.params.branchname;

    let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // create branch
    shell.exec(headCmd + "git branch -c " + branchname).stdout;

    res.status(200);
    res.end();
});

// get commit history for a branch
router.get('/get-commit-history/:reponame/:branchname', function (req, res) {
    let reponame = req.params.reponame;
    let branchname = req.params.branchname;

    let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // fetch custom formatted commit history
    let history = shell.exec(headCmd + 'git log --format="*#*%ncommit %H%nAuthor: %aN <%ae>%nDate: %ad%nComitted approx %ar%n%nCommit title: %s%nDetails: %b%n%N" ' + branchname).stdout;
    history = history.split('*#*');

    let historyL = [];
    for (let i in history) {
        let str = ((history[i].replace(/\n/g, "<br>")).trim());
        if (str != "")
            historyL.push(str)
    }

    res.json({
        data: historyL
    });
});

// get pr list for present repository
router.get('/get-prs/:reponame', function (req, res) {
    let reponame = req.params.reponame;

    if (!global.prs.hasOwnProperty(reponame)) {
        // create a key with reponame to hold PRs
        global.prs[reponame] = [];
        fs.writeFile('./app-data/pr.json', JSON.stringify(global.prs));
    }

    res.json({
        prs: global.prs[reponame],
        cprs: global.prs[reponame].length
    });
});

// get pr diff between two branches
router.get('/get-pr-diff/:reponame/:prfrom/:prto', function (req, res) {
    let reponame = req.params.reponame;
    let prfrom = req.params.prfrom;
    let prto = req.params.prto;

    let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // fetch pr diff between branches
    let diff = shell.exec(headCmd + 'git diff --minimal ' + prfrom + ' ' + prto).stdout;
    diff = (diff.replace(/\n/g, "<br>")).trim();

    res.json({
        data: convert.toHtml(diff)
    });
});

// create a new PR
router.post('/raise-pr', function (req, res) {
    let reponame = req.body.reponame;
    let prfrom = req.body.prfrom;
    let prto = req.body.prto;
    let now = new Date();

    if (!global.prs.hasOwnProperty(reponame)) {
        // create a key with reponame to hold PRs
        global.prs[reponame] = [];
    }
    // create new pr
    global.prs[reponame].push({
        prfrom: prfrom,
        prto: prto,
        date: dateFormat(now),
        token: randomstring.generate()
    });
    fs.writeFile('./app-data/pr.json', JSON.stringify(global.prs));

    res.status(200);
    res.end();
});

// approve PR
router.get('/approve-pr/:reponame/:token', function (req, res) {
    let reponame = req.params.reponame;
    let token = req.params.token;

    // //merge action
    // let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // // fetch pr diff between branches
    // let diff = shell.exec(headCmd + 'git diff --minimal ' + prfrom + ' ' + prto).stdout;
    // diff = (diff.replace(/\n/g, "<br>")).trim();

    // // remove pr from stack
    // let prset = [];
    // for (i in global.prs[reponame]) {
    //     if (global.prs[reponame][i].token != token) {
    //         prset.push(global.prs[reponame][i]);
    //     }
    // }
    // // finally
    // global.prs[reponame] = prset;
    // fs.writeFile('./app-data/pr.json', JSON.stringify(global.prs));

    res.status(200);
    res.end();
});

// delete PR
router.get('/discard-pr/:reponame/:token', function (req, res) {
    let reponame = req.params.reponame;
    let token = req.params.token;

    let prset = [];
    for (i in global.prs[reponame]) {
        if (global.prs[reponame][i].token != token) {
            prset.push(global.prs[reponame][i]);
        }
    }
    // finally
    global.prs[reponame] = prset;
    fs.writeFile('./app-data/pr.json', JSON.stringify(global.prs));

    res.status(200);
    res.end();
});

module.exports = router;