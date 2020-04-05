/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/DataType','./Type','./FormatException','./ParseException','./ValidateException'],function(D,T){"use strict";var m={format:function(v){return v;},parse:function(v){return v;}};var S=T.extend("sap.ui.model.SimpleType",{constructor:function(f,c){T.apply(this,arguments);this.setFormatOptions(f||{});this.setConstraints(c||{});this.sName="SimpleType";},metadata:{"abstract":true}});S.prototype.getModelFormat=function(){if(this.oInputFormat){return this.oInputFormat;}return m;};S.prototype.setConstraints=function(c){this.oConstraints=c;};S.prototype.setFormatOptions=function(f){this.oFormatOptions=f;};S.prototype.getPrimitiveType=function(i){switch(i){case"any":case"boolean":case"int":case"float":case"string":case"object":return i;default:var I=D.getType(i);return I&&I.getPrimitiveType().getName();}};S.prototype.combineMessages=function(M){if(M.length===1){return M[0];}else{return M.join(". ")+".";}};return S;});
