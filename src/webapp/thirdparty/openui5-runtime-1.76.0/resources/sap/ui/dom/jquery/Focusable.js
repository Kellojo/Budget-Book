/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/jquery/hasTabIndex","sap/ui/dom/isHidden"],function(q,d,i){"use strict";function f(c,F){var C=F?c.firstChild:c.lastChild,o;while(C){if(C.nodeType==1&&!i(C)){if(q(C).hasTabIndex()){return C;}o=f(C,F);if(o){return o;}}C=F?C.nextSibling:C.previousSibling;}return null;}q.fn.firstFocusableDomRef=function(){var c=this.get(0);if(!c||i(c)){return null;}return f(c,true);};q.fn.lastFocusableDomRef=function(){var c=this.get(0);if(!c||i(c)){return null;}return f(c,false);};return q;});
