/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Item','sap/ui/base/ManagedObject'],function(l,I,M){"use strict";var V=I.extend("sap.m.ViewSettingsItem",{metadata:{library:"sap.m",properties:{selected:{type:"boolean",group:"Behavior",defaultValue:false}},events:{itemPropertyChanged:{parameters:{changedItem:{type:'sap.m.ViewSettingsItem'},propertyKey:{type:"string"},propertyValue:{type:"any"}}}}}});V.prototype.setSelected=function(v){V.prototype.setProperty.call(this,"selected",v,true);return this;};V.prototype.setProperty=function(n,v,s,f){M.prototype.setProperty.apply(this,arguments);f=f===undefined?true:f;if(f){this.fireItemPropertyChanged({changedItem:this,propertyKey:n,propertyValue:v});}};return V;});
