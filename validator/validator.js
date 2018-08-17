/* LOADING DEPENDENCIES */
const shell = require('shelljs');
const fs = require('fs');

/**
 *  Validate if stash directory is present, else create it
 */
if (!fs.existsSync(global.stashDir)) {
  shell.exec('mkdir ' + global.stashDir);
}
/**
 *  Validate if app-data files are present, else create it
 */
if (!fs.existsSync('../app-data/users.json')) {
  shell.exec('echo "{}" > ../app-data/users.json');
}
if (!fs.existsSync('../app-data/permissions.json')) {
  shell.exec('echo "{}" > ../app-data/permissions.json');
}
if (!fs.existsSync('../app-data/pr.json')) {
  shell.exec('echo "{}" > ../app-data/pr.json');
}
