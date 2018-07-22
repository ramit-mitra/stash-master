/* LOADING DEPENDENCIES */
const shell = require('shelljs');
const Convert = require('ansi-to-html');
const convert = new Convert();
const fs = require('fs');

/* Booting SonarQube */
/** Am booting it up using the windows bat file
 *  If your using linux/mac make appropriate changes
 * 
 *  https://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes
 */
var sonarqubeProcess = shell.exec('../sonarqube/bin/windows-x86-64/StartSonar.bat', {
    silent: true,
    async: true
});
var wstream = fs.createWriteStream('./console_output/sonar-output.html');
sonarqubeProcess.stdout.on('data', function (data) {
    // console.log(data);
    wstream.write(convert.toHtml(data));
});