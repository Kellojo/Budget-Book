/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'sap/ui/core/Renderer'
], function(
	Renderer
) {
	"use strict";

	/**
	 * ActionsToolbar renderer.
	 *
	 * @author SAP SE
	 * @namespace
	 */
	var ActionsToolbarRenderer = {
		apiVersion: 2
	};

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} control An object representation of the control that should be rendered.
	 */
	ActionsToolbarRenderer.render = function(rm, control) {

		rm.openStart("div", control);
		rm.class("sapUIActionsToolbar");
		rm.openEnd();

		rm.renderControl(control._getToolbar());

		rm.close("div");
	};

	return ActionsToolbarRenderer;

}, /* bExport= */ true);