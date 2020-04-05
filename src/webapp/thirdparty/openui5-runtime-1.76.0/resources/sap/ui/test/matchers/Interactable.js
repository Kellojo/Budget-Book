/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher','sap/ui/test/matchers/Visible','sap/ui/test/matchers/_Busy','sap/ui/test/matchers/_Visitor'],function(M,V,_,a){"use strict";var v=new V();var b=new _();var o=new a();return M.extend("sap.ui.test.matchers.Interactable",{isMatching:function(c){if(!v.isMatching(c)){return false;}if(b.isMatching(c)){return false;}var i=o.isMatching(c,function(c){return c.getMetadata().getName()==="sap.ui.core.UIArea"&&c.bNeedsRerendering;});if(i){this._oLogger.debug("Control '"+c+"' is currently in a UIArea that needs a new rendering");return false;}var A=this._getApplicationWindow().jQuery;var C=c.$().closest("#sap-ui-static").length;var O=A("#sap-ui-blocklayer-popup").is(":visible");if(!C&&O){this._oLogger.debug("The control '"+c+"' is hidden behind a blocking popup layer");return false;}return true;}});});
