/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/dom/containsOrEquals','sap/ui/core/syncStyleClass','sap/ui/dom/getOwnerWindow','sap/ui/dom/getScrollbarSize','sap/ui/dom/denormalizeScrollLeftRTL','sap/ui/dom/denormalizeScrollBeginRTL','sap/ui/dom/units/Rem','sap/ui/dom/jquery/Aria','sap/ui/dom/jquery/Selection','sap/ui/dom/jquery/zIndex','sap/ui/dom/jquery/parentByAttribute','sap/ui/dom/jquery/cursorPos','sap/ui/dom/jquery/selectText','sap/ui/dom/jquery/getSelectedText','sap/ui/dom/jquery/rect','sap/ui/dom/jquery/rectContains','sap/ui/dom/jquery/Focusable','sap/ui/dom/jquery/hasTabIndex','sap/ui/dom/jquery/scrollLeftRTL','sap/ui/dom/jquery/scrollRightRTL','sap/ui/dom/jquery/Selectors'],function(q,d,s,a,b,c,e,f){"use strict";q.sap.domById=function domById(i,w){return i?(w||window).document.getElementById(i):null;};q.sap.byId=function byId(i,C){var g="";if(i){g="#"+i.replace(/(:|\.)/g,'\\$1');}return q(g,C);};q.sap.focus=function focus(D){if(!D){return;}D.focus();return true;};q.sap.pxToRem=f.fromPx;q.sap.remToPx=f.toPx;q.fn.outerHTML=function(){var D=this.get(0);if(D&&D.outerHTML){return q.trim(D.outerHTML);}else{var g=this[0]?this[0].ownerDocument:document;var o=g.createElement("div");o.appendChild(D.cloneNode(true));return o.innerHTML;}};q.sap.containsOrEquals=d;q.sap.denormalizeScrollLeftRTL=c;q.sap.denormalizeScrollBeginRTL=e;
/*
	 * The following methods are taken from jQuery UI core but modified.
	 *
	 * jQuery UI Core
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */
q.support.selectstart="onselectstart"in document.createElement("div");q.sap.ownerWindow=a;q.sap.scrollbarSize=b;q.sap.syncStyleClass=s;return q;});
