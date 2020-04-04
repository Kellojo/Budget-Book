sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/budgetBook/manager/Formatter",
    "sap/ui/core/ValueState"
], function (Controller, Formatter, ValueState) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.ControllerBase", {
        formatter: Formatter
    }),
        ControllerProto = Controller.prototype;

    ControllerProto.onInit = function() {
        this.getOwnerComponent().getRouter().attachRouteMatched(this.onRouteMatched, this);
    };

    ControllerProto.onExit = function () {
        this.getOwnerComponent().getRouter().detachRouteMatched(this.onRouteMatched, this);
    }

    ControllerProto.onRouteMatched = function (event) {
        //Check whether this page is matched.
        if (event.getParameter("name") !== this.ROUTE_NAME) {
            return;
        }

        this.onPageEnter(event);
    };
    

    // -----------------------------
    // Form Validation
    // -----------------------------

    /**
     * Validates the form controls, only works, if a property called "this.m_aFormFields" has been created
     * @returns {boolean}
     * @protected
     */
    ControllerProto.validateControls = function() {
        var aFields = this.m_aFormFields,
            bIsValid = true; 

        aFields.forEach((oControlInfo) => {
            var oControl = oControlInfo.control,
                oResourceBundle = this.getOwnerComponent().getResourceBundle(),
                sValue = oControl.getValue(),
                bIsControlValid = true,
                sValueStateText = "";
            
            // min length
            if (oControlInfo.hasOwnProperty("minLength") && sValue.length < oControlInfo.minLength) {
                bIsControlValid = false;
                sValueStateText = oResourceBundle.getText("formValidationMinLengthNotReached", [oControlInfo.minLength]);
            }

            // min value
            if (oControlInfo.hasOwnProperty("minValue") && parseFloat(sValue) <= oControlInfo.minValue) {
                bIsControlValid = false;
                sValueStateText = oResourceBundle.getText("formValidationMinValueNotReached", [oControlInfo.minValue]);
            }



            oControl.setValueState(bIsControlValid ? ValueState.None : ValueState.Error);
            oControl.setValueStateText(sValueStateText);

            if (!bIsControlValid) {
                bIsValid = false;
            }
        });

        return bIsValid;
    };

    /**
     * Resets the validation for all controls
     * @protected
     */
    ControllerProto.resetValidation = function() {
        var aFields = this.m_aFormFields;
        aFields.forEach((oControlInfo) => {
            var oControl = oControlInfo.control;
            oControl.setValueState(ValueState.None);
            oControl.setValueStateText("");
        });
    };


    return Controller;
});