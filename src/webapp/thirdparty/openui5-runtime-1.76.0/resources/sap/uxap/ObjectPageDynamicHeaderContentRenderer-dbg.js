/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer', 'sap/f/DynamicPageHeaderRenderer'],
	function(Renderer, DynamicPageHeaderRenderer) {
		"use strict";

		var ObjectPageDynamicHeaderContentRenderer = Renderer.extend(DynamicPageHeaderRenderer);

		ObjectPageDynamicHeaderContentRenderer.apiVersion = 2;

		return ObjectPageDynamicHeaderContentRenderer;

	}, /* bExport= */ true);
