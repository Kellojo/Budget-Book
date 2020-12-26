sap.ui.define([
    "sap/m/Label",
    "sap/m/LabelRenderer"
], function (Control, LabelRenderer) {
        return Control.extend("kellojo.m.AnimatedLabel", {
            metadata: {
                properties: {
                    collapsed: {
                        type: "boolean",
                        defaultValue: false
                    }
                }
            },

            renderer: LabelRenderer,

            init: function() {
                Control.prototype.init.apply(this, arguments);
                this.addStyleClass("kellojoMAnimatedLabel");
            },

            setCollapsed: function(bCollapsed) {
                this.toggleStyleClass("kellojoMAnimatedLabel-flg-collapsed", bCollapsed);
                this.setProperty("collapsed", bCollapsed, true);
            }



        });
    }
);
