/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_display:function(){var v,n;this._oLastDisplayedTarget=null;var p=this._super._display.apply(this,arguments);return p.then(function(V){if(this._oLastDisplayedTarget){v=this._getViewLevel(this._oLastDisplayedTarget);n=this._oLastDisplayedTarget._oOptions._name;}this._oTargetHandler.navigate({viewLevel:v,navigationIdentifier:n,askHistory:true});return V;}.bind(this));},_displaySingleTarget:function(t){var T=this.getTarget(t.name);return this._super._displaySingleTarget.apply(this,arguments).then(function(v){if(T){this._oLastDisplayedTarget=T;}return v;}.bind(this));}};},true);
