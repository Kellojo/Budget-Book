/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher','sap/ui/test/matchers/_Visitor'],function(M,_){"use strict";var v=new _();return M.extend("sap.ui.test.matchers._Enabled",{isMatching:function(c){var d=v.isMatching(c,function(C){if(!C.getEnabled){return false;}var d=!C.getEnabled();if(d){if(C===c){this._oLogger.debug("Control '"+c+"' is not enabled");}else{this._oLogger.debug("Control '"+c+"' has a parent '"+C+"' that is not enabled");}}return d;}.bind(this));return!d;}});});
