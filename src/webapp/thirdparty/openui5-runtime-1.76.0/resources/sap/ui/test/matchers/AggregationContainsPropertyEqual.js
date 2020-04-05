/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize","sap/ui/thirdparty/jquery"],function(M,c,q){"use strict";return M.extend("sap.ui.test.matchers.AggregationContainsPropertyEqual",{metadata:{publicMethods:["isMatching"],properties:{aggregationName:{type:"string"},propertyName:{type:"string"},propertyValue:{type:"any"}}},isMatching:function(C){var a=this.getAggregationName(),p=this.getPropertyName(),P=this.getPropertyValue(),A=C["get"+c(a,0)];if(!A){this._oLogger.error("Control '"+C+"' does not have an aggregation called '"+a+"'");return false;}var v=A.call(C);var b=q.isArray(v)?v:[v];var m=b.some(function(d){var f=d["get"+c(p,0)];if(!f){return false;}return f.call(d)===P;});if(!m){this._oLogger.debug("Control '"+C+"' has no property '"+p+"' with the value '"+P+"' in the aggregation '"+a+"'");}return m;}});});
