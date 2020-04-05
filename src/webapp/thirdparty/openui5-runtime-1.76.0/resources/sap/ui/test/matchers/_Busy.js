/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher','sap/ui/test/matchers/_Visitor'],function(M,_){"use strict";var v=new _();return M.extend("sap.ui.test.matchers._Busy",{isMatching:function(c){var r=v.isMatching(c,function(C){var i=C.getBusy&&C.getBusy();if(i){if(C===c){this._oLogger.debug("Control '"+c+"' is busy");}else{this._oLogger.debug("Control '"+c+"' has a parent '"+C+"' that is busy");}}return i;}.bind(this));return r;}});});
