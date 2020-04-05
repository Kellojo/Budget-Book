/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
], function(
) {
	"use strict";

	/**
	 * Clean the URL to remove ignored characters (\r, \n, \t)
	 *
	 * @param {string} sURL URL to clean
	 * @returns {string} Cleaned URL
	 * @ui5-restricted sap.ui.rta
	 */
	return function (sURL) {
		return sURL.replace(/\t|\r|\n/g, "");
	};
});
