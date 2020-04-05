/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_display:function(){var v,n;this._oLastDisplayedTarget=null;var r=this._super._display.apply(this,arguments);if(this._oLastDisplayedTarget){v=this._getViewLevel(this._oLastDisplayedTarget);n=this._oLastDisplayedTarget._oOptions._name;}this._oTargetHandler.navigate({viewLevel:v,navigationIdentifier:n,askHistory:true});return r;},_displaySingleTarget:function(n){var t=this.getTarget(n);if(t){this._oLastDisplayedTarget=t;}return this._super._displaySingleTarget.apply(this,arguments);}};},true);
