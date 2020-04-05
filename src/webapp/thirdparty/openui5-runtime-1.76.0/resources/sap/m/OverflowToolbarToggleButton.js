/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/ToggleButton','sap/m/ToggleButtonRenderer'],function(T,a){"use strict";var O=T.extend("sap.m.OverflowToolbarToggleButton",{renderer:a.render});O.prototype._getText=function(){return this._bInOverflow?T.prototype._getText.call(this):"";};return O;});
