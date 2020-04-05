/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/FakeLrepConnectorLocalStorage"
], function(
	FakeLrepConnectorLocalStorage
) {
	/**
	 * Class handling the Fake Lrep storage for local storage;
	 * This class stays since some tests are still using this internal; We will remove this in the near future.
	 *
	 * @class
	 *
	 * @author SAP SE
	 * @version 1.76.0
	 *
	 * @private
	 * @static
	 * @since 1.48
	 * @alias sap.ui.fl.FakeLrepLocalStorage
	 */

	"use strict";

	return {
		deleteChanges: function() {
			return FakeLrepConnectorLocalStorage.forTesting.synchronous.clearAll();
		}
	};
}, /* bExport= */ true);
