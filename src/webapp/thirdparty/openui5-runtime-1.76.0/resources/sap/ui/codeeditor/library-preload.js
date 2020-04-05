//@ui5-bundle sap/ui/codeeditor/library-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/codeeditor/library',['sap/ui/core/Core','sap/ui/core/library'],function(C){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.codeeditor",dependencies:["sap.ui.core"],types:[],interfaces:[],controls:["sap.ui.codeeditor.CodeEditor"],elements:[],noLibraryCSS:false,version:"1.76.0"});return sap.ui.codeeditor;});
sap.ui.require.preload({
	"sap/ui/codeeditor/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.ui.codeeditor","type":"library","embeds":[],"applicationVersion":{"version":"1.76.0"},"title":"UI5 library: sap.ui.codeeditor","description":"UI5 library: sap.ui.codeeditor","resources":"resources.json","offline":true,"openSourceComponents":[{"name":"ace","packagedWithMySelf":true,"version":"0.0.0"}]},"sap.ui":{"technology":"UI5","supportedThemes":["base"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.76","libs":{"sap.ui.core":{"minVersion":"1.76.0"}}},"library":{"i18n":false,"content":{"controls":["sap.ui.codeeditor.CodeEditor"],"elements":[],"types":[],"interfaces":[]}}}}',
	"sap/ui/codeeditor/CodeEditor.js":function(){sap.ui.loader.config({shim:{'sap/ui/codeeditor/js/ace/ace':{exports:'ace'},'sap/ui/codeeditor/js/ace/ext-language_tools':{deps:['sap/ui/codeeditor/js/ace/ace']},'sap/ui/codeeditor/js/ace/ext-beautify':{deps:['sap/ui/codeeditor/js/ace/ace']},'sap/ui/codeeditor/js/ace/mode-javascript':{deps:['sap/ui/codeeditor/js/ace/ace']},'sap/ui/codeeditor/js/ace/mode-json':{deps:['sap/ui/codeeditor/js/ace/ace']}}});sap.ui.define(['sap/ui/core/Core','sap/ui/core/Control','sap/ui/Device','sap/ui/core/ResizeHandler',"sap/ui/thirdparty/jquery",'sap/ui/codeeditor/js/ace/ace','sap/ui/codeeditor/js/ace/ext-language_tools','sap/ui/codeeditor/js/ace/ext-beautify','sap/ui/codeeditor/js/ace/mode-javascript','sap/ui/codeeditor/js/ace/mode-json'],function(C,a,D,R,q,b){"use strict";
var c=a.extend("sap.ui.codeeditor.CodeEditor",{
metadata:{library:"sap.ui.core",properties:{value:{type:"string",group:"Misc",defaultValue:""},type:{type:"string",group:"Appearance",defaultValue:"javascript"},width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"100%"},editable:{type:"boolean",group:"Behavior",defaultValue:true},lineNumbers:{type:"boolean",group:"Behavior",defaultValue:true},valueSelection:{type:"boolean",group:"Behavior",defaultValue:false},maxLines:{type:"int",group:"Behavior",defaultValue:0},colorTheme:{type:"string",group:"Behavior",defaultValue:"default"},syntaxHints:{type:"boolean",group:"Behavior",defaultValue:true}},events:{liveChange:{parameters:{value:{type:"string"},editorEvent:{type:"object"}}},change:{parameters:{value:{type:"string"},oldValue:{type:"string"}}}},defaultProperty:"content"},
renderer:function(r,o){r.write("<div ");r.writeControlData(o);r.addStyle("width",o.getWidth());r.addStyle("height",o.getHeight());r.addClass("sapCEd");r.writeAttributeEscaped("data-sap-ui-syntaxhints",o.getSyntaxHints());var t=o.getTooltip_AsString();if(t){r.writeAttributeEscaped('title',t);}r.writeStyles();r.writeClasses();r.write(">");r.write("</div>");}
});
var p=sap.ui.require.toUrl("sap/ui/codeeditor/js/ace");b.config.set("basePath",p);var l=b.require("ace/ext/language_tools");
c.prototype.init=function(){var d=document.createElement("div");this._oEditorDomRef=d;this._oEditorDomRef.style.height="100%";this._oEditorDomRef.style.width="100%";this._oEditor=b.edit(d);var s=this._oEditor.getSession();s.setUseWorker(false);s.setValue("");s.setUseWrapMode(true);s.setMode("ace/mode/javascript");var e="tomorrow";var u=C.getConfiguration().getTheme().toLowerCase();if(u.indexOf("hcb")>-1){e="chaos";}else if(u.indexOf("hcw")>-1){e="github";}else if(u==="sap_fiori_3"){e="crimson_editor";}else if(u==="sap_fiori_3_dark"){e="clouds_midnight";}this._oEditor.setTheme("ace/theme/"+e);this._oEditor.setOptions({enableBasicAutocompletion:true,enableSnippets:true,enableLiveAutocompletion:true});this._oEditor.renderer.setShowGutter(true);this._oEditor.$blockScrolling=Infinity;var t=this;this._oEditor.addEventListener("change",function(E){if(!t.getEditable()){return;}var v=t.getCurrentValue();t.fireLiveChange({value:v,editorEvent:E});});this._oEditor.addEventListener("blur",function(E){var v=t.getCurrentValue(),f=t.getValue();t.setProperty("value",v,true);if(v!=f&&t.getEditable()){t.fireChange({value:v,oldValue:f});}});this._oEditor.addEventListener("showGutterTooltip",function(f){if(D.browser.internet_explorer){return;}var $=q(f.$element),g=$.parents(".sapMDialog");if(g&&g.css("transform")){var m=g.position();$.css("transform","translate(-"+m.left+"px, -"+m.top+"px)");}});};
c.prototype.invalidate=function(){return this;};
c.prototype.setEditable=function(v){this.setProperty("editable",v,true);if(v){this._oEditor.renderer.$cursorLayer.element.style.display="";}else{this._oEditor.renderer.$cursorLayer.element.style.display="none";}this._oEditor.setReadOnly(!v);this._oEditor.textInput.setReadOnly(!v);return this;};
c.prototype.focus=function(){this._oEditor.focus();return this;};
c.prototype.setType=function(t){this.setProperty("type",t,true);this._oEditor.getSession().setMode("ace/mode/"+this.getType());return this;};
c.prototype.setSyntaxHints=function(s){this.setProperty("syntaxHints",s,true);this._oEditor.renderer.setShowGutter(this.getLineNumbers());if(this.getDomRef()){this.getDomRef().setAttribute("data-sap-ui-syntaxhints",s);}return this;};
c.prototype.setColorTheme=function(t){this.setProperty("colorTheme",t,true);if(t==="default"){t="tomorrow";}else if(t==="hcb"){t="tomorrow_night";}else if(t==="hcb_bright"){t="tomorrow_night_bright";}else if(t==="hcb_blue"){t="tomorrow_night_blue";}this._oEditor.setTheme("ace/theme/"+t);return this;};
c.prototype.setValue=function(v){this.setProperty("value",v,true);this._oEditor.getSession().setValue(this.getProperty("value"));if(!this.getValueSelection()){this._oEditor.selection.clearSelection();}return this;};
c.prototype.getCurrentValue=function(){return this._oEditor.getValue();};
c.prototype.setLineNumbers=function(v){this.setProperty("lineNumbers",v,true);this._oEditor.renderer.setShowGutter(this.getLineNumbers());return this;};
c.prototype.onBeforeRendering=function(){this._deregisterResizeListener();};
c.prototype.exit=function(){this._deregisterResizeListener();this._oEditor.destroy();q(this._oEditorDomRef).remove();this._oEditorDomRef=null;this._oEditor=null;};
c.prototype.onAfterRendering=function(){var d=this.getDomRef(),P=this.getMetadata().getPropertyDefaults();setTimeout(function(){if(this.getMaxLines()===P.maxLines&&this.getHeight()===P.height&&d.height<20){d.style.height="3rem";}}.bind(this),0);d.appendChild(this._oEditorDomRef);this._oEditor.renderer.updateText();this._registerResizeListener();};
c.prototype.setMaxLines=function(m){this._oEditor.setOption("maxLines",m);return this.setProperty("maxLines",m,true);};
c.prototype.addCustomCompleter=function(o){l.addCompleter({getCompletions:function(e,s,P,d,f){o.getCompletions(f,{oPos:P,sPrefix:d});}});};
c.prototype._getEditorInstance=function(){return this._oEditor;};
c.prototype.setVisible=function(v){if(this.getVisible()!==v){this.setProperty("visible",v);this.rerender();}return this;};
c.prototype.prettyPrint=function(){b.require("ace/ext/beautify").beautify(this._oEditor.session);};
c.prototype.destroy=function(s){this._oEditor.destroy(s);a.prototype.destroy.call(this,s);};
c.prototype.onfocusout=function(){this._oEditor.getSession().setUseWorker(false);};
c.prototype.onfocusin=function(){if(!this.getEditable()){if(!D.browser.firefox){document.activeElement.blur();}}this._oEditor.getSession().setUseWorker(true);};
c.prototype._registerResizeListener=function(){if(!this._iResizeListenerId){this._iResizeListenerId=R.register(this._oEditorDomRef,function(){this._oEditor.resize();}.bind(this));}};
c.prototype._deregisterResizeListener=function(){if(this._iResizeListenerId){R.deregister(this._iResizeListenerId);this._iResizeListenerId=null;}};
return c;});
}
},"sap/ui/codeeditor/library-preload"
);
//# sourceMappingURL=library-preload.js.map