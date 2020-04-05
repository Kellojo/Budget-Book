/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/test/RecordReplay"],function(B,R){"use strict";var C=B.extend("sap.ui.testrecorder.controlSelectors.ControlSelectorGenerator",{});C.prototype.getSelector=function(d){var D=_(d);return R.findControlSelectorByDOMElement({domElement:D,settings:d.settings}).then(function(s){return s;});};function _(d){if(d.domElementId&&typeof d.domElementId==="string"){return document.getElementById(d.domElementId);}else if(d.controlId){return sap.ui.getCore().byId(d.controlId).getFocusDomRef();}}return new C();});
