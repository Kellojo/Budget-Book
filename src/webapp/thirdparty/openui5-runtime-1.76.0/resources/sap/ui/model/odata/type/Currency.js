/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UnitMixin","sap/ui/model/type/Currency"],function(a,B){"use strict";var C=B.extend("sap.ui.model.odata.type.Currency",{constructor:function(f,c){this._applyUnitMixin.apply(this,arguments);}});a(C.prototype,B,"customCurrencies");C.prototype.getCustomUnitForKey=function(c,k){return{decimals:c[k].UnitSpecificScale,isoCode:c[k].StandardCode};};C.prototype.getName=function(){return"sap.ui.model.odata.type.Currency";};return C;});
