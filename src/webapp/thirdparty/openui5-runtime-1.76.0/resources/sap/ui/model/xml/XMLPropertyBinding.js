/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/model/ChangeReason','sap/ui/model/ClientPropertyBinding',"sap/base/util/deepEqual"],function(C,a,d){"use strict";var X=a.extend("sap.ui.model.xml.XMLPropertyBinding");X.prototype.setValue=function(v){if(this.bSuspended){return;}if(this.oValue!=v){if(this.oModel.setProperty(this.sPath,v,this.oContext,true)){this.oValue=v;this.oModel.firePropertyChange({reason:C.Binding,path:this.sPath,context:this.oContext,value:v});}}};X.prototype.checkUpdate=function(f){if(this.bSuspended&&!f){return;}var v=this._getValue();if(!d(v,this.oValue)||f){this.oValue=v;this._fireChange({reason:C.Change});}};return X;});
