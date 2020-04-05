/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher',"sap/base/strings/capitalize"],function(M,c){"use strict";return M.extend("sap.ui.test.matchers.PropertyStrictEquals",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"},value:{type:"any"}}},isMatching:function(C){var p=this.getName(),P=C["get"+c(p,0)];if(!P){this._oLogger.error("Control '"+C+"' does not have a property '"+p+"'");return false;}var v=P.call(C);var m=v===this.getValue();if(!m){this._oLogger.debug("Control '"+C+"' property '"+p+"' has value '"+v+"' but should have value '"+this.getValue()+"'");}return m;}});});
