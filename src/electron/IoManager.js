"use strict"

const fs = require('fs');
const { dialog } = require('electron')




class IOManager {



    /**
     * Saves a json object to disk
     * @param {string} sPath
     * @param {object} oContends  
     * @public
     */
    /*saveJSONToDisk = (sPath, oContends) => {
        

    }*/

    saveJSONToDisk = (oParams) => {
        dialog.showSaveDialog(
            {
                title: oParams.title,
                defaultPath: oParams.fileName,
                buttonLabel: oParams.saveLabel 
            }
        ).then((oResult) => {
            if (!oResult.canceled) {
                // write file to disk
                console.log("starting export of " + oResult.filePath + " ...");
                var sJson = JSON.stringify(oParams.fileContent);

                fs.writeFile(oResult.filePath, sJson, (oError) => {
                    if (oError) throw oError;

                    console.log("successfully exported " + oResult.filePath);
                    if (oParams.success) {
                        oParams.success();
                    }
                });
            } else {
                if (oParams.error) {
                    oParams.error();
                }         
            }
        });
    }
}


module.exports = IOManager;