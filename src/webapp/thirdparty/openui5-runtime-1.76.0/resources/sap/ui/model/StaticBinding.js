/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./PropertyBinding","./ChangeReason","sap/base/assert","sap/base/Log"],function(P,C,a,L){"use strict";var S=P.extend("sap.ui.model.StaticBinding",{constructor:function(v){P.apply(this,[null,""]);this.vValue=v;},metadata:{publicMethods:["attachChange","detachChange"]}});S.prototype.getPath=function(){a(null,"Static Binding has no path!");return null;};S.prototype.getModel=function(){a(null,"Static Binding has no model!");return null;};S.prototype.getContext=function(){a(null,"Static Binding has no context!");return null;};S.prototype.updateRequired=function(){return true;};S.prototype.getValue=function(){return this.vValue;};S.prototype.setValue=function(v){if(v!==this.vValue){this.vValue=v;this._fireChange({reason:C.Change});}};S.prototype.attachChange=function(f,l){this.attachEvent("change",f,l);};S.prototype.detachChange=function(f,l){this.detachEvent("change",f,l);};return S;});
