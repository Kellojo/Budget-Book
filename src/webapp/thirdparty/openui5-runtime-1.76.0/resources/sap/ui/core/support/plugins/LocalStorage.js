/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/support/Plugin',"sap/base/Log"],function(P,L){"use strict";var a=P.extend("sap.ui.core.support.plugins.LocalStorage",{constructor:function(s){P.apply(this,["sapUiSupportLocalStorage","",s]);this._oStub=s;this._aEventIds=[this.getId()+"GetItem",this.getId()+"SetItem"];}});a.prototype.isToolPlugin=function(){return false;};a.prototype.onsapUiSupportLocalStorageGetItem=function(E){var i=E.getParameter("id"),p=E.getParameter("passThroughData"),v="";try{v=window.localStorage.getItem(i);if(!v||v==="undefined"){v="";}}catch(e){L.error("Could not get item '"+i+"' from localStorage: "+e.message);v="";}this._oStub.sendEvent(E.getParameter("callback"),{value:v,passThroughData:p});};a.prototype.onsapUiSupportLocalStorageSetItem=function(E){var i=E.getParameter("id"),v=E.getParameter("value");try{window.localStorage.setItem(i,v);}catch(e){L.error("Could not write to localStorage: '"+i+"' : '"+v+"': "+e.message);}};return a;});
