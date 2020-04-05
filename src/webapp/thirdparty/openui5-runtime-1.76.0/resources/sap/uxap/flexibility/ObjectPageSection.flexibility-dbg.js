/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'sap/uxap/changeHandler/RenameObjectPageSection'
], function (RenameObjectPageSection) {
	"use strict";

	return {
		"rename": RenameObjectPageSection,
		"moveControls": "default",
		"hideControl": {
			"changeHandler": "default",
			"layers": {
				"USER": true
			}
		},
		"unhideControl": {
			"changeHandler": "default",
			"layers": {
				"USER": true
			}
		},
		"stashControl": {
			"changeHandler": "default",
			"layers": {
				"USER": true
			}
		},
		"unstashControl": {
			"changeHandler": "default",
			"layers": {
				"USER": true
			}
		}
	};
}, /* bExport= */ true);
