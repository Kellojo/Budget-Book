/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/CombineButtons",
	"sap/m/changeHandler/SplitMenuButton",
	"sap/ui/fl/changeHandler/BaseRename"
], function (CombineButtonsHandler, SplitMenuButtonHandler, BaseRename) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"rename": BaseRename.createRenameChangeHandler({
			propertyName: "title",
			translationTextType: "XGRP"
		}),
		"combineButtons": {
			"changeHandler": CombineButtonsHandler,
			"layers": {
				"CUSTOMER": false
			}
		},
		"moveControls": "default",
		"splitMenuButton": {
			"changeHandler": SplitMenuButtonHandler,
			"layers": {
				"CUSTOMER": false
			}
		}
	};
}, /* bExport= */ true);
