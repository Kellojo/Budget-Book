/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/m/SelectList","sap/ui/core/Item"],function(_,S,I){"use strict";var a=_.extend("sap.ui.test.selectors._DropdownItem",{_generate:function(c,A){if(A){var s=c.getKey();this._oLogger.debug("Control "+c+" with parent "+JSON.stringify(A)+" has selection key "+s);return{ancestor:A,properties:{key:s}};}else{this._oLogger.debug("Control "+c+" is not inside a supported dropdown");}},_isAncestorRequired:function(){return true;},_getAncestor:function(c){if(c instanceof I){var s=c.getParent();if(s&&s instanceof S){return s;}}}});return a;});
