//@ui5-bundle sap/tnt/library-h2-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/tnt/library',["sap/ui/core/library","sap/m/library"],function(){"use strict";sap.ui.getCore().initLibrary({name:"sap.tnt",version:"1.76.0",dependencies:["sap.ui.core","sap.m"],types:["sap.tnt.RenderMode"],interfaces:["sap.tnt.IToolHeader"],controls:["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel"],elements:["sap.tnt.NavigationListItem"]});sap.tnt.RenderMode={Narrow:"Narrow",Loose:"Loose"};return sap.tnt;});
sap.ui.require.preload({
	"sap/tnt/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.tnt","type":"library","embeds":[],"applicationVersion":{"version":"1.76.0"},"title":"SAPUI5 library with responsive controls.","description":"SAPUI5 library with responsive controls.","ach":"CA-UI5-CTR","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_hcb"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.76","libs":{"sap.ui.core":{"minVersion":"1.76.0"},"sap.m":{"minVersion":"1.76.0"}}},"library":{"i18n":"messagebundle.properties","content":{"controls":["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel"],"elements":["sap.tnt.NavigationListItem"],"types":["sap.tnt.RenderMode"],"interfaces":["sap.tnt.IToolHeader"]}}}}'
},"sap/tnt/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/tnt/InfoLabel.js":["sap/base/Log.js","sap/tnt/InfoLabelRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/IconPool.js","sap/ui/core/library.js"],
"sap/tnt/InfoLabelRenderer.js":["sap/base/Log.js","sap/tnt/library.js","sap/ui/core/IconPool.js","sap/ui/core/Renderer.js","sap/ui/core/library.js"],
"sap/tnt/NavigationList.js":["sap/base/Log.js","sap/m/Popover.js","sap/tnt/NavigationListRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/Element.js","sap/ui/core/InvisibleText.js","sap/ui/core/delegate/ItemNavigation.js","sap/ui/thirdparty/jquery.js"],
"sap/tnt/NavigationListItem.js":["sap/tnt/NavigationList.js","sap/tnt/library.js","sap/ui/core/Core.js","sap/ui/core/Icon.js","sap/ui/core/IconPool.js","sap/ui/core/InvisibleText.js","sap/ui/core/Item.js","sap/ui/core/Renderer.js","sap/ui/core/library.js","sap/ui/dom/jquery/Aria.js","sap/ui/events/KeyCodes.js"],
"sap/tnt/SideNavigation.js":["sap/tnt/SideNavigationRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/Icon.js","sap/ui/core/ResizeHandler.js","sap/ui/core/delegate/ScrollEnablement.js"],
"sap/tnt/ToolHeader.js":["sap/m/OverflowToolbar.js","sap/m/OverflowToolbarAssociativePopover.js","sap/m/library.js","sap/tnt/ToolHeaderRenderer.js","sap/tnt/library.js","sap/ui/Device.js","sap/ui/core/Control.js"],
"sap/tnt/ToolHeaderRenderer.js":["sap/m/BarInPageEnabler.js","sap/m/OverflowToolbarRenderer.js","sap/ui/core/Renderer.js"],
"sap/tnt/ToolHeaderUtilitySeparator.js":["sap/tnt/library.js","sap/ui/core/Control.js"],
"sap/tnt/ToolPage.js":["sap/tnt/ToolPageRenderer.js","sap/tnt/library.js","sap/ui/Device.js","sap/ui/core/Control.js","sap/ui/core/ResizeHandler.js"],
"sap/tnt/ToolPageRenderer.js":["sap/ui/Device.js"],
"sap/tnt/library.js":["sap/m/library.js","sap/ui/core/library.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map