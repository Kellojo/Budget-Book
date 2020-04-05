/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./SimpleType'],function(S){"use strict";var C=S.extend("sap.ui.model.CompositeType",{constructor:function(f,c){S.apply(this,arguments);this.sName="CompositeType";this.bUseRawValues=false;this.bParseWithValues=false;this.bUseInternalValues=false;},metadata:{"abstract":true}});C.prototype.getUseRawValues=function(){return this.bUseRawValues;};C.prototype.getUseInternalValues=function(){return this.bUseInternalValues;};C.prototype.getParseWithValues=function(){return this.bParseWithValues;};return C;});
