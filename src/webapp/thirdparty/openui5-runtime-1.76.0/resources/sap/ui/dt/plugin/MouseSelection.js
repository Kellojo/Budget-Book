/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/Plugin"],function(P){"use strict";var M=P.extend("sap.ui.dt.plugin.MouseSelection",{metadata:{library:"sap.ui.dt",properties:{},associations:{},events:{}}});M.prototype.init=function(){P.prototype.init.apply(this,arguments);};M.prototype.registerElementOverlay=function(o){o.setSelectable(true);o.attachBrowserEvent('click',this._onClick,o);};M.prototype.deregisterElementOverlay=function(o){o.detachBrowserEvent('click',this._onClick,o);};M.prototype._onClick=function(e){this.setSelected(!this.getSelected());e.preventDefault();e.stopPropagation();};return M;});
