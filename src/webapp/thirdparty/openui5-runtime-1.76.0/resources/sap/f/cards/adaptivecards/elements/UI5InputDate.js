/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/thirdparty/adaptivecards"],function(A){"use strict";function U(){A.DateInput.apply(this,arguments);}U.prototype=Object.create(A.DateInput.prototype);U.prototype.internalRender=function(){this._dateInputElement=document.createElement("ui5-datepicker");this._dateInputElement.id=this.id;this._dateInputElement.placeholder=this.placeholder;this._dateInputElement.formatPattern="yyyy-MM-dd";this._dateInputElement.value=this.defaultValue||"";this._dateInputElement.minDate=this.min||"";this._dateInputElement.maxDate=this.max||"";this._dateInputElement.addEventListener("change",function(){this.valueChanged();}.bind(this));return this._dateInputElement;};return U;});
