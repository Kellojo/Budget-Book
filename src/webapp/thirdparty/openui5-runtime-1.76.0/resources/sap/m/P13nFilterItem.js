/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Item'],function(l,I){"use strict";var P=I.extend("sap.m.P13nFilterItem",{metadata:{library:"sap.m",properties:{operation:{type:"string",group:"Misc",defaultValue:null},value1:{type:"string",group:"Misc",defaultValue:null},value2:{type:"string",group:"Misc",defaultValue:null},columnKey:{type:"string",group:"Misc",defaultValue:null},exclude:{type:"boolean",group:"Misc",defaultValue:false}}}});P.prototype.setOperation=function(o){return this.setProperty("operation",o,true);};P.prototype.setColumnKey=function(k){return this.setProperty("columnKey",k,true);};P.prototype.setValue1=function(v){return this.setProperty("value1",v,true);};P.prototype.setValue2=function(v){return this.setProperty("value2",v,true);};P.prototype.setExclude=function(e){return this.setProperty("exclude",e,true);};return P;});
