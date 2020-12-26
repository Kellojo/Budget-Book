sap.ui.define([
    "sap/m/StandardListItem",
    "sap/m/StandardListItemRenderer"
], function (StandardListItem, StandardListItemRenderer) {
    var Deleter = StandardListItem.extend("kellojo.m.Deleter", {
        metadata: {
            properties: {
                negative: {
                    type: "boolean",
                    defaultValue: true
                }
            }
        },

        renderer: StandardListItemRenderer
    });

    var DeleterProto = Deleter.prototype;

    DeleterProto.init = function() {
        StandardListItem.prototype.init.apply(this, arguments);
        this.addStyleClass("kellojoMDeleter");
    }


    return Deleter;
});