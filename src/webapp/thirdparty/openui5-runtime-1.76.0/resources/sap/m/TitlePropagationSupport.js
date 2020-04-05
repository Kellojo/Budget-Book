/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return function(a,g){if(!this.isA("sap.ui.core.Element")){return;}this._propagateTitleIdToChildControl=function(){var A=this.getMetadata().getAggregation(a),c=A&&A.get(this),t=g&&g.call(this),i;if(!sap.ui.getCore().getConfiguration().getAccessibility()||!t||!c||c.length===0){return false;}i=c[0];if(i&&i._suggestTitleId&&i.isA(["sap.ui.layout.form.SimpleForm","sap.ui.layout.form.Form","sap.ui.comp.smartform.SmartForm"])){i._suggestTitleId(t);return true;}return false;};this._initTitlePropagationSupport=function(){this.addEventDelegate({onBeforeRendering:this._propagateTitleIdToChildControl.bind(this)});};};});
