/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/testrecorder/codeSnippets/ControlSnippetGenerator"],function(C){"use strict";var R=C.extend("sap.ui.testrecorder.codeSnippets.RawControlSnippetGenerator",{});R.prototype._generate=function(d){return JSON.stringify(d.controlSelector,undefined,4);};return new R();});
