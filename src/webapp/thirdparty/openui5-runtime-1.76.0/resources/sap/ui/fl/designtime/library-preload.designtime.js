//@ui5-bundle sap/ui/fl/designtime/library-preload.designtime.js
/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/fl/designtime/variants/VariantManagement.designtime',["sap/ui/fl/Utils"],function(f){"use strict";var s=function(v,d){var a=f.getAppComponentForControl(v);var c=v.getId();var m=a.getModel(f.VARIANT_MODEL_NAME);var V=a.getLocalId(c)||c;if(!m){return;}m.setModelPropertiesForControl(V,d,v);m.checkUpdate(true);};return{annotations:{},properties:{showExecuteOnSelection:{ignore:false},showSetAsDefault:{ignore:false},manualVariantKey:{ignore:false},inErrorState:{ignore:false},editable:{ignore:false},modelName:{ignore:false},updateVariantInURL:{ignore:false}},variantRenameDomRef:function(v){return v.getTitle().getDomRef("inner");},customData:{},tool:{start:function(v){var d=true;s(v,d);},stop:function(v){var d=false;s(v,d);}}};});
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/fl/designtime/library.designtime',[],function(){"use strict";return{};});
sap.ui.predefine('sap/ui/fl/designtime/util/IFrame.designtime',["sap/ui/rta/plugin/iframe/SettingsDialog","sap/m/library"],function(I){"use strict";
function e(i){var o=new I();var s=i.get_settings();var d={urlBuilderParameters:I.buildUrlBuilderParametersFor(i),frameUrl:s.url,frameWidth:s.width,frameHeight:s.height,updateMode:true};return o.open(d).then(function(S){if(!S){return[];}var w;var h;if(S.frameWidth){w=S.frameWidth+S.frameWidthUnit;}else{w="100%";}if(S.frameHeight){h=S.frameHeight+S.frameHeightUnit;}else{h="100%";}return[{selectorControl:i,changeSpecificData:{changeType:"updateIFrame",content:{url:S.frameUrl,width:w,height:h}}}];});}
return{actions:{settings:function(){return{icon:"sap-icon://add-product",name:"CTX_EDIT_IFRAME",isEnabled:true,handler:e};},remove:{changeType:"hideControl"}}};});
//# sourceMappingURL=library-preload.designtime.js.map