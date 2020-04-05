/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var N={apiVersion:2};N.render=function(r,c){c._bRenderingInProgress=true;if(!c.getVisible()){return;}var h=c.getHeight(),t=c.getTooltip_AsString(),C=c.getCurrentPage();r.openStart("div",c);r.class("sapMNav");r.style("width",c.getWidth());if(h&&h!="100%"){r.style("height",h);}if(this.renderAttributes){this.renderAttributes(r,c);}if(t){r.attr("title",t);}r.openEnd();if(this.renderBeforeContent){this.renderBeforeContent(r,c);}c.getPages().forEach(function(p){if(p===C){C.removeStyleClass("sapMNavItemHidden");r.renderControl(C);}else{r.cleanupControlWithoutRendering(p);}});r.close("div");c._bRenderingInProgress=false;};return N;},true);
