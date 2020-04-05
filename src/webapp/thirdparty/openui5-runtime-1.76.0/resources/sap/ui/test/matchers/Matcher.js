/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_OpaLogger","sap/ui/base/ManagedObject"],function(_,M){"use strict";var a=M.extend("sap.ui.test.matchers.Matcher",{metadata:{publicMethods:["isMatching"]},constructor:function(){this._oLogger=_.getLogger(this.getMetadata().getName());return M.prototype.constructor.apply(this,arguments);},isMatching:function(c){return true;},_getApplicationWindow:function(){if(sap.ui.test&&sap.ui.test.Opa5){return sap.ui.test.Opa5.getWindow();}else{return window;}},_getOpaPlugin:function(){var p;if(sap.ui.test&&sap.ui.test.Opa5){p=sap.ui.test.Opa5.getPlugin();}else{if(window.top===window.self){sap.ui.require(["sap/ui/test/Opa5"],function(O){p=O.getPlugin();});}else{var o=window.top.document.getElementById("OpaFrame");if(o&&o.contentWindow===window.self){if(window.top.sap.ui.test&&window.top.sap.ui.test.Opa5){p=window.top.sap.ui.test.Opa5.getPlugin();}else{sap.ui.require(["sap/ui/test/Opa5"],function(O){p=O.getPlugin();});}}}}return p;}});return a;});
