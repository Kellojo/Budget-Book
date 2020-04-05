/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.Menu
sap.ui.define(['sap/ui/core/Renderer', 'sap/ui/unified/MenuRenderer'],
	function(Renderer, UnifiedMenuRenderer) {
	"use strict";


	var MenuRenderer = Renderer.extend(UnifiedMenuRenderer);

	return MenuRenderer;

}, /* bExport= */ true);