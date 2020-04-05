/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(U,J){"use strict";var W=U.extend("sap.ui.integration.WidgetComponent");W.prototype.init=function(){var r=U.prototype.init.apply(this,arguments);this._applyWidgetModel();return r;};W.prototype._applyWidgetModel=function(){var m=new J();m.setData(this.getManifestEntry("sap.widget")||{});this.setModel(m,"sap.widget");};W.prototype.fireAction=function(p){this.oContainer.getParent().fireAction(p);};W.prototype.getWidgetConfiguration=function(p){return this.getModel("sap.widget").getProperty(p||"/");};W.prototype.update=function(){};return W;});
