/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core",
		"sap/ui/core/mvc/XMLView",
		"sap/m/Page"],
	function (Core,
			  XMLView,
			  Page) {
		"use strict";

		Core.attachInit(function () {

			XMLView.create({
				viewName: "sap.ui.support.supportRules.ui.views.Main"
			}).then(function (xmlView) {
				var oPage = new Page("page", {
					showHeader: false,
					backgroundDesign: "Solid",
					content: [
						xmlView
					]
				});

				oPage.placeAt("content");
			});
		});
	});
