/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var T={apiVersion:2};T.render=function(r,c){var t=c._getTabStrip(),s=c._getSelectedItemContent();r.openStart("div",c);r.class("sapMTabContainer");r.openEnd();if(t){r.renderControl(t);}r.openStart("div",c.getId()+"-containerContent");r.class("sapMTabContainerContent");if(c.getBackgroundDesign()){r.class("sapMTabContainerContent"+c.getBackgroundDesign());}r.openEnd();r.openStart("div",this.getContentDomId(c));r.class("sapMTabContainerInnerContent");r.accessibilityState(c,this.getTabContentAccAttributes(c));r.openEnd();if(s){s.forEach(function(C){r.renderControl(C);});}r.close("div");r.close("div");r.close("div");};T.getTabContentAccAttributes=function(c){var s=c.getSelectedItem(),t,a={role:"tabpanel"};if(s){t=c._toTabStripItem(s);if(t){a["aria-labelledby"]=t.getId();}}return a;};T.getContentDomId=function(c){return c.getId()+"-content";};return T;},true);
