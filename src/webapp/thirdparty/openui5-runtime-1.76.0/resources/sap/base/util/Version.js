/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r=/^[0-9]+(?:\.([0-9]+)(?:\.([0-9]+))?)?(.*)$/;function V(M,i,p,s){if(M instanceof V){return M;}if(!(this instanceof V)){return new V(M,i,p,s);}var m;if(typeof M==="string"){m=r.exec(M);}else if(Array.isArray(M)){m=M;}else{m=arguments;}m=m||[];function n(v){v=parseInt(v);return isNaN(v)?0:v;}M=n(m[0]);i=n(m[1]);p=n(m[2]);s=String(m[3]||"");this.toString=function(){return M+"."+i+"."+p+s;};this.getMajor=function(){return M;};this.getMinor=function(){return i;};this.getPatch=function(){return p;};this.getSuffix=function(){return s;};this.compareTo=function(){var o=V.apply(window,arguments);return M-o.getMajor()||i-o.getMinor()||p-o.getPatch()||((s<o.getSuffix())?-1:(s===o.getSuffix())?0:1);};}V.prototype.inRange=function(m,M){return this.compareTo(m)>=0&&this.compareTo(M)<0;};return V;});
