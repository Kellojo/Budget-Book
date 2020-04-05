/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/unified/library',"sap/base/security/encodeXML"],function(l,e){"use strict";var C=l.ContentSwitcherAnimation;var a={};a.render=function(r,c){var i=c.getId();var A=c.getAnimation();if(!sap.ui.getCore().getConfiguration().getAnimation()){A=C.None;}var b=c.getActiveContent();r.write("<div");r.writeControlData(c);r.addClass("sapUiUfdCSwitcher");r.addClass("sapUiUfdCSwitcherAnimation"+e(A));r.writeClasses();r.write(">");r.write("<section id=\""+i+"-content1\" class=\"sapUiUfdCSwitcherContent sapUiUfdCSwitcherContent1"+(b==1?" sapUiUfdCSwitcherVisible":"")+"\">");this.renderContent(r,c.getContent1());r.write("</section>");r.write("<section id=\""+i+"-content2\" class=\"sapUiUfdCSwitcherContent sapUiUfdCSwitcherContent2"+(b==2?" sapUiUfdCSwitcherVisible":"")+"\">");this.renderContent(r,c.getContent2());r.write("</section>");r.write("</div>");};a.renderContent=function(r,c){for(var i=0;i<c.length;++i){r.renderControl(c[i]);}};return a;},true);
