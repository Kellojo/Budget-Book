/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/m/library"],function(){"use strict";sap.ui.getCore().initLibrary({name:"sap.tnt",version:"1.76.0",dependencies:["sap.ui.core","sap.m"],types:["sap.tnt.RenderMode"],interfaces:["sap.tnt.IToolHeader"],controls:["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel"],elements:["sap.tnt.NavigationListItem"]});sap.tnt.RenderMode={Narrow:"Narrow",Loose:"Loose"};return sap.tnt;});
