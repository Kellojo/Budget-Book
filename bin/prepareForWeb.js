const fs = require("fs");
const chalk = require("chalk");

// update index.html
const sIndex = "./webapp/index.html";
sIndexHtml = fs.readFileSync(sIndex).toString();
sIndexHtml = sIndexHtml.replace('"kellojo.m": "../lib/kellojo.m/src/kellojo/m"', '"kellojo.m": "./resources/kellojo/m"');
fs.writeFileSync(sIndex, sIndexHtml);
console.log(chalk.green("Updated index.html"));

// delete themes
const aThemes = ["sap_fiori_3", "sap_fiori_3_dark"];
const aFiles = ["library-RTL.css", "library.css", "library-parameters.json"];

console.log(chalk.underline("Deleting themes"));
const copyThemeFile = function (sTheme, sFile) {
    console.log(`   Deleting ${sTheme} ${sFile}`);

    try {
        fs.unlinkSync(`lib/kellojo.m/src/kellojo/m/themes/${sTheme}/${sFile}`);
    } catch (error) {

    }
}

aThemes.forEach((sTheme) => {
    aFiles.forEach((sFile) => {
        copyThemeFile(sTheme, sFile);
    });
});

console.log(chalk.green("Done!"));