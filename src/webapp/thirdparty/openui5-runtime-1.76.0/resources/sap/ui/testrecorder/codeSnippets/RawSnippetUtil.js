/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object"],function(B){"use strict";var r=null;var R=B.extend("sap.ui.testrecorder.codeSnippets.RawSnippetUtil",{constructor:function(){if(!r){Object.apply(this,arguments);}else{return r;}}});R.prototype.getJSON=function(s,S){if(S.multipleSnippets){var a=s.map(function(b){return b.replace(/^/gm,"        ");}).join(",\n");return"{\n    \"selectors\": [\n"+a+"\n    ]\n}";}else{return s[0];}};r=new R();return r;});
