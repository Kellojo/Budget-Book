/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'sap/uxap/changeHandler/MoveObjectPageSection',
	'sap/uxap/changeHandler/AddIFrameObjectPageLayout'
], function (MoveObjectPageSection, AddIFrameObjectPageLayout) {
	"use strict";

	return {
		"moveControls": {
			"changeHandler": MoveObjectPageSection,
			"layers": {
				"USER": true
			}
		},
		"addIFrame": {
			"changeHandler": AddIFrameObjectPageLayout
		}
	};
}, /* bExport= */ true);
