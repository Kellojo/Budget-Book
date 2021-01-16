const fs = require("fs");

const aThemes = ["sap_fiori_3", "sap_fiori_3_dark"];
const aFiles = ["library-RTL.css", "library.css", "library-parameters.json"];

const copyThemeFile = function (sTheme, sFile) {
    console.log(`Copying ${sTheme} ${sFile}`);
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





