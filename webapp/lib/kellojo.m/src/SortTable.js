sap.ui.define([
    "sap/m/Table",
], function (Table) {
    return Table.extend("kellojo.m.SortTable", {
        metadata: {
            properties: {
                
            },

            aggregations: {
                
            },

            events: {
                
            },

            defaultAggregation: "content"
        },

        init: function() {
            Table.prototype.init.apply(this, arguments);
        },


        // ---------------------------
        // Getters & Setters
        // ---------------------------

        

        // ---------------------------
        // Renderer
        // ---------------------------


    })}
);