/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/Device","sap/ui/core/InvisibleText"],function(l,D,I){"use strict";var F=l.FacetFilterType;var a={apiVersion:2};a.render=function(r,c){if(c.getType()===F.Light||c.getShowSummaryBar()){a.renderSummaryBar(r,c);}else{a.renderSimpleFlow(r,c);}};a.renderSimpleFlow=function(r,c){r.openStart("div",c);r.class("sapMFF");r.accessibilityState({role:"toolbar"});if(c._lastScrolling){r.class("sapMFFScrolling");}else{r.class("sapMFFNoScrolling");}if(c.getShowReset()){r.class("sapMFFResetSpacer");}r.openEnd();if(D.system.desktop){r.renderControl(c._getScrollingArrow("left"));}r.openStart("div",c.getId()+"-head");r.class("sapMFFHead");r.openEnd();a.renderFacetFilterListButtons(c,r);if(c.getShowPersonalization()){r.renderControl(c.getAggregation("addFacetButton"));}r.close("div");if(D.system.desktop){r.renderControl(c._getScrollingArrow("right"));}if(c.getShowReset()){r.openStart("div");r.class("sapMFFResetDiv");r.openEnd();r.renderControl(c.getAggregation("resetButton"));r.close("div");}r.close("div");};a.renderSummaryBar=function(r,c){r.openStart("div",c);r.class("sapMFF");r.openEnd();r.renderControl(c.getAggregation("summaryBar"));r.close("div");};a.getAriaAnnouncement=function(k,b){return I.getStaticId("sap.m",b||"FACETFILTER_"+k.toUpperCase());};a.getAriaDescribedBy=function(c){var d=[];if(c.getShowPersonalization()){d.push(this.getAriaAnnouncement("ARIA_REMOVE"));}d=d.concat(c._aAriaPositionTextIds);return d.join(" ");};a.getAccessibilityState=function(c){return{describedby:{value:this.getAriaDescribedBy(c),append:true}};};a.renderFacetFilterListButtons=function(c,r){var L=c._getSequencedLists(),b=L.length,B,i,p,A,o=[],n=[],f=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("FACETFILTER_ARIA_FACET_FILTER"),R=this.getAriaAnnouncement("ARIA_REMOVE");for(i=0;i<b;i++){var d=L[i].getItems().length>0,e=L[i].getActive(),g=c._bCheckForAddListBtn&&(d||e);if(!c._bCheckForAddListBtn||g){B=c._getButtonForList(L[i]);o=B.removeAllAriaDescribedBy();o.forEach(h);p=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("FACETFILTERLIST_ARIA_POSITION",[(i+1),b]);A=new I({text:f+" "+p}).toStatic();c._aOwnedLabels.push(A.getId());B.addAriaDescribedBy(A);n.push(A.getId());if(c.getShowPersonalization()){B.addAriaDescribedBy(a.getAriaAnnouncement("ARIA_REMOVE"));}r.renderControl(B);if(c.getShowPersonalization()){r.renderControl(c._getFacetRemoveIcon(L[i]));}}}c._aAriaPositionTextIds=n;function h(s){if(R!==s){var j=sap.ui.getCore().byId(s);if(j){j.destroy();}}}};return a;},true);
