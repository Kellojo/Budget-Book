/*!
* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(['sap/ui/core/Control','./library','./SliderTooltipBaseRenderer'],function(C,L,S){"use strict";var a=C.extend("sap.m.SliderTooltipBase",{metadata:{library:"sap.m"}});a.prototype.init=function(){this.fValue=0;};a.prototype.setValue=function(v){this.fValue=v;this.sliderValueChanged(v);};a.prototype.getValue=function(){return this.fValue;};a.prototype.sliderValueChanged=function(v){};return a;});
