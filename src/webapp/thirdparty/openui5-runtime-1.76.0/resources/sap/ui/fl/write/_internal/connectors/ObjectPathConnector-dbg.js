/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/base/util/merge",
	"sap/ui/fl/write/connectors/BaseConnector",
	"sap/ui/fl/apply/_internal/connectors/ObjectPathConnector",
	"sap/base/util/LoaderExtensions"
], function(
	merge,
	BaseConnector,
	ApplyConnector,
	LoaderExtensions
) {
	"use strict";

	/**
	 * Empty connector since we don't support writing to a file.
	 *
	 * @namespace sap.ui.fl.write._internal.connectors.ObjectPathConnector
	 * @since 1.73
	 * @version 1.76.0
	 * @private
	 * @ui5-restricted sap.ui.fl.write._internal.Storage
	 */
	return merge({}, BaseConnector, /** @lends sap.ui.fl.write._internal.connectors.ObjectPathConnector */ {
		layers: ApplyConnector.layers,

		loadFeatures: function (mPropertyBag) {
			var sPath = ApplyConnector.jsonPath || mPropertyBag.path;
			if (sPath) {
				return LoaderExtensions.loadResource({
					dataType: "json",
					url: sPath,
					async: true
				}).then(function (sFlexReference, oResponse) {
					oResponse.componentClassName = sFlexReference;
					return oResponse.settings || {};
				}.bind(null, mPropertyBag.flexReference));
			}
			return Promise.resolve({});
		}
	});
}, true);
