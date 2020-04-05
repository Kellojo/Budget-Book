/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./CalendarRenderer'],function(R,C){"use strict";var a=R.extend(C);a.apiVersion=2;a.renderCalContentOverlay=function(){};a.renderCalContentAndArrowsOverlay=function(r,c,i){if(c.getPickerPopup()){r.openStart("div",i+"-contentOver");r.class("sapUiCalContentOver");if(!c._oPopup||!c._oPopup.isOpen()){r.style("display","none");}r.openEnd();r.close("div");}};a.addAttributes=function(r,c){r.class("sapUiCalInt");r.class("sapUiCalDateInt");var d=c._getDays();if(d>c._getDaysLarge()){r.class("sapUiCalIntLarge");}if(d>c._iDaysMonthHead){r.class("sapUiCalIntHead");}};return a;},true);
