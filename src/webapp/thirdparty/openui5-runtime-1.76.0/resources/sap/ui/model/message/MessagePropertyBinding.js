/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/model/ChangeReason','sap/ui/model/ClientPropertyBinding',"sap/base/util/deepEqual"],function(C,a,d){"use strict";var M=a.extend("sap.ui.model.message.MessagePropertyBinding");M.prototype.setValue=function(v){if(!d(this.oValue,v)){this.oModel.setProperty(this.sPath,v,this.oContext);}};M.prototype.checkUpdate=function(f){var v=this._getValue();if(!d(v,this.oValue)||f){this.oValue=v;this._fireChange({reason:C.Change});}};return M;});
