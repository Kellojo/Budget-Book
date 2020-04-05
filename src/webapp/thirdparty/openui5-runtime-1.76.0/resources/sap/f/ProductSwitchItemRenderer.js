/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var P={apiVersion:2};P.render=function(r,c){var p=c._getProductSwitch(),a={role:"menuitemradio"};if(p){a.setsize=p._getItemsCount();a.posinset=p._getItemPosition(c);a.checked=c.getId()===p.getSelectedItem()?"true":undefined;}r.openStart("div",c);r.class("sapFPSItemContainer");r.attr("tabindex",0);r.accessibilityState(c,a);r.openEnd();r.openStart("span");r.class("sapFPSItemIconPlaceholder");r.class("sapUiTinyMarginBottom");r.openEnd();if(c.getSrc()){r.renderControl(c._getIcon());}r.close("span");r.openStart("div");r.class("sapFPSItemTextSection");r.openEnd();if(c.getTitle()){r.renderControl(c._getTitle());}if(c.getSubTitle()){r.openStart("div");r.class("sapFPSItemSubTitle");r.class("sapFPSItemTitle");r.openEnd();r.text(c.getSubTitle());r.close("div");}r.close("div");r.close("div");};return P;},true);
