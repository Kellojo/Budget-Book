const chokidar = require('chokidar');
const watchDir = "../";

const lessBuilder = "npm run build-styles";
const libBuilder = "sh cd ./src/webapp/lib/kellojo.m/; grunt --gruntfile ./src/webapp/lib/kellojo.m/Gruntfile.js";
 
//start watching
const watcher = chokidar.watch(watchDir, {
    ignoreInitial: true,
});
watcher.on('all', (event, path) => {

    //check for less file changes
    console.log(path);
    if (path.includes(".less")) {
        console.log("Rebuilding less due to \"" + event + "\" -> " + path);
        buildLess();
    }
});

console.log("Auto less builder running...\n\n");


/**
 * Builds the themes
 * @public
 */
function buildLess() {
    const exec = require('child_process').exec;
    var themeBuilder = exec(lessBuilder,
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
    });
    var themeBuilder = exec(libBuilder,
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
    });
}