/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/mvc/XMLView","sap/m/Page"],function(C,X,P){"use strict";C.attachInit(function(){X.create({viewName:"sap.ui.support.supportRules.ui.views.Main"}).then(function(x){var p=new P("page",{showHeader:false,backgroundDesign:"Solid",content:[x]});p.placeAt("content");});});});
