"use strict"

const fs = require('fs');
const { dialog } = require('electron')




class IOManager {

    /**
     * Saves a json object to disk
     * @param {object} oParams
     * @public
     */
    saveJSONToDisk = (oParams, oWindow) => {
        dialog.showSaveDialog( oWindow,
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
            } else if (oParams.error) {
                oParams.error();       
            }
        });
    }

    /**
     * Loads a json from disk
     * @param {object} oParams
     * @public
     */
    loadJSONFromDisk = (oParams, oWindow) => {
        const fnCallError = function(sErrorMessage, sErrorDetail) {
            if (oParams.error) {
                oParams.error(sErrorMessage, sErrorDetail);
            }
        }

        dialog.showOpenDialog(oWindow, {
            title: oParams.title,
            buttonLabel: oParams.buttonLabel,
            filters: [
                { name: 'BudgetP Save Files', extensions: ['json'] },
            ],
            properties: ["openFile"]
        }).then((oResult) => {
            var sErrorMessage = "";

            if (!oResult.canceled) {
                var aPaths = oResult.filePaths;
                if (aPaths.length < 1) {
                    fnCallError("importErrorNoFileSelected");
                    return;
                }

                // read file from disk
                console.log("starting import of " + aPaths[0] + " ...");
                fs.readFile(aPaths[0], (oError, oBuffer) => {
                    if (oError) {
                        fnCallError(oError.message);
                        return;
                    }
                    console.log("successfully imported " + aPaths[0]);
                    console.log("parsing " + aPaths[0] + " ...");

                    try {
                        var oData = JSON.parse(oBuffer);
                        console.log("successfully parsed import file");
                        if (oParams.success) {
                            oParams.success(oData);
                        }
                    } catch (error) {
                        fnCallError("importErrorParseException", error);
                        sErrorMessage = "The file has an invalid format."
                    }
                    
                });
            } else {
                fnCallError("importErrorCanceled");
            }
        });
    }
}


module.exports = IOManager;