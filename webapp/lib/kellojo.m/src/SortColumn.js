sap.ui.define([
    "sap/m/Column",
], function (Column) {
    return Column.extend("kellojo.m.SortColumn", {
        metadata: {
            properties: {
                sortPath: {
                    type: "string"
                }
            },

            aggregations: {
                
            },

            events: {
                
            },
        },

        init: function() {
            Column.prototype.init.apply(this, arguments);
        },


        // ---------------------------
        // Getters & Setters
        // ---------------------------

        


    })}
);