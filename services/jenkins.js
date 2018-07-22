/* LOADING DEPENDENCIES */
const shell = require('shelljs');
const Convert = require('ansi-to-html');
const convert = new Convert();
const fs = require('fs');

/* Booting Jenkins */
if (!shell.which('java')) {
  shell.echo('Sorry, this script requires minimum JAVA 8');
  shell.exit(1);
}
// start jenkins server async
// listen to console output
// store to a html file for easy rendering
var jenkinsProcess = shell.exec('java -jar ./jenkins/jenkins.war', {
  silent: true,
  async: true
});
var wstream = fs.createWriteStream('./console_output/jenkins-output.html');
jenkinsProcess.stdout.on('data', function (data) {
  // console.log(data);
  wstream.write(convert.toHtml(data));
  /* ... do something with data ... */
});

module.exports = {};