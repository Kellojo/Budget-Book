/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object"],function(B){"use strict";var c=null;var r=[];var R=100;var C=B.extend("sap.ui.testrecorder.inspector.ControlInspectorRepo",{constructor:function(){if(!c){Object.apply(this,arguments);}else{return c;}}});C.prototype.findSelector=function(d){var m=r.filter(function(a){return a.domElementId===d&&a.selector;});return m[0]&&m[0].selector||null;};C.prototype.save=function(m,s,S){var n=Object.assign({selector:s,snippet:S},m);var u=-1;r.forEach(function(a,i){if(a.domElementId===m.domElementId){u=i;}});if(u>-1){r[u]=n;}else{if(r.length===R){r.shift();}r.push(n);}};C.prototype.clear=function(){r=[];};C.prototype.getRequests=function(){return r.map(function(d){return{domElementId:d.domElementId,action:d.action};});};C.prototype.getSelectors=function(){return r.map(function(d){return d.selector;});};C.prototype.getSnippets=function(){return r.map(function(d){return d.snippet;});};C.prototype.getAll=function(){return r;};c=new C();return c;});
