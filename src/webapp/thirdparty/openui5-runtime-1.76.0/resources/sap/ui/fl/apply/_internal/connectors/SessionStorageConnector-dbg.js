/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/base/util/merge",
	"sap/ui/fl/apply/_internal/connectors/ObjectStorageConnector"
], function(
	merge,
	ObjectStorageConnector
) {
	"use strict";

	/**
	 * Connector for requesting data from <code>window.sessionStorage</code>.
	 *
	 * @namespace sap.ui.fl.apply._internal.connectors.SessionStorageConnector
	 * @experimental Since 1.70
	 * @since 1.70
	 * @private
	 * @ui5-restricted sap.ui.fl.apply._internal.Storage, sap.ui.fl.write._internal.Storage
	 */
	var SessionStorageConnector = merge({}, ObjectStorageConnector, /** @lends sap.ui.fl.apply._internal.connectors.SessionStorageConnector */ {
		oStorage: window.sessionStorage
	});

	return SessionStorageConnector;
}, true);
