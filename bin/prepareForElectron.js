const fs = require("fs");
const chalk = require("chalk");

// Update index.html
const sIndex = "./webapp/index.html";
sIndexHtml = fs.readFileSync(sIndex).toString();
sIndexHtml = sIndexHtml.replace('"kellojo.m": "./resources/kellojo/m"', '"kellojo.m": "../lib/kellojo.m/src/kellojo/m"');
fs.writeFileSync(sIndex, sIndexHtml);
console.log(chalk.green("Updated index.html"));

// copy over themes
const aThemes = ["sap_fiori_3", "sap_fiori_3_dark"];
const aFiles = ["library-RTL.css", "library.css", "library-parameters.json"];

console.log(chalk.underline("Copying themes"));
const copyThemeFile = function (sTheme, sFile) {
    console.log(`   Copying ${sTheme} ${sFile}`);
    fs.copyFileSync(
        `./lib/kellojo.m/dist/resources/kellojo/m/themes/${sTheme}/${sFile}`,
        `lib/kellojo.m/src/kellojo/m/themes/${sTheme}/${sFile}`
    );
}

aThemes.forEach((sTheme) => {
    aFiles.forEach((sFile) => {
        copyThemeFile(sTheme, sFile);
    });
});

console.log(chalk.green("Done!"));
