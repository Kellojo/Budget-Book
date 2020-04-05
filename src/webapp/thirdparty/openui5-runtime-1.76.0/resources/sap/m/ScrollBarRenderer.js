/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/Device',"sap/ui/dom/getScrollbarSize"],function(D,g){"use strict";var S={apiVersion:2};S.render=function(r,c){var s="sapMScrollBarTouch",C=c.getContentSize(),a=c.getId(),d=D.support.touch;r.openStart("div",c);r.class("sapMScrollBarOuterDiv");if(d){r.class(s);}r.openEnd();r.openStart("div",a+"-sb");r.class("sapMScrollBarInnerDiv");r.openEnd();r.openStart("div",a+"-sbcnt");r.style("width","0.75rem");r.style("height",C);r.openEnd();r.close("div");r.close("div");r.openStart("div");r.openEnd();r.openStart("span",a+"-ffsize");r.class("sapMScrollBarDistantSpan");r.openEnd();r.close("span");r.close("div");r.close("div");};return S;},true);
