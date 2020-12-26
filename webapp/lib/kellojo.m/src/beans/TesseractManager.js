sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/base/Log"
], function (ManagedObject, Log) {
    "use strict";

    var oSchema = ManagedObject.extend("kellojo.m.beans.TesseractManager", {
        metadata: {

        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {

    };


    SchemaProto.recognizeText = async function(sImageBase64, onProgress, sLanguage) {
        sLanguage = sLanguage || "eng";
        
        var oResult = await Tesseract.recognize(sImageBase64, sLanguage, {
            logger: (oProgress) => {
                onProgress(oProgress.status, oProgress.progress);
            }
        });

        return oResult.data.text;
    };


    return oSchema;
});