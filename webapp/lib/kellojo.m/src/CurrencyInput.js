sap.ui.define([
    "sap/m/Input",
    "sap/m/InputRenderer",
    "kellojo/m/thirdparty/autonumeric"
], function (Control, InputRenderer, autonumeric) {
        return Control.extend("kellojo.m.CurrencyInput", {
            metadata: {
                properties: {
                    numericValue: { type: "Number" }
                }
            },

            init: function() {
                
            },

            renderer: InputRenderer,

            onAfterRendering: function() {
                var oInput = this._$input;

                if (!!oInput) {
                    var oElem = oInput.context;
                    this.m_oAutoNumeric = new AutoNumeric("#" + oElem.id, {
                        currencySymbol : ' €',
                        decimalCharacter : ',',
                        digitGroupSeparator : '.',
                        currencySymbolPlacement: "s"
                    });

                    oInput.change(function(oEvent) {
                        this.setProperty("numericValue", this.getNumericValue(), true);
                    }.bind(this));
                }
            },

            getNumericValue: function() {
                if (this.m_oAutoNumeric) {
                    return this.m_oAutoNumeric.getNumber();
                } else {
                    return 0;
                }
            },

            setNumericValue: function(iValue) {
                if (this.m_oAutoNumeric) {
                    this.m_oAutoNumeric.setValue(iValue);
                    this.setProperty("numericValue", iValue, true);
                }
            }
        });
    }
);