sap.ui.define([
    "sap/ui/core/XMLComposite"
], function (XMLComposite) {
    var AppTitle = XMLComposite.extend("kellojo.m.AppTitle", {
        metadata: {
            properties: {

                title: {
                    type: "string",
                    defaultValue: ""
                },
                version: {
                    type: "string",
                    defaultValue: ""
                }

            }
        },

        fragment: "kellojo.m.fragment.AppTitle"
    });

    var AppTitleProto = AppTitle.prototype;


    return AppTitle;
});