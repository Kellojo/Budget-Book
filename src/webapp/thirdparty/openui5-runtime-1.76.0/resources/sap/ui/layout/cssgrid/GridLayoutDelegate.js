/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/ResizeHandler"],function(B,R){"use strict";var G=B.extend("sap.ui.layout.cssgrid.GridLayoutDelegate");G.prototype.onBeforeRendering=function(){G.deregisterResizeListener(this);};G.prototype.onAfterRendering=function(){var g=this.getGridLayoutConfiguration();if(!g){return;}g.onGridAfterRendering(this);if(g.isResponsive()){g.applyGridLayout(this.getGridDomRefs());G.registerResizeListener(this);}};G.prototype.exit=function(){G.deregisterResizeListener(this);};G.registerResizeListener=function(c){c.__grid__sResizeListenerId=R.register(c,G.onResize.bind(c));};G.deregisterResizeListener=function(c){if(c.__grid__sResizeListenerId){R.deregister(c.__grid__sResizeListenerId);c.__grid__sResizeListenerId=null;}};G.onResize=function(e){var g=this.getGridLayoutConfiguration();if(!g){return;}g.onGridResize(e);g.applyGridLayout(this.getGridDomRefs());};return G;});
