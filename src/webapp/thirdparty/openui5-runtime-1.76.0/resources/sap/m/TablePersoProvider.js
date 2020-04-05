/*
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/ManagedObject',"sap/base/Log"],function(M,L){"use strict";var T=M.extend("sap.m.TablePersoProvider",{constructor:function(i,s){M.apply(this,arguments);},metadata:{"abstract":true,library:"sap.m"}});T.prototype.init=function(){L.warning("This is the abstract base class for a TablePersoProvider. Do not create instances of this class, but use a concrete sub class instead.");L.debug("TablePersoProvider init");};T.prototype.getPersData=function(){L.debug("TablePersoProvider getPersData");};T.prototype.setPersData=function(b){L.debug("TablePersoProvider setPersData");};T.prototype.delPersData=function(){L.debug("TablePersoProvider delPersData");};T.prototype.getCaption=function(c){return null;};T.prototype.getGroup=function(c){return null;};T.prototype.resetPersData=function(){L.debug("TablePersoProvider resetPersData");};return T;});
