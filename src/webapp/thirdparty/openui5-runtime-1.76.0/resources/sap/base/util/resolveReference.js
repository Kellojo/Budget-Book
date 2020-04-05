/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";var n=Object.create(null);function _(p,R,o){var v,c;if(R&&(p[0]in R)){c=p.length>1?O.get(p.slice(0,-1),R):R;v=c&&c[p[p.length-1]];if(typeof v==="function"&&o.bindContext){v=v.bind(o.rootContext||c);}return v;}return n;}var r=function(p,v,o){v=v||{};o=o||{};o.bindContext=o.bindContext!==false;o.bindDotContext=o.bindDotContext!==false;var P=p.split("."),V=P.shift()||".",d=V===".",R=n;P.unshift(V);if(o.preferDotContext&&!d){R=_(P,v["."],{bindContext:o.bindContext&&o.bindDotContext,rootContext:v["."]});}if(R===n){R=_(P,v,{bindContext:o.bindContext&&(d?o.bindDotContext:(P.length>1)),rootContext:d?v["."]:undefined});}if(R===n){R=O.get(p);}return R;};return r;});
