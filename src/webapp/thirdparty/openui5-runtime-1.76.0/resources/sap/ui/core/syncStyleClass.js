/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery','sap/ui/base/Object','sap/base/assert'],function(q,B,a,b){"use strict";var s=function(S,v,d){if(!S){return d;}if(B.isA(v,'sap.ui.core.Control')){v=v.$();}else if(typeof v==="string"){v=q(document.getElementById(v));}else if(!(v instanceof q)){a(false,'sap/ui/core/syncStyleClass(): vSource must be a jQuery object or a Control or a string');return d;}var c=!!v.closest("."+S).length;if(d instanceof q){d.toggleClass(S,c);}else if(B.isA(d,'sap.ui.core.Control')){d.toggleStyleClass(S,c);}else{a(false,'sap/ui/core/syncStyleClass(): vDestination must be a jQuery object or a Control');}return d;};return s;});
