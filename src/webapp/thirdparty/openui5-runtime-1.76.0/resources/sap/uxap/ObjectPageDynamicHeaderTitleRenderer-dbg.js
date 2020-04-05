/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer', 'sap/f/DynamicPageTitleRenderer'],
	function(Renderer, DynamicPageTitleRenderer) {
		"use strict";

		var ObjectPageDynamicHeaderTitleRenderer = Renderer.extend(DynamicPageTitleRenderer);

		ObjectPageDynamicHeaderTitleRenderer.apiVersion = 2;

		return ObjectPageDynamicHeaderTitleRenderer;

	}, /* bExport= */ true);
