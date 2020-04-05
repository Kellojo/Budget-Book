/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/core/LabelEnablement"],function(_,L){"use strict";var a=_.extend("sap.ui.test.selectors._LabelFor",{_generate:function(c){var l=L.getReferencingLabels(c);if(l.length){var o=sap.ui.getCore().byId(l[0]);this._oLogger.debug("Control "+c+" has an associated label with ID "+l[0]);return{labelFor:{text:o.getText()}};}else{this._oLogger.debug("Control "+c+" has no associated labels");}}});return a;});
