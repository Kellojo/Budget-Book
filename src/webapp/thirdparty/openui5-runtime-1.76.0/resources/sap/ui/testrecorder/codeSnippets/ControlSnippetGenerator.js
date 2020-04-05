/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/Object"],function($,B){"use strict";var C=B.extend("sap.ui.testrecorder.codeSnippets.ControlSnippetGenerator",{});C.prototype.getSnippet=function(d){return new Promise(function(r,a){if(!d||!d.controlSelector){a(new Error("Control selector is required!"));}var s=this._generate($.extend(true,{},d));r(s);}.bind(this));};C.prototype._generate=function(){return"";};C.prototype._getSelectorAsString=function(c){var s=JSON.stringify(c,undefined,4);return s.replace(/\"([^(\")"]+)\":/g,"$1:");};C.prototype._getIndentation=function(t){var r="";for(var i=0;i<t*4;i+=1){r+=" ";}return r;};return C;});
