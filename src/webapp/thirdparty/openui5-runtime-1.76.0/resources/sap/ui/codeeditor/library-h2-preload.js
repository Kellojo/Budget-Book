//@ui5-bundle sap/ui/codeeditor/library-h2-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/codeeditor/library',['sap/ui/core/Core','sap/ui/core/library'],function(C){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.codeeditor",dependencies:["sap.ui.core"],types:[],interfaces:[],controls:["sap.ui.codeeditor.CodeEditor"],elements:[],noLibraryCSS:false,version:"1.76.0"});return sap.ui.codeeditor;});
sap.ui.require.preload({
	"sap/ui/codeeditor/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.ui.codeeditor","type":"library","embeds":[],"applicationVersion":{"version":"1.76.0"},"title":"UI5 library: sap.ui.codeeditor","description":"UI5 library: sap.ui.codeeditor","resources":"resources.json","offline":true,"openSourceComponents":[{"name":"ace","packagedWithMySelf":true,"version":"0.0.0"}]},"sap.ui":{"technology":"UI5","supportedThemes":["base"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.76","libs":{"sap.ui.core":{"minVersion":"1.76.0"}}},"library":{"i18n":false,"content":{"controls":["sap.ui.codeeditor.CodeEditor"],"elements":[],"types":[],"interfaces":[]}}}}'
},"sap/ui/codeeditor/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/ui/codeeditor/CodeEditor.js":["sap/ui/Device.js","sap/ui/codeeditor/js/ace/ace.js","sap/ui/codeeditor/js/ace/ext-beautify.js","sap/ui/codeeditor/js/ace/ext-language_tools.js","sap/ui/codeeditor/js/ace/mode-javascript.js","sap/ui/codeeditor/js/ace/mode-json.js","sap/ui/core/Control.js","sap/ui/core/Core.js","sap/ui/core/ResizeHandler.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/codeeditor/library.js":["sap/ui/core/Core.js","sap/ui/core/library.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map