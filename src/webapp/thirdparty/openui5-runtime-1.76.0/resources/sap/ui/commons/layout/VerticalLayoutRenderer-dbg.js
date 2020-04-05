/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.layout.VerticalLayout
sap.ui.define(['sap/ui/core/Renderer', 'sap/ui/layout/VerticalLayoutRenderer'],
	function(Renderer, LayoutVerticalLayoutRenderer) {
	"use strict";


	var VerticalLayoutRenderer = Renderer.extend(LayoutVerticalLayoutRenderer);


	return VerticalLayoutRenderer;

}, /* bExport= */ true);
