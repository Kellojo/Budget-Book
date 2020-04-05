/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/actions/Action"],function(A){"use strict";var D=A.extend("sap.ui.test.actions.Drag",{metadata:{publicMethods:["executeOn"]},executeOn:function(c){var a=this.$(c)[0];if(a){this._createAndDispatchDragEvent("dragstart",a);this._createAndDispatchDragEvent("drag",a);}else{this.oLogger.debug("Cannot drag control "+c+": control has no DOM focus reference");}}});return D;});
