/*!
 * stash-master
 * Copyright(c) 2018 Ramit Mitra
 * MIT Licensed
 */

'use strict';
const fs = require('fs');
const path = require('path');
const randomstring = require('randomstring');

/**
 *  GLOBAL APP CONSTANTS 
 */
global.gitPort = process.env.GITPORT || 5055;
global.appPort = process.env.APPPORT || 2323;
global.stashDir = process.env.STASHDIR || path.join(__dirname, 'git-stash');

// LOAD USERs & REPOSITORY PERMISSION DATA
global.users = JSON.parse(fs.readFileSync('./app-data/users.json'));
global.permissions = JSON.parse(fs.readFileSync('./app-data/permissions.json'));
global.prs = JSON.parse(fs.readFileSync('./app-data/pr.json'));
// CREATING A SU USER AND PASSWORD TO PERFORM SU OPERATIONS ON REPOSITORY
global.masterusr = randomstring.generate();
global.masterpwd = randomstring.generate();

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

module.exports = {};