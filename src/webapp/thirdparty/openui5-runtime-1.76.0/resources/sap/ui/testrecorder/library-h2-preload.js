//@ui5-bundle sap/ui/testrecorder/library-h2-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/testrecorder/library',["sap/ui/core/library","sap/ui/core/Core","sap/ui/support/library"],function(){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.testrecorder",dependencies:["sap.ui.core","sap.ui.support"],interfaces:[],controls:[],elements:[],noLibraryCSS:true,version:"1.76.0",extensions:{"sap.ui.support":{internalRules:true}}});return sap.ui.testrecorder;});
sap.ui.require.preload({
	"sap/ui/testrecorder/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.ui.testrecorder","type":"library","embeds":[],"applicationVersion":{"version":"1.76.0"},"title":"UI5 library: sap.ui.testrecorder","description":"UI5 library: sap.ui.testrecorder","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":[]},"sap.ui5":{"dependencies":{"minUI5Version":"1.76","libs":{"sap.ui.core":{"minVersion":"1.76.0"}}},"library":{"i18n":false,"css":false,"content":{"controls":[],"elements":[],"interfaces":[]}}}}'
},"sap/ui/testrecorder/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/ui/testrecorder/CommunicationBus.js":["sap/ui/support/supportRules/WCBConfig.js","sap/ui/support/supportRules/WindowCommunicationBus.js"],
"sap/ui/testrecorder/DialectRegistry.js":["sap/ui/base/Object.js","sap/ui/testrecorder/Dialects.js"],
"sap/ui/testrecorder/Recorder.js":["sap/ui/base/ManagedObject.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/testrecorder/UIContextInjector.js":["sap/ui/base/Object.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/testrecorder/codeSnippets/CodeSnippetProvider.js":["sap/ui/base/Object.js","sap/ui/testrecorder/DialectRegistry.js","sap/ui/testrecorder/Dialects.js","sap/ui/testrecorder/codeSnippets/OPA5ControlSnippetGenerator.js","sap/ui/testrecorder/codeSnippets/RawControlSnippetGenerator.js","sap/ui/testrecorder/codeSnippets/UIVeri5ControlSnippetGenerator.js"],
"sap/ui/testrecorder/codeSnippets/ControlSnippetGenerator.js":["sap/ui/base/Object.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/testrecorder/codeSnippets/OPA5ControlSnippetGenerator.js":["sap/ui/testrecorder/codeSnippets/ControlSnippetGenerator.js","sap/ui/testrecorder/interaction/Commands.js"],
"sap/ui/testrecorder/codeSnippets/POMethodUtil.js":["sap/ui/base/Object.js"],
"sap/ui/testrecorder/codeSnippets/RawControlSnippetGenerator.js":["sap/ui/testrecorder/codeSnippets/ControlSnippetGenerator.js"],
"sap/ui/testrecorder/codeSnippets/RawSnippetUtil.js":["sap/ui/base/Object.js"],
"sap/ui/testrecorder/codeSnippets/UIVeri5ControlSnippetGenerator.js":["sap/ui/testrecorder/codeSnippets/ControlSnippetGenerator.js","sap/ui/testrecorder/interaction/Commands.js"],
"sap/ui/testrecorder/controlSelectors/ControlSelectorGenerator.js":["sap/ui/base/Object.js","sap/ui/test/RecordReplay.js"],
"sap/ui/testrecorder/inspector/ControlAPI.js":["sap/ui/base/Object.js","sap/ui/core/support/ToolsAPI.js","sap/ui/test/_ControlFinder.js"],
"sap/ui/testrecorder/inspector/ControlInspector.js":["sap/ui/base/Object.js","sap/ui/support/supportRules/ui/external/Highlighter.js","sap/ui/test/_ControlFinder.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/Constants.js","sap/ui/testrecorder/DialectRegistry.js","sap/ui/testrecorder/Dialects.js","sap/ui/testrecorder/codeSnippets/CodeSnippetProvider.js","sap/ui/testrecorder/codeSnippets/POMethodUtil.js","sap/ui/testrecorder/codeSnippets/RawSnippetUtil.js","sap/ui/testrecorder/controlSelectors/ControlSelectorGenerator.js","sap/ui/testrecorder/inspector/ControlAPI.js","sap/ui/testrecorder/inspector/ControlInspectorRepo.js","sap/ui/testrecorder/inspector/DOMMutation.js","sap/ui/testrecorder/ui/models/SharedModel.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/testrecorder/inspector/ControlInspectorRepo.js":["sap/ui/base/Object.js"],
"sap/ui/testrecorder/inspector/DOMMutation.js":["sap/ui/base/ManagedObject.js","sap/ui/testrecorder/Constants.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/testrecorder/interaction/CommandExecutor.js":["sap/ui/testrecorder/interaction/Commands.js","sap/ui/testrecorder/interaction/EnterText.js","sap/ui/testrecorder/interaction/Highlight.js","sap/ui/testrecorder/interaction/Press.js"],
"sap/ui/testrecorder/interaction/ContextMenu.js":["sap/ui/base/Object.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/Constants.js","sap/ui/testrecorder/interaction/CommandExecutor.js","sap/ui/testrecorder/interaction/Commands.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/testrecorder/interaction/EnterText.js":["sap/ui/support/supportRules/ui/external/Highlighter.js","sap/ui/test/_ControlFinder.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/Constants.js","sap/ui/testrecorder/interaction/Commands.js"],
"sap/ui/testrecorder/interaction/Highlight.js":["sap/ui/support/supportRules/ui/external/Highlighter.js","sap/ui/test/_ControlFinder.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/Constants.js"],
"sap/ui/testrecorder/interaction/Press.js":["sap/ui/support/supportRules/ui/external/Highlighter.js","sap/ui/test/_ControlFinder.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/Constants.js","sap/ui/testrecorder/interaction/Commands.js"],
"sap/ui/testrecorder/interaction/RecordListener.js":["sap/ui/base/Object.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/interaction/CommandExecutor.js","sap/ui/testrecorder/interaction/Commands.js","sap/ui/testrecorder/interaction/ContextMenu.js"],
"sap/ui/testrecorder/library.js":["sap/ui/core/Core.js","sap/ui/core/library.js","sap/ui/support/library.js"],
"sap/ui/testrecorder/ui/Overlay.js":["sap/m/Page.js","sap/ui/core/Core.js","sap/ui/core/mvc/XMLView.js"],
"sap/ui/testrecorder/ui/controllers/Main.controller.js":["sap/m/Button.js","sap/m/CheckBox.js","sap/m/Dialog.js","sap/m/MessageToast.js","sap/m/VBox.js","sap/ui/Device.js","sap/ui/core/mvc/Controller.js","sap/ui/model/Binding.js","sap/ui/model/json/JSONModel.js","sap/ui/model/resource/ResourceModel.js","sap/ui/support/supportRules/ui/external/ElementTree.js","sap/ui/testrecorder/CommunicationBus.js","sap/ui/testrecorder/CommunicationChannels.js","sap/ui/testrecorder/interaction/ContextMenu.js","sap/ui/testrecorder/ui/models/SharedModel.js","sap/ui/util/Storage.js"],
"sap/ui/testrecorder/ui/models/SharedModel.js":["sap/ui/model/json/JSONModel.js","sap/ui/model/resource/ResourceModel.js","sap/ui/testrecorder/Dialects.js"],
"sap/ui/testrecorder/ui/views/Main.view.xml":["sap/m/Bar.js","sap/m/Button.js","sap/m/Column.js","sap/m/ColumnListItem.js","sap/m/HBox.js","sap/m/IconTabBar.js","sap/m/IconTabFilter.js","sap/m/Image.js","sap/m/Label.js","sap/m/Page.js","sap/m/Panel.js","sap/m/ScrollContainer.js","sap/m/Select.js","sap/m/Switch.js","sap/m/Table.js","sap/m/Text.js","sap/m/VBox.js","sap/ui/codeeditor/CodeEditor.js","sap/ui/core/HTML.js","sap/ui/core/Icon.js","sap/ui/core/Item.js","sap/ui/core/mvc/XMLView.js","sap/ui/layout/FixFlex.js","sap/ui/layout/PaneContainer.js","sap/ui/layout/ResponsiveSplitter.js","sap/ui/layout/SplitPane.js","sap/ui/testrecorder/ui/controllers/Main.controller.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map