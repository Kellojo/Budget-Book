/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element',"sap/base/Log"],function(E,L){"use strict";var M=E.extend("sap.m.MaskInputRule",{metadata:{library:"sap.m",properties:{maskFormatSymbol:{type:"string",group:"Misc",defaultValue:"*"},regex:{type:"string",group:"Misc",defaultValue:"[a-zA-Z0-9]"}}}});M.prototype.setMaskFormatSymbol=function(n){var i=v.call(this,n);if(i){this.setProperty("maskFormatSymbol",n);}return this;};M.prototype.setRegex=function(n){var i=a.call(this,n);if(i){this.setProperty("regex",n);}return this;};M.prototype.toString=function(){return this.getMaskFormatSymbol()+":"+this.getRegex();};function v(n){if(/^.$/i.test(n)){return true;}L.error("The mask format symbol '"+n+"' is not valid");return false;}function a(r){if(/.+/i.test(r)){return true;}L.error("The regex value '"+r+"' is not valid");return false;}return M;});
