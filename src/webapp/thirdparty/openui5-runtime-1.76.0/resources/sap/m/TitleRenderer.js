/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/m/HyphenationSupport"],function(c,H){"use strict";var T=c.TextAlign;var a=c.TitleLevel;var b={apiVersion:2};b.render=function(r,t){var A=t._getTitle(),l=(A?A.getLevel():t.getLevel())||a.Auto,d=l==a.Auto,s=d?"div":l.toLowerCase(),e=H.getTextForRender(t,"main");r.openStart(s,t);r.class("sapMTitle");r.class("sapMTitleStyle"+t.getTitleStyle());r.class(t.getWrapping()?"sapMTitleWrap":"sapMTitleNoWrap");r.class("sapUiSelectable");var w=t.getWidth();if(!w){r.class("sapMTitleMaxWidth");}else{r.style("width",w);}var f=t.getTextAlign();if(f&&f!=T.Initial){r.class("sapMTitleAlign"+f);}if(t.getParent()instanceof sap.m.Toolbar){r.class("sapMTitleTB");}var g=A?A.getTooltip_AsString():t.getTooltip_AsString();if(g){r.attr("title",g);}if(d){r.attr("role","heading");r.attr("aria-level",t._getAriaLevel());}H.writeHyphenationClass(r,t);r.openEnd();r.openStart("span",t.getId()+"-inner");r.openEnd();r.text(e);r.close("span");r.close(s);};return b;},true);
