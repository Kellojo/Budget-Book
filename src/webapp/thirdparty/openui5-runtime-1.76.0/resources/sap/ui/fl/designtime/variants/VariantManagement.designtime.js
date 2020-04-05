/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(f){"use strict";var s=function(v,d){var a=f.getAppComponentForControl(v);var c=v.getId();var m=a.getModel(f.VARIANT_MODEL_NAME);var V=a.getLocalId(c)||c;if(!m){return;}m.setModelPropertiesForControl(V,d,v);m.checkUpdate(true);};return{annotations:{},properties:{showExecuteOnSelection:{ignore:false},showSetAsDefault:{ignore:false},manualVariantKey:{ignore:false},inErrorState:{ignore:false},editable:{ignore:false},modelName:{ignore:false},updateVariantInURL:{ignore:false}},variantRenameDomRef:function(v){return v.getTitle().getDomRef("inner");},customData:{},tool:{start:function(v){var d=true;s(v,d);},stop:function(v){var d=false;s(v,d);}}};});
