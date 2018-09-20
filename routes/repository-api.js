const express = require('express');
const shell = require('shelljs');
const Convert = require('ansi-to-html');
const fs = require('fs');
const path = require('path');
const randomstring = require('randomstring');
const dateFormat = require('dateformat');
var router = express.Router();
const convert = new Convert();

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires GIT to be installed');
    shell.exit(1);
}

/* Repository Dashboard API routes */
//create blank repository
router.get('/create-repository/:reponame', function (req, res) {
    let reponame = req.params.reponame;
    let cmd = "cd " + global.stashDir + " && git init --bare " + reponame + ".git";
    shell.exec(cmd, function (code, stdout, stderr) {
        if (!code) {
            res.status(200);
        } else {
            res.status(500);
        }
        res.end();
    });
});

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
    let ccount = shell.exec(headCmd + " git rev-list --all --count").stdout;

    res.json({
        branches: bch,
        ccount: ccount
    });
});

// create new branch
router.get('/create-branch/:reponame/:branchname', function (req, res) {
    let reponame = req.params.reponame;
    let branchname = req.params.branchname;

    // clone repository and create the branch
    // 1. checkout the code to a temporary dir
    let re = new RegExp(global.appPort, "g");
    let host = req.headers.host.replace(re, global.gitPort);
    // 2. validate if working in http/https
    let cmd = 'git clone ';
    if (req.secure)
        cmd += 'https://';
    else
        cmd += 'http://';
    let targetdir = './temp/' + reponame;
    cmd += global.masterusr + ':' + global.masterpwd + '@' + host + '/' + reponame + '.git ' + targetdir;
    // 3. check if the temp directory exists, else create directory
    if (!shell.test('-d', './temp/')) {
        shell.mkdir('./temp/');
    }
    // 4. checkout code to temp directory
    shell.exec(cmd, function (code, stdout, stderr) {
        // 5. perform merge operation
        cmd = 'cd ' + targetdir + ' && ';
        cmd += 'git branch -c ' + branchname + '&& ';
        cmd += 'git push origin ' + branchname
        shell.exec(cmd, function (code, stdout, stderr) {
            // 6. delete the clonned directory 
            shell.exec('rm -rf ' + targetdir);
            if (!code) {
                res.status(200);
            } else {
                res.status(500);
            }
            res.end();
        });
    });
});

// get commit history for a branch
router.get('/get-commit-history/:reponame/:branchname', function (req, res) {
    let reponame = req.params.reponame;
    let branchname = req.params.branchname;

    let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // fetch custom formatted commit history
    let history = shell.exec(headCmd + 'git log --format="*#*%nCommit %H%nAuthor: %aN <%ae>%nDate: %ad%nComitted approx %ar%n%nCommit title: %s%nDetails: %b%n%N" ' + branchname).stdout;
    // let history = shell.exec(headCmd + 'git log --format="*#*%n$1$Commit %H$2$%nAuthor: %aN <%ae>%nDate: %ad%nComitted approx %ar%n%nCommit title: %s%nDetails: %b%n%N" ' + branchname).stdout;
    history = history.split('*#*');

    let historyL = [];
    for (let i in history) {
        let str = ((history[i].replace(/\n/g, "<br>")).trim());
        // str = ((history[i].replace(/$1$/g, "<span class='font-weight-bold'>")).trim());
        // str = ((history[i].replace(/$2$/g, "</span>")).trim());
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
    let headCmd = 'cd ' + global.stashDir + ' && cd ' + reponame + '.git && ';

    // merge branches and remove PR from actionable list
    let prset = [];
    for (i in global.prs[reponame]) {
        if (global.prs[reponame][i].token != token) {
            prset.push(global.prs[reponame][i]);
        } else {
            // merge branches task and things get complex here since merge cannot be performed on remote
            // 1. checkout the code to a temporary dir
            let re = new RegExp(global.appPort, "g");
            let host = req.headers.host.replace(re, global.gitPort);
            let prto = global.prs[reponame][i].prto;
            let prfrom = global.prs[reponame][i].prfrom;

            // 2. validate if working in http/https
            let cmd = 'git clone ';
            if (req.secure)
                cmd += 'https://';
            else
                cmd += 'http://';
            let targetdir = './temp/' + reponame;
            cmd += global.masterusr + ':' + global.masterpwd + '@' + host + '/' + reponame + '.git ' + targetdir;

            // 3. check if the temp directory exists, else create directory
            if (!shell.test('-d', './temp/')) {
                shell.mkdir('./temp/');
            }

            // 4. checkout code to temp directory
            shell.exec(cmd, function (code, stdout, stderr) {
                // 5. perform merge operation
                cmd = 'cd ' + targetdir + ' && ';
                cmd += 'git checkout ' + prfrom + ' && ';
                cmd += 'git checkout ' + prto + ' && ';
                cmd += 'git pull && ';
                cmd += 'git merge ' + prfrom + ' && ';
                cmd += 'git push'
                shell.exec(cmd, function (code, stdout, stderr) {
                    // 6. delete the clonned directory 
                    shell.exec('rm -rf ' + targetdir);
                    if (!code) {
                        res.status(200);
                        // finally
                        global.prs[reponame] = prset;
                        fs.writeFile('./app-data/pr.json', JSON.stringify(global.prs));
                    } else {
                        res.status(500);
                    }
                    res.end();
                });
            });
        }
    }
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

// fetch git sample hooks
router.get('/fetch-sample-webhooks/:reponame', function (req, res) {
    let reponame = req.params.reponame;
    let hookpath = global.stashDir + '/' + reponame + '.git/hooks/';
    let files = fs.readdirSync(hookpath);
    let filelist = [];
    for (var i in files) {
        if (path.extname(files[i]) == '.sample') {
            let tcontent = fs.readFileSync(hookpath + files[i], 'utf8');
            filelist.push({
                filename: files[i],
                content: tcontent
            })
        }
    }

    res.json({
        files: filelist
    });
});

// create new webhook
router.get('/create-webhook/:reponame/:hook', function (req, res) {
    let reponame = req.params.reponame;
    let hook = req.params.hook;
    let hookpath = global.stashDir + '/' + reponame + '.git/hooks/';
    if (!fs.existsSync(hookpath + hook)) {
        // create file
        fs.appendFile(hookpath + hook, '#!/bin/sh', function (err) {
            if (err) {
                res.status(500);
                res.end();
            } else {
                res.json({
                    data: '#!/bin/sh'
                });
            }
        });
    } else {
        res.status(500);
        res.end();
    }
});

//create webhook
router.post('/save-webhook', function (req, res) {
    let reponame = req.body.reponame;
    let hook = req.body.hookname;
    let content = req.body.content;
    let hookpath = global.stashDir + '/' + reponame + '.git/hooks/';

    if (fs.existsSync(hookpath + hook)) {
        fs.writeFile(hookpath + hook, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

    res.status(200);
    res.end();
});

module.exports = router;