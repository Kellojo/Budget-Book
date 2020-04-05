
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/apply/_internal/changes/descriptor/ui5/AddLibrary"
], function(
	AddLibrary
) {
	"use strict";

	/**
	 * Loads and registers all change handlers
	 *
	 * @namespace sap.ui.fl.apply._internal.changes.descriptor.DescriptorChangeHandlerRegistration
	 * @experimental
	 * @since 1.74
	 * @version 1.76.0
	 * @private
	 * @ui5-restricted sap.ui.fl.apply._internal
	 */
	var DescriptorChangeHandlerRegistration = {
		appdescr_ui5_addLibraries: AddLibrary
	};
	return DescriptorChangeHandlerRegistration;
}, true);