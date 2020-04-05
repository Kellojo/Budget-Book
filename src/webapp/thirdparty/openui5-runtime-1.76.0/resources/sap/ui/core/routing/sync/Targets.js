/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";return{display:function(t,d,T){this._display(t,d,T);},_display:function(t,d,T){var a=this;this._attachTitleChanged(t,T);if(Array.isArray(t)){t.forEach(function(s){a._displaySingleTarget(s,d);});}else{this._displaySingleTarget(t,d);}return this;},_displaySingleTarget:function(n,d){var t=this.getTarget(n);if(t!==undefined){t.display(d);}else{L.error("The target with the name \""+n+"\" does not exist!",this);}}};});
