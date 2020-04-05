/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([], function () {
	"use strict";

	var Utils = { };

	/**
	 * Check if given string is a JSON.
	 * @param {string} sText The text to be tested.
	 * @returns {boolean} Whether the string is in a JSON format or not.
	 */
	Utils.isJson = function (sText) {
		if (typeof sText !== "string") {
			return false;
		}
		try {
			JSON.parse(sText);
			return true;
		} catch (error) {
			return false;
		}
	};

	return Utils;
});