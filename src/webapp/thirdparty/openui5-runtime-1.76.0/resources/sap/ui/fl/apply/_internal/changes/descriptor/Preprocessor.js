/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/changes/descriptor/Applier","sap/ui/fl/apply/_internal/flexState/FlexState","sap/ui/fl/apply/_internal/flexState/ManifestUtils","sap/ui/performance/Measurement","sap/ui/fl/Utils"],function(A,F,M,a,U){"use strict";var P={preprocessManifest:function(m,c){a.start("flexProcessing","Complete flex processing",["sap.ui.fl"]);if(!U.isApplication(m,true)||!c.id){return Promise.resolve(m);}a.start("flexStateInitialize","Initialization of flex state",["sap.ui.fl"]);var C=c.componentData||{};var r=M.getFlexReference({manifest:m,componentData:C});return F.initialize({componentData:C,asyncHints:c.asyncHints,rawManifest:m,componentId:c.id,reference:r,partialFlexState:true}).then(function(){a.end("flexStateInitialize");a.start("flexAppDescriptorMerger","Client side app descriptor merger",["sap.ui.fl"]);var b=F.getAppDescriptorChanges(r);var u=A.applyChanges(m,b);a.end("flexAppDescriptorMerger");return u;});}};return P;},true);
