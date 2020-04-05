/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var A={apiVersion:2};A.render=function(r,c){var a=c._getAllButtons(),I=c.getAggregation("_invisibleAriaTexts"),R=sap.ui.getCore().getLibraryResourceBundle('sap.m'),b=a.length,d=sap.ui.getCore().getConfiguration().getAccessibility(),v=a.filter(function(B){return B.getVisible();}).length,C,i,m,B,V=1,g=function(o){return I.filter(function(e){return e.getId().indexOf(o.getId())>-1;})[0];};for(i=0;i<b;i++){B=a[i];if(B.getIcon()&&B.getVisible()){m=true;}}r.openStart("div",c);r.class("sapMActionSheet");if(m){r.class("sapMActionSheetMixedButtons");}var t=c.getTooltip_AsString();if(t){r.attr("title",t);}d&&r.attr("role","presentation");r.openEnd("div");for(i=0;i<b;i++){B=a[i];r.renderControl(a[i]);if(d&&B.getVisible()){C=g(B);if(C){C.setText(R.getText('ACTIONSHEET_BUTTON_INDEX',[V,v]));r.renderControl(C);}V++;}}if(D.system.phone&&c.getShowCancelButton()){r.renderControl(c._getCancelButton());}r.close("div");};return A;},true);
