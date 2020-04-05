/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/base/util/merge",
	"sap/ui/fl/write/_internal/connectors/ObjectStorageConnector"
], function(
	merge,
	ObjectStorageConnector
) {
	"use strict";

	/**
	 * Connector for saving data to the <code>window.localStorage</code>.
	 *
	 * @namespace sap.ui.fl.write._internal.connectors.LocalStorageConnector
	 * @experimental Since 1.70
	 * @since 1.70
	 * @private
	 * @ui5-restricted sap.ui.fl.write._internal.Connector
	 */
	var LocalStorageConnector = merge({}, ObjectStorageConnector, /** @lends sap.ui.fl.write._internal.connectors.LocalStorageConnector */ {
		oStorage: window.localStorage
	});

	return LocalStorageConnector;
}, true);
