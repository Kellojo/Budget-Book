/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/DataType","sap/ui/Global","sap/ui/core/library","sap/m/library","sap/f/library"],function(D){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.integration",version:"1.76.0",dependencies:["sap.ui.core","sap.f","sap.m"],types:["sap.ui.integration.CardActionType","sap.ui.integration.CardDataMode"],controls:["sap.ui.integration.widgets.Card","sap.ui.integration.Widget","sap.ui.integration.host.HostConfiguration"],elements:["sap.ui.integration.Host","sap.ui.integration.Extension"],customElements:{"card":"sap/ui/integration/customElements/CustomElementCard","widget":"sap/ui/integration/customElements/CustomElementWidget","host-configuration":"sap/ui/integration/customElements/CustomElementHostConfiguration"}});var t=sap.ui.integration;t.CardActionType={Navigation:"Navigation",Submit:"Submit",Custom:'Custom'};t.CardDataMode={Active:"Active",Inactive:"Inactive"};return t;});
