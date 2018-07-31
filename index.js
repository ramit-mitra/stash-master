/*!
 * stash-master
 * Copyright(c) 2018 Ramit Mitra
 * MIT Licensed
 */

'use strict';
const fs = require('fs');
const path = require('path');

/**
 *  GLOBAL APP CONSTANTS 
 */
global.gitPort = process.env.GITPORT || 5055;
global.appPort = process.env.APPPORT || 2323;
global.stashDir = path.join(__dirname, 'git-stash');
// LOAD USERs & REPOSITORY PERMISSION DATA
global.users = JSON.parse(fs.readFileSync('./app-data/users.json'));
global.permissions = JSON.parse(fs.readFileSync('./app-data/permissions.json'));
global.prs = JSON.parse(fs.readFileSync('./app-data/pr.json'));

/**
 * STASH MASTER INTEGRATION
 */
require('./services/stash-master');

/**
 * GIT STASH INTEGRATION
 */
require('./services/stash');

/**
 * JENKINS INTEGRATION
 */
require('./services/jenkins');

/**
 * SONARQUBE INTEGRATION
 */
// require('./services/sonarqube');

module.exports = {};