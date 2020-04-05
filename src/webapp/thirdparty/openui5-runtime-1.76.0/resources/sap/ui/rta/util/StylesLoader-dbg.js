/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/thirdparty/jquery"
],
	function(jQuery) {
		"use strict";

		var module = {};

		/**
		 * Loads styles from the specified file
		 * @param {string} sFileName - Name of the file
		 * @return {jqXHR} - returns jqXHR object which can be thenable
		 */
		module.loadStyles = function (sFileName) {
			return jQuery.get(sap.ui.require.toUrl(('sap.ui.rta.assets.' + sFileName).replace(/\./g, "/")) + '.css')
				.then(function (sData) {
					// TODO: check if it's possible to use UI5 standard mechanism for styles adjustments
					if (sap.ui.getCore().getConfiguration().getRTL()) {
						return sData.replace(/right/g, 'left');
					}
					return sData;
				});
		};

		return module;
	}, true);