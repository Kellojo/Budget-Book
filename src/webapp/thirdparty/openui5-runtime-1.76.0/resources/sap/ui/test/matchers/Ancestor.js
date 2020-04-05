/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_LogCollector","sap/base/Log","sap/ui/test/matchers/_Visitor"],function(_,L,a){"use strict";var l=L.getLogger("sap.ui.test.matchers.Ancestor");var v=new a();return function(A,d){return function(c){if(!A){l.debug("No ancestor was defined so no controls will be filtered.");return true;}var r=v.isMatching(c,function(C){if(C===c){return false;}if(typeof A==="string"){return C&&C.getId()===A;}return C===A;},d);l.debug("Control '"+c+(r?"' has ":"' does not have ")+(d?"direct ":"")+"ancestor '"+A);return r;};};},true);
