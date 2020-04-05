/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/model/ClientTreeBinding'],function(C){"use strict";var J=C.extend("sap.ui.model.json.JSONTreeBinding");J.prototype._saveSubContext=function(n,c,s,N){if(n&&typeof n=="object"){var o=this.oModel.getContext(s+N);if(this.oCombinedFilter&&!this.bIsFiltering){if(this.filterInfo.aFilteredContexts&&this.filterInfo.aFilteredContexts.indexOf(o)!=-1){c.push(o);}}else{c.push(o);}}};return J;});
