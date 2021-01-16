const fs = require("fs");

const aThemes = ["sap_fiori_3", "sap_fiori_3_dark"];
const aFiles = ["library-RTL.css", "library.css", "library-parameters.json"];

const copyThemeFile = function (sTheme, sFile) {
    console.log(`Deleting ${sTheme} ${sFile}`);

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
