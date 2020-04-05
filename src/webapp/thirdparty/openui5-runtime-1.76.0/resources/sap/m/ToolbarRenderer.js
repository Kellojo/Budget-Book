/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./BarInPageEnabler'],function(B){"use strict";var T={apiVersion:2};T.render=B.prototype.render;T.decorateRootElement=function(r,t){var a;r.class("sapMTB");if(!t.getAriaLabelledBy().length){a=t.getTitleId();}r.accessibilityState(t,{role:t._getAccessibilityRole(),labelledby:a});r.class("sapMTBNewFlex");if(t.getActive()){r.class("sapMTBActive");r.attr("tabindex","0");}else{r.class("sapMTBInactive");}r.class("sapMTB"+t.getStyle());r.class("sapMTB-"+t.getActiveDesign()+"-CTX");r.style("width",t.getWidth());r.style("height",t.getHeight());};T.renderBarContent=function(r,t){t.getContent().forEach(function(c){B.addChildClassTo(c,t);r.renderControl(c);});};T.shouldAddIBarContext=function(c){return false;};return T;},true);
