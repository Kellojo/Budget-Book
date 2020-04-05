/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function () {
	"use strict";

	/**
	 * Checks whether a given control is the template of an aggregation binding or a cloned element.
	 *
	 * @function
	 * @since 1.75
	 * @param {sap.ui.base.ManagedObject} oControl - Control to check
	 * @return {boolean} Returns<code>true</code> if the given control is a template
	 * @experimental
	 * @private
	 */

	function isAggregationTemplate (oControl) {
		var sParentAggregationName = oControl.sParentAggregationName,
		oParent = oControl.getParent();
		if (oParent && sParentAggregationName) {
			var oBindingInfo = oParent.getBindingInfo(sParentAggregationName);
			if (oBindingInfo && oControl instanceof oBindingInfo.template.getMetadata().getClass()) {
				return false;
			} else {
				return isAggregationTemplate(oParent);
			}
		}
		return true;
	}

	return isAggregationTemplate;
});