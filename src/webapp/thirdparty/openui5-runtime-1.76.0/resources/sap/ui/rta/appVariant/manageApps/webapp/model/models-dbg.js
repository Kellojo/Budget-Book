/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function(JSONModel) {
	"use strict";

	return {

		createModel: function(oData) {
			var oModel = new JSONModel(oData);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});