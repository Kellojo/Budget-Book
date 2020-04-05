/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/FakeLrepConnector",
	"sap/ui/fl/apply/_internal/connectors/LocalStorageConnector",
	"sap/ui/fl/write/_internal/connectors/LocalStorageConnector"
],
function(
	FakeLrepConnector,
	ApplyLocalStorageConnector,
	WriteLocalStorageConnector
) {
	"use strict";

	/**
	 * Class for storing changes in local storage
	 *
	 * @class
	 *
	 * @author SAP SE
	 * @version 1.76.0
	 *
	 * @private
	 * @static
	 * @since 1.48
	 * @alias sap.ui.fl.FakeLrepConnectorLocalStorage
	 */

	return {
		enableFakeConnector : function (mPropertyBag) {
			var sJsonPath = mPropertyBag ? mPropertyBag.sInitialComponentJsonPath : undefined;
			FakeLrepConnector.setFlexibilityServicesAndClearCache("LocalStorageConnector", sJsonPath);
		},
		disableFakeConnector : function () {
			FakeLrepConnector.disableFakeConnector();
		},
		forTesting: {
			spyWrite: function (sandbox, assert) {
				return FakeLrepConnector.forTesting.spyMethod(sandbox, assert, WriteLocalStorageConnector, "write");
			},
			getNumberOfChanges: function (sReference) {
				return FakeLrepConnector.forTesting.getNumberOfChanges(ApplyLocalStorageConnector, sReference);
			},
			synchronous: {
				clearAll: function () {
					FakeLrepConnector.forTesting.synchronous.clearAll(window.localStorage);
				},
				store: function (sKey, oItem) {
					FakeLrepConnector.forTesting.synchronous.store(window.localStorage, sKey, oItem);
				}
			}
		}
	};
}, /* bExport= */ true);