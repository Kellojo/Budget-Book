/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,c){r.openStart("div",c).style("width",c.getWidth()).style("height",c.getHeight());if(c.getVertical()){if(!c.getHorizontal()){r.class("sapMScrollContV");}else{r.class("sapMScrollContVH");}}else{r.class("sapMScrollContH");}r.class("sapMScrollCont");var t=c.getTooltip_AsString();if(t){r.attr("title",t);}if(c.getFocusable()){r.attr("tabindex","0");}r.openEnd();r.openStart("div",c.getId()+"-scroll").class("sapMScrollContScroll").openEnd();var C=c.getContent(),l=C.length;for(var i=0;i<l;i++){r.renderControl(C[i]);}r.close("div");r.close("div");};return S;},true);
