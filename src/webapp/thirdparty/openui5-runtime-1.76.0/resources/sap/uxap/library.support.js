/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Adds support rules of the sap.uxap library to the support infrastructure.
 */
sap.ui.define(["./rules/ObjectPageLayout.support"],
	function(ObjectPageLayoutSupport) {
	"use strict";

	return {
		name: "sap.uxap",
		niceName: "ObjectPage library",
		ruleset: [ObjectPageLayoutSupport]
	};

}, true);
