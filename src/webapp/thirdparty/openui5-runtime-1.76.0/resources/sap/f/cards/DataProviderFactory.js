/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/f/cards/ServiceDataProvider","sap/f/cards/RequestDataProvider","sap/f/cards/DataProvider"],function(B,S,R,D){"use strict";var a=B.extend("sap.f.cards.DataProviderFactory",{constructor:function(d){B.call(this);this._oDestinations=d;this._aDataProviders=[];}});a.prototype.destroy=function(){B.prototype.destroy.apply(this,arguments);if(this._aDataProviders){this._aDataProviders.forEach(function(d){if(!d.bIsDestroyed){d.destroy();}});this._aDataProviders=null;}};a.prototype.create=function(d,s){var o;if(!d){return null;}if(d.request){o=new R();}else if(d.service){o=new S();}else if(d.json){o=new D();}else{return null;}o.setDestinations(this._oDestinations);o.setSettings(d);if(o.isA("sap.f.cards.IServiceDataProvider")){o.createServiceInstances(s);}if(d.updateInterval){o.setUpdateInterval(d.updateInterval);}this._aDataProviders.push(o);return o;};return a;});
