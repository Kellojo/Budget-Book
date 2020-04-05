/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/thirdparty/adaptivecards"],function(A){"use strict";function U(){A.TextInput.apply(this,arguments);}U.prototype=Object.create(A.TextInput.prototype);U.prototype.internalRender=function(){if(this.isMultiline){var t=document.createElement("ui5-textarea");t.id=this.id;t.placeholder=this.placeholder||"";t.value=this.defaultValue||"";t.maxlength=this.maxLength||null;t.addEventListener("change",function(){this.valueChanged();}.bind(this));return t;}var i=document.createElement("ui5-input");switch(this.style){case 1:i.type="Tel";break;case 2:i.type="URL";break;case 3:i.type="Email";break;default:i.type="Text";}i.id=this.id;i.placeholder=this.placeholder||"";i.value=this.defaultValue||"";i.maxlength=this.maxLength||null;i.addEventListener("change",function(){this.valueChanged();}.bind(this));return i;};return U;});
