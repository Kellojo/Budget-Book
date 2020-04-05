/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Control','./ToolbarSeparatorRenderer'],function(l,C,T){"use strict";var a=C.extend("sap.m.ToolbarSeparator",{metadata:{library:"sap.m",interfaces:["sap.m.IOverflowToolbarContent"]}});a.CLASSNAME_OVERFLOW_TOOLBAR="sapMTBSeparatorOverflowToolbar";a.prototype._onBeforeEnterOverflow=function(c){c.addStyleClass(a.CLASSNAME_OVERFLOW_TOOLBAR);};a.prototype._onAfterExitOverflow=function(c){c.removeStyleClass(a.CLASSNAME_OVERFLOW_TOOLBAR);};a.prototype.getOverflowToolbarConfig=function(){var c={canOverflow:true};c.onBeforeEnterOverflow=this._onBeforeEnterOverflow;c.onAfterExitOverflow=this._onAfterExitOverflow;return c;};return a;});
