/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var h={init:function(g,c){var l=false;document.addEventListener('keydown',function(e){try{if(e.keyCode===18){l=(typeof e.location!=="number"||e.location===1);return;}if(e.shiftKey&&e.altKey&&e.ctrlKey&&l){if(e.keyCode===80){sap.ui.require(['sap/ui/core/support/techinfo/TechnicalInfo'],function(T){T.open(function(){var i=g();return{modules:i.modules,prefixes:i.prefixes,config:c};});},function(E){L.error("Could not load module 'sap/ui/core/support/techinfo/TechnicalInfo':",E);});}else if(e.keyCode===83){sap.ui.require(['sap/ui/core/support/Support'],function(S){var s=S.getStub();if(s.getType()!=S.StubType.APPLICATION){return;}s.openSupportTool();},function(E){L.error("Could not load module 'sap/ui/core/support/Support':",E);});}}}catch(a){}});}};return h;});
