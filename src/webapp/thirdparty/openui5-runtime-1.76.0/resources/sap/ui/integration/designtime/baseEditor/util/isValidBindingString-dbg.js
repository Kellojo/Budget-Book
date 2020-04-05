/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/base/BindingParser"
], function (
	BindingParser
) {
	"use strict";

	/**
	 * Checks whether a given string is a valid binding string.
	 *
	 * @function
	 * @since 1.76
	 * @param {string} sInput - String to check
	 * @param {boolean} bAllowPlainStrings - Whether to allow plain strings, default is <code>true</code>
	 * @return {boolean} <code>true</code> if the given string is a valid binding string
	 * @experimental
	 * @private
	 */

	function isValidBindingString (sInput, bAllowPlainStrings) {
		var oParsed;
		try {
			oParsed = BindingParser.complexParser(sInput);
		} catch (oError) {
			return false;
		}
		return bAllowPlainStrings !== false ? true : !!oParsed;
	}

	return isValidBindingString;
});