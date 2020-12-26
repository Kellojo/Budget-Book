
sap.ui.define([
    "sap/ui/core/XMLComposite",
    "sap/ui/core/Core",
    "sap/m/StandardListItem"
], function (XMLComposite, Core, StandardListItem) {
    var NoData = XMLComposite.extend("kellojo.m.NoData", {
        metadata: {
            properties: {
                text: { type: "string" },
                icon: { type: "string" }
            },
        },

        fragment: "kellojo.m.fragment.NoData"
    });

    var NoDataProto = NoData.prototype;

    NoDataProto.init = function() {
        XMLComposite.prototype.init.apply(this,arguments);

        this.addStyleClass("kellojoMNoData");
    }

    
    return NoData;
});