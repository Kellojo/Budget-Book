/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/f/library','sap/m/Button','sap/f/shellBar/ContentButtonRenderer'],function(l,B,C){"use strict";var A=l.AvatarSize;var c=B.extend("sap.f.shallBar.ContentButton",{metadata:{library:"sap.f",aggregations:{avatar:{type:"sap.f.Avatar",multiple:false}}},renderer:C});c.prototype.setAvatar=function(a){a.setDisplaySize(A.XS);return this.setAggregation("avatar",a);};c.prototype._getText=function(){if(this._bInOverflow){return B.prototype._getText.call(this);}return"";};return c;});
