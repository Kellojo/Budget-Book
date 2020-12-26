sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
        return Control.extend("kellojo.m.Wrapper", {
            metadata: {

                aggregations: {
                    content: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    }
                },

                defaultAggregation: "content"
            },

            renderer: function (oRm, oControl) {
                
                oRm.write("<div");
                oRm.writeControlData(oControl);
                oRm.addClass("kellojoM-wrapper");
                oRm.writeClasses(oControl);
                oRm.write(">");

                var aContent = oControl.getContent();
                aContent.forEach((oControl) => {
                    oRm.renderControl(oControl);
                })

                oRm.write("</div>");
            }
        });
    }
);