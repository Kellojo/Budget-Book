/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UnitMixin","sap/ui/core/format/NumberFormat","sap/ui/model/type/Unit"],function(a,N,B){"use strict";var U=B.extend("sap.ui.model.odata.type.Unit",{constructor:function(f,c,d){this._applyUnitMixin.apply(this,arguments);}});a(U.prototype,B,"customUnits");U.prototype.getCustomUnitForKey=function(c,k){return{decimals:c[k].UnitSpecificScale,displayName:c[k].Text,"unitPattern-count-other":N.getDefaultUnitPattern(k)};};U.prototype.getName=function(){return"sap.ui.model.odata.type.Unit";};return U;});
