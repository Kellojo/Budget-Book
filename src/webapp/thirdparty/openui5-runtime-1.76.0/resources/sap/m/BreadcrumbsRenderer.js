/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Text"],function(T){"use strict";var B={apiVersion:2};var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");B.render=function(R,c){var C=c._getControlsForBreadcrumbTrail(),s=c._getSelect(),S=c._sSeparatorSymbol;R.openStart("nav",c);R.class("sapMBreadcrumbs");R.attr("aria-label",B._getResourceBundleText("BREADCRUMB_LABEL"));R.openEnd();R.openStart("ol");R.openEnd();if(s.getVisible()){this._renderControlInListItem(R,s,S,false,"sapMBreadcrumbsSelectItem");}C.forEach(function(o){this._renderControlInListItem(R,o,S,o instanceof T);},this);R.close("ol");R.close("nav");};B._renderControlInListItem=function(R,c,s,S,a){R.openStart("li");R.class("sapMBreadcrumbsItem");R.class(a);R.openEnd();R.renderControl(c);if(!S){R.openStart("span").class("sapMBreadcrumbsSeparator").openEnd().unsafeHtml(s).close("span");}R.close("li");};B._getResourceBundleText=function(t){return r.getText(t);};return B;},true);
