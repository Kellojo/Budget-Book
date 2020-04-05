/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={};S.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiSearchField");if(!c.getEditable()||!c.getEnabled()){r.addClass("sapUiSearchFieldDsbl");}if(!c.hasListExpander()){r.addClass("sapUiSearchFieldNoExp");}if(c.getEnableClear()){r.addClass("sapUiSearchFieldClear");}if(c.getWidth()){r.addStyle("width",c.getWidth());}if(c.getValue()){r.addClass("sapUiSearchFieldVal");}r.writeClasses();r.writeStyles();r.write(">");r.renderControl(c._ctrl);if(c.getShowExternalButton()){r.renderControl(c._btn);}var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");r.write("<span id='",c.getId(),"-label' style='display:none;' aria-hidden='true'>");r.writeEscaped(a.getText("SEARCHFIELD_BUTTONTEXT"));r.write("</span>");r.write("</div>");};return S;},true);
