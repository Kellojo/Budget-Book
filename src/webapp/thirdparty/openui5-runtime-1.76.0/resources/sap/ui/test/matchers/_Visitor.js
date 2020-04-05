/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher'],function(M){"use strict";return M.extend("sap.ui.test.matchers._Visitor",{isMatching:function(c,m,d){if(m(c)){return true;}var p=c.getParent();if(d){return m(p);}while(p){if(m(p)){return true;}p=p.getParent();}return false;}});});
