/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var T={apiVersion:2};T.render=function(r,c){var s=c.getAggregation("_columns"),l=c.getLabelText()||"",R=sap.ui.getCore().getLibraryResourceBundle("sap.m"),S,b=sap.ui.getCore().getConfiguration().getRTL();r.openStart("div",c);r.class("sapMTimePickerContainer");r.style("width",c.getWidth());r.style("height",c.getHeight());r.accessibilityState(c,{label:(l+" "+R.getText("TIMEPICKER_SCREENREADER_TAG")).trim()});r.openEnd();if(!D.system.desktop){r.openStart("div",c.getId()+"-label");r.class("sapMTimePickerContainerLabel");r.openEnd();r.style("display","block");r.text(l);r.close("div");}if(b){for(S=s.length-1;S>=0;S--){r.renderControl(s[S]);}}else{for(S=0;S<s.length;S++){r.renderControl(s[S]);}}r.close("div");};return T;},true);
