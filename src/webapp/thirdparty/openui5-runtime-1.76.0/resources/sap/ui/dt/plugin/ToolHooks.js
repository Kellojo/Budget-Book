/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/Plugin"],function(P){"use strict";var T=P.extend("sap.ui.dt.plugin.ToolHooks",{metadata:{library:"sap.ui.dt",properties:{},associations:{},events:{}}});T.prototype.registerElementOverlay=function(o){o.getDesignTimeMetadata().getToolHooks().start(o.getElement());};T.prototype.deregisterElementOverlay=function(o){o.getDesignTimeMetadata().getToolHooks().stop(o.getElement());};return T;});
