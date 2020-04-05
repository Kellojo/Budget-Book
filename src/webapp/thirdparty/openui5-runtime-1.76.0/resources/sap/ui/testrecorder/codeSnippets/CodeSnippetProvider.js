/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/testrecorder/codeSnippets/OPA5ControlSnippetGenerator","sap/ui/testrecorder/codeSnippets/RawControlSnippetGenerator","sap/ui/testrecorder/codeSnippets/UIVeri5ControlSnippetGenerator","sap/ui/testrecorder/DialectRegistry","sap/ui/testrecorder/Dialects"],function(B,O,R,U,D,a){"use strict";var c=null;var C=B.extend("sap.ui.testrecorder.codeSnippets.ControlSnippetProvider",{constructor:function(){if(!c){Object.apply(this,arguments);}else{return c;}}});C.prototype.getSnippet=function(d){var g=C.getGenerator(D.getActiveDialect());return g.getSnippet(d).then(function(s){return s;});};C.getGenerator=function(d){switch(d){case a.OPA5:return O;case a.RAW:return R;case a.UIVERI5:return U;default:return R;}};c=new C();return c;});
