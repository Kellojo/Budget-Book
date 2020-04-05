/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/actions/Action"],function(A){"use strict";var D=A.extend("sap.ui.test.actions.Drop",{metadata:{properties:{aggregationName:"string",before:"boolean",after:"boolean"},publicMethods:["executeOn"]},executeOn:function(c){var a;if(this.getIdSuffix()){a=c.$(this.getIdSuffix())[0];}else if(this.getAggregationName()){a=c.getDomRefForSetting(this.getAggregationName());}else{var b=c.getMetadata().getAggregations();var d=Object.keys(b).filter(function(m){return b[m].dnd.droppable;})[0];if(d){a=c.getDomRefForSetting(d)||c["get"+d]()[0];}}a=a||this.$(c)[0];if(a){var o={};if(this.getBefore()){o.position=this.dropPosition.BEFORE;}else if(this.getAfter()){o.position=this.dropPosition.AFTER;}else{o.position=this.dropPosition.CENTER;}this._createAndDispatchDragEvent("dragenter",a,o);this._createAndDispatchDragEvent("dragover",a,o);this._createAndDispatchDragEvent("drop",a,o);this._createAndDispatchDragEvent("dragend",a,o);}}});return D;});
