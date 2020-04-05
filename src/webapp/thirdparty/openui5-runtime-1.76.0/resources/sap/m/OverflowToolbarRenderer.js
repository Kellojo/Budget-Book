/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library",'sap/ui/core/Renderer','./ToolbarRenderer',"sap/m/BarInPageEnabler"],function(l,R,T,B){"use strict";var O=l.OverflowToolbarPriority;var a=R.extend(T);a.apiVersion=2;a.renderBarContent=function(r,t){var h=false,H;t._getVisibleContent().forEach(function(c){B.addChildClassTo(c,t);if(t._getControlPriority(c)!==O.AlwaysOverflow){r.renderControl(c);}else{h=h||c.getVisible();}});if(h||t._getOverflowButtonNeeded()){a.renderOverflowButton(r,t);}H=t.getContent().some(function(c){return c.getVisible();});if(H){a.renderOverflowButtonClone(r,t);}};a.renderOverflowButton=function(r,t){var o=t._getOverflowButton();B.addChildClassTo(o,t);r.renderControl(o);};a.renderOverflowButtonClone=function(r,t){var o=t._getOverflowButtonClone();B.addChildClassTo(o,t);r.renderControl(o);};return a;},true);
