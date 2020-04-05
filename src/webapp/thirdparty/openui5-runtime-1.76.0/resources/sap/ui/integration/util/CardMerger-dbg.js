/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge"], function(merge) {
	"use strict";

	var CardMerger = {
		mergeCardDelta: function(oManifest, aChanges) {
			var oInitialManifest = merge({}, oManifest);
			aChanges.forEach(function(oChange) {
				var oManifestDelta = {
					"sap.card": oChange.content
				};
				merge(oInitialManifest, oManifestDelta);
			});
			return oInitialManifest;
		}
	};

	return CardMerger;
});