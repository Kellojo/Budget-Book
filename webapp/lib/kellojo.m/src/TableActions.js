sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
        return Control.extend("kellojo.m.TableActions", {
            metadata: {
                properties: {
                    
                },

                aggregations: {
                    left: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    },
                    main: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    },
                    right: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    }
                },

                defaultAggregation: "left"
            },

            init: function() {
                
            },

            renderer: function (oRm, oControl) {
                
                oRm.write("<div");
                oRm.writeControlData(oControl);
                oRm.addClass("kellojoM-tableActions");
                oRm.writeClasses(oControl);
                oRm.write(">");

                    oRm.write("<div class='kellojoM-tableActions-left'>");
                        var aLeft = oControl.getLeft();
                        aLeft.forEach(oControl => {
                            oRm.renderControl(oControl);
                        });
                    oRm.write("</div>");

                    oRm.write("<div class='kellojoM-tableActions-main'>");
                        var aMain = oControl.getMain();
                        aMain.forEach(oControl => {
                            oRm.renderControl(oControl);
                        });
                    oRm.write("</div>");

                    oRm.write("<div class='kellojoM-tableActions-right'>");
                        var aRight = oControl.getRight();
                        aRight.forEach(oControl => {
                            oRm.renderControl(oControl);
                        });
                    oRm.write("</div>");


                oRm.write("</div>");
            }
        });
    }
);