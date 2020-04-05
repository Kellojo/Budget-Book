/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/thirdparty/adaptivecards"],function(A){"use strict";function U(){A.NumberInput.apply(this,arguments);}U.prototype=Object.create(A.NumberInput.prototype);U.prototype.internalRender=function(){this._numberInputElement=document.createElement("ui5-input");this._numberInputElement.type="Number";this._numberInputElement.id=this.id;this._numberInputElement.placeholder=this.placeholder||"";this._numberInputElement.value=this.defaultValue||"";this._numberInputElement.addEventListener("change",function(e){if(e.target.value>this._max){e.target.value=this._max;}if(e.target.value<this._min){e.target.value=this._min;}this.valueChanged();}.bind(this));return this._numberInputElement;};return U;});
