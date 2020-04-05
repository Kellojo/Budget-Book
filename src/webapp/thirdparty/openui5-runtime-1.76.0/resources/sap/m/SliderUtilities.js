/*!
* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(function(){"use strict";var S={};S.CONSTANTS={CHARACTER_WIDTH_PX:8,F2_KEYCODE:113,RANGE_MOVEMENT_THRESHOLD:32,HANDLE_CLASS:"sapMSliderHandle",RANGE_SLIDER_NAME:"sap.m.RangeSlider",TOOLTIP_CLASS:"sapMSliderTooltip",SLIDER_SIDE_PADDING:17,TOOLTIP_SIDE_PADDING:8,HANDLE_HALF_WIDTH:16,TOOLTIP_BORDER:1,FOLLOW_OF_TOLERANCE:24,TICKMARKS:{MAX_POSSIBLE:101,MIN_SIZE:{SMALL:8,WITH_LABEL:80}}};S.getPercentOfValue=function(v,m,M){return((v-m)/(M-m))*100;};S.getElementScrollableParent=function(d){if(!d){return document.body;}if(d.scrollHeight>=d.clientHeight){return d;}return this.getElementScrollableParent(d.parentNode);};S.isScrolledIntoView=function(e,c){if(!(e||e.getBoundingClientRect)||!(c||c.getBoundingClientRect)){return false;}var C=c.getBoundingClientRect(),o=C.top,E=e.getBoundingClientRect().top,b=(o-this.CONSTANTS.FOLLOW_OF_TOLERANCE)>E,a=(o+C.height-this.CONSTANTS.FOLLOW_OF_TOLERANCE)<E;if(b||a){return false;}return true;};return S;});
