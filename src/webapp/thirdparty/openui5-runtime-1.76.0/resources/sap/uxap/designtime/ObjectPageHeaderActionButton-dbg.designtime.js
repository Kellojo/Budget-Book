/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.uxap.ObjectPageHeaderActionButton control
sap.ui.define([],
		function () {
			"use strict";

			return {
				actions: {
					remove: {
						changeType: "hideControl"
					},
					rename: function (oButton) {
						if (oButton.getIcon()) {
							return null;
						}
						return {
							changeType: "rename",
							domRef: function (oControl) {
								return oControl.$().find(".sapMBtnContent")[0];
							}
						};
					},
					reveal: {
						changeType: "unhideControl"
					}
				}
			};
		});