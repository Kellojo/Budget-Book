/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/thirdparty/adaptivecards"],function(A){"use strict";function U(){A.ToggleInput.apply(this,arguments);}U.prototype=Object.create(A.ToggleInput.prototype);U.prototype.internalRender=function(){this._checkboxInputElement=document.createElement("ui5-checkbox");this._checkboxInputElement.id=this.id;this._checkboxInputElement.text=this.title||"";this._checkboxInputElement.wrap=this.wrap;this._checkboxInputElement.checked=false;if(this.defaultValue===this.valueOn){this._checkboxInputElement.checked=true;}this._checkboxInputElement.addEventListener("change",function(){this.valueChanged();}.bind(this));return this._checkboxInputElement;};return U;});
