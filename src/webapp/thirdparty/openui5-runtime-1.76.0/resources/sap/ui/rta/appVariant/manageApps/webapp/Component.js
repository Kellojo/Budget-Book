/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/UIComponent"],function(U){"use strict";var _;var a;var b;return U.extend("sap.ui.rta.appVariant.manageApps.webapp.Component",{metadata:{manifest:"json",library:"sap.ui.rta",version:"0.9",properties:{idRunningApp:"string",isOverviewForKeyUser:{type:"boolean"},layer:"string"}},constructor:function(){_=arguments[1].idRunningApp;a=arguments[1].isOverviewForKeyUser;b=arguments[1].layer;U.prototype.constructor.apply(this,arguments);},init:function(){this.setIdRunningApp(_);this.setIsOverviewForKeyUser(a);this.setLayer(b);U.prototype.init.apply(this,arguments);}});});
