sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
        return Control.extend("kellojo.m.Divider", {
            metadata: {
                properties: {
                    onlyBorder: {
                        type: "boolean",
                        defaultValue: false
                    }
                }
            },

            setOnlyBorder: function(bValue) {
                this.toggleStyleClass("kellojoM-divider-flg-onlyBorder", bValue);
            },

            renderer: function (oRm, oControl) {

                oRm.write("<div");
                oRm.writeControlData(oControl);
                oRm.addClass("kellojoM-divider");
                oRm.writeClasses(oControl);
                oRm.write("></div>");
            }
        });
    }
);
