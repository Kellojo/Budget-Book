/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/flexState/UI2Personalization/UI2PersonalizationState","sap/ui/fl/apply/_internal/flexState/FlexState","sap/ui/fl/apply/_internal/ChangesController"],function(U,F,C){"use strict";var a={load:function(p){var f=C.getFlexControllerInstance(p.selector);p.reference=f.getComponentName();if(!p.reference||!p.containerKey){return Promise.reject(new Error("not all mandatory properties were provided for the loading of the personalization"));}return F.initialize({componentId:p.selector.getId()}).then(function(){return U.getPersonalization(p.reference,p.containerKey,p.itemName);});}};return a;},true);
