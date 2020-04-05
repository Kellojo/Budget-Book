/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize","sap/ui/thirdparty/jquery"],function(M,c,q){"use strict";return M.extend("sap.ui.test.matchers.AggregationFilled",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"}}},isMatching:function(C){var a=this.getName(),A=C["get"+c(a,0)];if(!A){this._oLogger.error("Control '"+C+"' does not have an aggregation called '"+a+"'");return false;}var v=A.call(C);var b=q.isArray(v)?v:[v];var f=!!b.length;if(!f){this._oLogger.debug("Control '"+C+"' aggregation '"+a+"' is empty");}return f;}});});
