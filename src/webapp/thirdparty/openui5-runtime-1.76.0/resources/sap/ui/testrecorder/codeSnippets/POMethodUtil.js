/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object"],function(B){"use strict";var p=null;var P=B.extend("sap.ui.testrecorder.codeSnippets.POMethodUtil",{constructor:function(){if(!p){Object.apply(this,arguments);}else{return p;}}});P.prototype.getPOMethod=function(s,S){if(S&&S.formatAsPOMethod){var a=s.map(function(a){return a.replace(/^/gm,"    ");}).join("\n\n");return"<iDoAction>: function () {\n"+a+"\n}";}else{return s.join("\n\n");}};p=new P();return p;});
