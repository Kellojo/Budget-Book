//@ui5-bundle sap/ui/dt/library-h2-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/dt/library',["sap/ui/base/ManagedObjectMetadata","sap/ui/dt/SelectionMode","sap/ui/core/library"],function(M){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.dt",version:"1.76.0",dependencies:["sap.ui.core"],types:["sap.ui.dt.SelectionMode"],interfaces:[],controls:[],elements:[]});M.setDesignTimeDefaultMapping({"not-adaptable":"sap/ui/dt/designtime/notAdaptable.designtime","not-adaptable-tree":"sap/ui/dt/designtime/notAdaptableTree.designtime","not-adaptable-visibility":"sap/ui/dt/designtime/notAdaptableVisibility.designtime","not-removable":"sap/ui/dt/designtime/notAdaptableVisibility.designtime"});return sap.ui.dt;},true);
sap.ui.require.preload({
	"sap/ui/dt/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.ui.dt","type":"library","embeds":[],"applicationVersion":{"version":"1.76.0"},"title":"SAP UI library: sap.ui.dt (by SAP, Author)","description":"SAP UI library: sap.ui.dt (by SAP, Author)","ach":"CA-UI5-FL-RTA","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_hcb"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.76","libs":{"sap.ui.core":{"minVersion":"1.76.0"}}},"library":{"i18n":false,"content":{"controls":[],"elements":[],"types":["sap.ui.dt.SelectionMode"],"interfaces":[]}}}}'
},"sap/ui/dt/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/ui/dt/AggregationDesignTimeMetadata.js":["sap/ui/dt/DesignTimeMetadata.js"],
"sap/ui/dt/AggregationOverlay.js":["sap/base/util/merge.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/Overlay.js","sap/ui/dt/Util.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/ContextMenuControl.js":["sap/base/util/deepEqual.js","sap/m/Button.js","sap/m/FlexItemData.js","sap/m/HBox.js","sap/m/Popover.js","sap/m/VBox.js","sap/m/library.js","sap/ui/Device.js","sap/ui/base/ManagedObject.js","sap/ui/dom/jquery/rect.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/OverlayRegistry.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/ControlObserver.js":["sap/ui/dt/ManagedObjectObserver.js"],
"sap/ui/dt/DOMUtil.js":["sap/ui/Device.js","sap/ui/dom/jquery/zIndex.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/DesignTime.js":["sap/base/Log.js","sap/base/util/includes.js","sap/base/util/isPlainObject.js","sap/base/util/merge.js","sap/base/util/restricted/_curry.js","sap/ui/base/ManagedObject.js","sap/ui/dt/AggregationDesignTimeMetadata.js","sap/ui/dt/AggregationOverlay.js","sap/ui/dt/DesignTimeStatus.js","sap/ui/dt/ElementDesignTimeMetadata.js","sap/ui/dt/ElementOverlay.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/MetadataPropagationUtil.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/SelectionManager.js","sap/ui/dt/SelectionMode.js","sap/ui/dt/TaskManager.js","sap/ui/dt/TaskRunner.js","sap/ui/dt/Util.js"],
"sap/ui/dt/DesignTimeMetadata.js":["sap/base/util/merge.js","sap/ui/base/ManagedObject.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/ElementUtil.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/ElementDesignTimeMetadata.js":["sap/ui/dt/AggregationDesignTimeMetadata.js","sap/ui/dt/DesignTimeMetadata.js","sap/ui/dt/ElementUtil.js"],
"sap/ui/dt/ElementOverlay.js":["sap/base/Log.js","sap/base/util/isPlainObject.js","sap/base/util/merge.js","sap/base/util/restricted/_intersection.js","sap/base/util/restricted/_max.js","sap/ui/core/Control.js","sap/ui/dt/ControlObserver.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/ElementDesignTimeMetadata.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/ManagedObjectObserver.js","sap/ui/dt/Overlay.js","sap/ui/dt/Util.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/ElementUtil.js":["sap/base/util/isPlainObject.js","sap/ui/base/Object.js","sap/ui/core/Component.js","sap/ui/core/Element.js","sap/ui/core/UIArea.js","sap/ui/dt/Util.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/ManagedObjectObserver.js":["sap/base/util/includes.js","sap/ui/base/ManagedObject.js","sap/ui/dt/ElementUtil.js"],
"sap/ui/dt/MetadataPropagationUtil.js":["sap/base/util/isEmptyObject.js","sap/base/util/merge.js","sap/ui/dt/Util.js"],
"sap/ui/dt/MutationObserver.js":["sap/base/util/restricted/_intersection.js","sap/base/util/restricted/_uniq.js","sap/ui/base/ManagedObject.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/OverlayUtil.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/Overlay.js":["sap/base/Log.js","sap/ui/core/Element.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/MutationObserver.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/ScrollbarSynchronizer.js","sap/ui/dt/Util.js","sap/ui/dt/util/ZIndexManager.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/OverlayRegistry.js":["sap/base/util/isEmptyObject.js","sap/ui/base/ManagedObject.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/Util.js"],
"sap/ui/dt/OverlayUtil.js":["sap/ui/dt/ElementUtil.js","sap/ui/dt/OverlayRegistry.js"],
"sap/ui/dt/Plugin.js":["sap/ui/base/ManagedObject.js","sap/ui/dt/OverlayRegistry.js"],
"sap/ui/dt/ScrollbarSynchronizer.js":["sap/ui/base/ManagedObject.js","sap/ui/dt/DOMUtil.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/SelectionManager.js":["sap/base/util/includes.js","sap/ui/base/ManagedObject.js","sap/ui/dt/ElementOverlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/SelectionMode.js","sap/ui/dt/Util.js"],
"sap/ui/dt/TaskManager.js":["sap/base/util/isPlainObject.js","sap/ui/base/ManagedObject.js"],
"sap/ui/dt/TaskRunner.js":["sap/base/Log.js","sap/ui/dt/TaskManager.js","sap/ui/dt/Util.js"],
"sap/ui/dt/Util.js":["sap/base/util/includes.js","sap/base/util/isPlainObject.js","sap/ui/Device.js","sap/ui/base/ManagedObject.js","sap/ui/dt/DesignTimeStatus.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/enablement/ElementEnablementTest.js":["sap/base/util/ObjectPath.js","sap/ui/dt/DesignTime.js","sap/ui/dt/ElementOverlay.js","sap/ui/dt/enablement/Test.js","sap/ui/dt/enablement/Util.js","sap/ui/qunit/utils/waitForThemeApplied.js","sap/ui/thirdparty/jquery.js","sap/ui/thirdparty/sinon-4.js"],
"sap/ui/dt/enablement/Test.js":["sap/ui/base/ManagedObject.js"],
"sap/ui/dt/enablement/Util.js":["sap/ui/dt/DOMUtil.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/OverlayRegistry.js"],
"sap/ui/dt/enablement/elementDesigntimeTest.js":["sap/ui/dt/enablement/ElementEnablementTest.js","sap/ui/dt/enablement/report/QUnitReport.js"],
"sap/ui/dt/enablement/libraryTest.js":["jquery.sap.global.js","jquery.sap.sjax.js","sap/ui/model/json/JSONModel.js","sap/ui/model/resource/ResourceModel.js"],
"sap/ui/dt/enablement/report/LibraryReport.js":["sap/ui/dt/enablement/ElementEnablementTest.js","sap/ui/dt/enablement/Test.js"],
"sap/ui/dt/enablement/report/QUnitReport.js":["sap/ui/base/ManagedObject.js"],
"sap/ui/dt/enablement/report/Statistic.js":["sap/m/Label.js","sap/m/Text.js","sap/ui/core/Control.js","sap/ui/dt/enablement/report/StatisticRenderer.js","sap/ui/layout/form/SimpleForm.js","sap/ui/model/json/JSONModel.js"],
"sap/ui/dt/enablement/report/Table.js":["sap/m/Button.js","sap/m/RatingIndicator.js","sap/m/SearchField.js","sap/m/Text.js","sap/m/Toolbar.js","sap/m/ToolbarSpacer.js","sap/ui/core/Control.js","sap/ui/dt/enablement/report/TableRenderer.js","sap/ui/model/json/JSONModel.js","sap/ui/table/Column.js","sap/ui/table/TreeTable.js"],
"sap/ui/dt/library.js":["sap/ui/base/ManagedObjectMetadata.js","sap/ui/core/library.js","sap/ui/dt/SelectionMode.js"],
"sap/ui/dt/plugin/ContextMenu.js":["sap/base/assert.js","sap/base/util/restricted/_debounce.js","sap/ui/Device.js","sap/ui/dt/ContextMenuControl.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/Plugin.js","sap/ui/dt/Util.js","sap/ui/events/KeyCodes.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/plugin/ControlDragDrop.js":["sap/ui/dt/plugin/DragDrop.js","sap/ui/dt/plugin/ElementMover.js"],
"sap/ui/dt/plugin/CutPaste.js":["sap/ui/Device.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/Plugin.js","sap/ui/dt/Util.js","sap/ui/dt/plugin/ElementMover.js","sap/ui/events/KeyCodes.js"],
"sap/ui/dt/plugin/DragDrop.js":["sap/ui/Device.js","sap/ui/base/Object.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/Plugin.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/plugin/ElementMover.js":["sap/ui/base/ManagedObject.js","sap/ui/base/Object.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/Util.js"],
"sap/ui/dt/plugin/MouseSelection.js":["sap/ui/dt/Plugin.js"],
"sap/ui/dt/plugin/TabHandling.js":["sap/ui/dom/jquery/Selectors.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/Plugin.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/dt/plugin/ToolHooks.js":["sap/ui/dt/Plugin.js"],
"sap/ui/dt/util/ZIndexManager.js":["sap/base/Log.js","sap/base/util/includes.js","sap/base/util/restricted/_max.js","sap/base/util/restricted/_min.js","sap/m/InstanceManager.js","sap/ui/core/BusyIndicator.js","sap/ui/core/Popup.js","sap/ui/dt/Util.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map