sap.ui.define([
    "sap/ui/unified/Currency",
    "sap/ui/unified/CurrencyRenderer"
], function (CurrencyBase, CurrencyRenderer) {
    var Currency = CurrencyBase.extend("kellojo.m.Currency", {
        metadata: {
            properties: {
                negative: {
                    type: "boolean",
                    defaultValue: true
                }
            }
        },

        renderer: CurrencyRenderer
    });

    var CurrencyProto = Currency.prototype;

    CurrencyProto.init = function() {
        CurrencyBase.prototype.init.apply(this, arguments);
        this.setMaxPrecision(2);
        this.setUseSymbol(true);
        this.addStyleClass("kellojoMCurrency");
        this.setNegative(this.getNegative());
    }

    CurrencyProto.setNegative = function(bNegative) {
        this.setProperty("negative", bNegative);
        this.toggleStyleClass("kellojoMCurrency-flg-negative", bNegative);
    }


    return Currency;
});