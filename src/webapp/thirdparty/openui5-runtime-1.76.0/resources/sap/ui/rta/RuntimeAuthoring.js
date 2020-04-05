/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/ManagedObject","sap/ui/rta/toolbar/Fiori","sap/ui/rta/toolbar/Standalone","sap/ui/rta/toolbar/Personalization","sap/ui/dt/DesignTime","sap/ui/dt/Overlay","sap/ui/rta/command/Stack","sap/ui/rta/command/CommandFactory","sap/ui/rta/command/LREPSerializer","sap/ui/rta/plugin/Rename","sap/ui/rta/plugin/DragDrop","sap/ui/rta/plugin/RTAElementMover","sap/ui/rta/plugin/CutPaste","sap/ui/rta/plugin/Remove","sap/ui/rta/plugin/CreateContainer","sap/ui/rta/plugin/additionalElements/AdditionalElementsPlugin","sap/ui/rta/plugin/additionalElements/AddElementsDialog","sap/ui/rta/plugin/additionalElements/AdditionalElementsAnalyzer","sap/ui/rta/plugin/Combine","sap/ui/rta/plugin/Split","sap/ui/rta/plugin/Selection","sap/ui/rta/plugin/Settings","sap/ui/rta/plugin/Stretch","sap/ui/rta/plugin/ControlVariant","sap/ui/rta/plugin/iframe/AddIFrame","sap/ui/dt/plugin/ToolHooks","sap/ui/dt/plugin/ContextMenu","sap/ui/dt/plugin/TabHandling","sap/ui/rta/Utils","sap/ui/dt/Util","sap/ui/dt/ElementUtil","sap/ui/fl/Utils","sap/ui/fl/LayerUtils","sap/ui/fl/Layer","sap/ui/fl/write/api/FeaturesAPI","sap/ui/fl/write/api/VersionsAPI","sap/ui/fl/write/api/PersistenceWriteAPI","sap/m/MessageBox","sap/m/MessageToast","sap/ui/rta/util/PopupManager","sap/ui/core/BusyIndicator","sap/ui/dt/DOMUtil","sap/ui/rta/util/StylesLoader","sap/ui/rta/appVariant/Feature","sap/ui/Device","sap/ui/rta/service/index","sap/ui/rta/util/ServiceEventBus","sap/ui/dt/OverlayRegistry","sap/base/strings/capitalize","sap/base/util/UriParameters","sap/ui/performance/Measurement","sap/base/Log","sap/ui/events/KeyCodes","sap/ui/rta/util/validateFlexEnabled"],function(q,M,F,S,P,D,O,C,a,L,R,b,c,d,e,f,A,g,h,i,j,k,l,m,n,o,T,p,r,U,s,E,t,u,v,w,V,x,y,z,B,G,H,I,J,K,N,Q,W,X,Y,Z,$,_,a1){"use strict";var b1="STARTING";var c1="STARTED";var d1="STOPPED";var e1="FAILED";var f1="SERVICE_STARTING";var g1="SERVICE_STARTED";var h1="SERVICE_FAILED";var i1=M.extend("sap.ui.rta.RuntimeAuthoring",{metadata:{library:"sap.ui.rta",associations:{rootControl:{type:"sap.ui.base.ManagedObject"}},properties:{customFieldUrl:"string",showCreateCustomField:"boolean",showToolbars:{type:"boolean",defaultValue:true},triggeredFromDialog:{type:"boolean",defaultValue:false},showWindowUnloadDialog:{type:"boolean",defaultValue:true},commandStack:{type:"any"},plugins:{type:"any",defaultValue:{}},flexSettings:{type:"object",defaultValue:{layer:v.CUSTOMER,developerMode:true}},mode:{type:"string",defaultValue:"adaptation"},metadataScope:{type:"string",defaultValue:"default"},validateAppVersion:{type:"boolean",defaultValue:false}},events:{start:{parameters:{editablePluginsCount:{type:"int"}}},stop:{},failed:{},selectionChange:{parameters:{selection:{type:"sap.ui.dt.Overlay[]"}}},modeChanged:{},undoRedoStackModified:{}}},_sAppTitle:null,_dependents:null,_sStatus:d1,constructor:function(){M.apply(this,arguments);this._dependents={};this._mServices={};this._mCustomServicesDictinary={};this.iEditableOverlaysCount=0;this.addDependent(new B(),'popupManager');if(this.getShowToolbars()){this.getPopupManager().attachOpen(this.onPopupOpen,this);this.getPopupManager().attachClose(this.onPopupClose,this);}if(window.parent!==window){this.startService('receiver');}if(this._shouldValidateFlexEnabled()){this.attachEvent("start",a1.bind(null,this));}},_RESTART:{NOT_NEEDED:"no restart",VIA_HASH:"CrossAppNavigation",RELOAD_PAGE:"reload"}});i1.prototype._shouldValidateFlexEnabled=function(){return document.location.hostname.endsWith(".sap"+".corp");};i1.prototype.getDefaultPlugins=function(){if(!this._mDefaultPlugins){var m1=new a({flexSettings:this.getFlexSettings()});this._mDefaultPlugins={};this._mDefaultPlugins["selection"]=new k({commandFactory:m1,multiSelectionRequiredPlugins:[i.getMetadata().getName(),e.getMetadata().getName()],elementEditableChange:this._onElementEditableChange.bind(this)});var n1=new c({commandFactory:m1});this._mDefaultPlugins["dragDrop"]=new b({elementMover:n1,commandFactory:m1,dragStarted:this._handleStopCutPaste.bind(this)});this._mDefaultPlugins["rename"]=new R({commandFactory:m1,editable:this._handleStopCutPaste.bind(this)});this._mDefaultPlugins["additionalElements"]=new A({commandFactory:m1,analyzer:h,dialog:new g()});this._mDefaultPlugins["createContainer"]=new f({commandFactory:m1});this._mDefaultPlugins["remove"]=new e({commandFactory:m1});this._mDefaultPlugins["cutPaste"]=new d({elementMover:n1,commandFactory:m1});this._mDefaultPlugins["settings"]=new l({commandFactory:m1});this._mDefaultPlugins["combine"]=new i({commandFactory:m1});this._mDefaultPlugins["split"]=new j({commandFactory:m1});this._mDefaultPlugins["contextMenu"]=new p();this._mDefaultPlugins["tabHandling"]=new r();this._mDefaultPlugins["stretch"]=new m();this._mDefaultPlugins["controlVariant"]=new n({commandFactory:m1});this._mDefaultPlugins["addIFrame"]=new o({commandFactory:m1});this._mDefaultPlugins["toolHooks"]=new T();}return q.extend({},this._mDefaultPlugins);};i1.prototype.addDependent=function(m1,n1,o1){o1=typeof o1==='undefined'?true:!!o1;if(!(n1 in this._dependents)){if(n1&&o1){this['get'+X(n1,0)]=this.getDependent.bind(this,n1);}this._dependents[n1||m1.getId()]=m1;}else{throw s.createError("RuntimeAuthoring#addDependent",s.printf("Can't add dependency with same key '{0}'",n1),"sap.ui.rta");}};i1.prototype.getDependent=function(m1){return this._dependents[m1];};i1.prototype.getDependents=function(){return this._dependents;};i1.prototype.removeDependent=function(m1){delete this._dependents[m1];};i1.prototype._destroyDefaultPlugins=function(m1){for(var n1 in this._mDefaultPlugins){var o1=this._mDefaultPlugins[n1];if(o1&&!o1.bIsDestroyed){if(!m1||m1[n1]!==o1){o1.destroy();}}}if(!m1){this._mDefaultPlugins=null;}};i1.prototype.onPopupOpen=function(m1){var n1=m1.getParameters().getSource();if(n1.isA("sap.m.Dialog")&&this.getToolbar().isA("sap.ui.rta.toolbar.Fiori")){this.getToolbar().setColor("contrast");}this.getToolbar().bringToFront();};i1.prototype.onPopupClose=function(m1){if(m1.getParameters()instanceof sap.m.Dialog){this.getToolbar().setColor();}};i1.prototype.setPlugins=function(m1){if(this._oDesignTime){throw new Error('Cannot replace plugins: runtime authoring already started');}this.setProperty("plugins",m1);};i1.prototype.setFlexSettings=function(m1){var n1=Y.fromQuery(window.location.search);var o1=n1.get("sap-ui-layer");m1=q.extend({},this.getFlexSettings(),m1);if(o1){m1.layer=o1.toUpperCase();}if(m1.scenario||m1.baseId){var p1=t.buildLrepRootNamespace(m1.baseId,m1.scenario,m1.projectId);m1.rootNamespace=p1;m1.namespace=p1+"changes/";}U.setRtaStyleClassName(m1.layer);this.setProperty("flexSettings",m1);};i1.prototype.getLayer=function(){return this.getFlexSettings().layer;};i1.prototype.getRootControlInstance=function(){if(!this._oRootControl){this._oRootControl=E.getElementInstance(this.getRootControl());}return this._oRootControl;};i1.prototype._getTextResources=function(){return sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");};i1.prototype._initVersioning=function(){var m1=!!t.getUshellContainer();if(m1){return w.isVersioningEnabled(this.getLayer()).then(function(n1){this._bVersioningEnabled=n1;}.bind(this));}this._bVersioningEnabled=false;return Promise.resolve();};i1.prototype.start=function(){this._sStatus=b1;var m1;var n1;var o1=this.getRootControlInstance();if(!this._oDesignTime){if(!o1){n1=new Error("Root control not found");$.error(n1);return Promise.reject(n1);}if(this.getValidateAppVersion()&&!t.isCorrectAppVersionFormat(t.getAppVersionFromManifest(t.getAppComponentForControl(o1).getManifest()))){n1=this._getTextResources().getText("MSG_INCORRECT_APP_VERSION_ERROR");$.error(n1);return Promise.reject(n1);}return this._initVersioning().then(this._determineReload.bind(this)).then(function(p1){if(p1){return Promise.reject("Reload triggered");}if(!this.getPlugins()||!Object.keys(this.getPlugins()).length){this.setPlugins(this.getDefaultPlugins());}this._destroyDefaultPlugins(this.getPlugins());Object.keys(this.getPlugins()).forEach(function(s1){if(this.getPlugins()[s1].attachElementModified){this.getPlugins()[s1].attachElementModified(this._handleElementModified,this);}}.bind(this));if(this.getPlugins()["settings"]){this.getPlugins()["settings"].setCommandStack(this.getCommandStack());}this._oSerializer=new L({commandStack:this.getCommandStack(),rootControl:this.getRootControl()});var q1=Object.keys(this.getPlugins());var r1=q1.map(function(s1){return this.getPlugins()[s1];},this);m1=new Promise(function(s1,t1){Z.start("rta.dt.startup","Measurement of RTA: DesignTime start up");this._oDesignTime=new D({scope:this.getMetadataScope(),plugins:r1});this._oDesignTime.addRootElement(this._oRootControl);q(O.getOverlayContainer()).addClass("sapUiRta");if(this.getLayer()===v.USER){q(O.getOverlayContainer()).addClass("sapUiRtaPersonalize");}else{q("body").addClass("sapUiRtaMode");}this._oDesignTime.getSelectionManager().attachChange(function(u1){this.fireSelectionChange({selection:u1.getParameter("selection")});},this);this._oDesignTime.attachEventOnce("synced",function(){s1();Z.end("rta.dt.startup","Measurement of RTA: DesignTime start up");},this);this._oDesignTime.attachEventOnce("syncFailed",function(u1){t1(u1.getParameter("error"));});}.bind(this));this._oldUnloadHandler=window.onbeforeunload;window.onbeforeunload=this._onUnload.bind(this);}.bind(this)).then(function(){var p1={selector:this.getRootControlInstance(),layer:this.getLayer()};return x.getResetAndPublishInfo(p1).then(function(q1){this.bInitialResetEnabled=q1.isResetEnabled;this.bInitialPublishEnabled=q1.isPublishEnabled;}.bind(this));}.bind(this)).then(function(){if(this.getShowToolbars()){return this._getToolbarButtonsVisibility().then(this._createToolsMenu.bind(this));}}.bind(this)).then(this._onStackModified.bind(this)).then(function(){I.loadStyles('InPageStyles').then(function(p1){var q1=p1.replace(/%scrollWidth%/g,H.getScrollbarWidth()+'px');H.insertStyles(q1,O.getOverlayContainer().get(0));});}).then(function(){return m1;}).then(function(){this.getPopupManager().setRta(this);if(this.getShowToolbars()){return this.getToolbar().show();}}.bind(this)).then(function(){if(K.browser.name==="ff"){q(document).on('contextmenu',j1);}}).then(function(){this.fnKeyDown=this._onKeyDown.bind(this);q(document).on("keydown",this.fnKeyDown);var p1=W.getOverlay(this.getRootControl());this._$RootControl=p1.getAssociatedDomRef();if(this._$RootControl){this._$RootControl.addClass("sapUiRtaRoot");}}.bind(this)).then(function(){this._sStatus=c1;this.fireStart({editablePluginsCount:this.iEditableOverlaysCount});}.bind(this)).catch(function(n1){if(n1!=="Reload triggered"){this._sStatus=e1;this.fireFailed(n1);}if(n1){this.destroy();return Promise.reject(n1);}}.bind(this));}};function j1(){return false;}i1.prototype._getToolbarButtonsVisibility=function(){return Promise.all([w.isPublishAvailable(),this._isDraftAvailable()]).then(function(m1){var n1=m1[0];this.bInitialDraftAvailable=m1[1];var o1=J.isPlatFormEnabled(this.getRootControlInstance(),this.getLayer(),this._oSerializer);var p1=n1&&o1;return{publishAvailable:n1,publishAppVariantSupported:p1,draftAvailable:this.bInitialDraftAvailable};}.bind(this));};i1.prototype._handleVersionToolbar=function(m1){var n1=this.bInitialDraftAvailable||m1;this.getToolbar().setDraftEnabled(n1);return this._setVersionLabel(n1);};i1.prototype._setVersionLabel=function(m1){var n1=sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");if(m1){return this.getToolbar().setVersionLabel(n1.getText("LBL_DRAFT"));}return V.getVersions({selector:this.getRootControlInstance(),layer:this.getLayer()}).then(function(o1){if(o1.length===0){return n1.getText("LBL_ORIGNINAL_APP");}if(o1[0].title){return o1[0].title;}if(o1[0].versionNumber===0){return n1.getText("LBL_DRAFT");}return n1.getText("LBL_VERSION_1");}).then(function(o1){return this.getToolbar().setVersionLabel(o1);}.bind(this));};i1.prototype._isDraftAvailable=function(){if(this._bVersioningEnabled){return V.isDraftAvailable({selector:this.getRootControlInstance(),layer:this.getLayer()}).then(function(m1){if(m1){return m1;}return this.canUndo();}.bind(this));}return Promise.resolve(false);};var k1=function(m1){G.hide();var n1=m1.userMessage||m1.stack||m1.message||m1.status||m1;var o1=sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");$.error("Failed to transfer runtime adaptation changes to layered repository",n1);var p1=o1.getText("MSG_LREP_TRANSFER_ERROR")+"\n"+o1.getText("MSG_ERROR_REASON",n1);y.error(p1,{styleClass:U.getRtaStyleClassName()});};i1.prototype.setCommandStack=function(m1){var n1=this.getProperty("commandStack");if(n1){n1.detachModified(this._onStackModified,this);}if(this._oInternalCommandStack){this._oInternalCommandStack.destroy();delete this._oInternalCommandStack;}var o1=this.setProperty("commandStack",m1);if(m1){m1.attachModified(this._onStackModified,this);}if(this.getPlugins()&&this.getPlugins()["settings"]){this.getPlugins()["settings"].setCommandStack(m1);}return o1;};i1.prototype.getCommandStack=function(){var m1=this.getProperty("commandStack");if(!m1){m1=new C();this._oInternalCommandStack=m1;this.setCommandStack(m1);}return m1;};i1.prototype._onStackModified=function(){var m1=this.getCommandStack();var n1=m1.canUndo();var o1=m1.canRedo();if(this.getShowToolbars()){this.getToolbar().setUndoRedoEnabled(n1,o1);this.getToolbar().setPublishEnabled(this.bInitialPublishEnabled||n1);this.getToolbar().setRestoreEnabled(this.bInitialResetEnabled||n1);if(this._bVersioningEnabled){this._handleVersionToolbar(n1);}}this.fireUndoRedoStackModified();};i1.prototype._closeToolbar=function(){if(this.getShowToolbars()&&this.getToolbar){return this.getToolbar().hide();}};i1.prototype.getSelection=function(){if(this._oDesignTime){return this._oDesignTime.getSelectionManager().get();}return[];};i1.prototype.stop=function(m1,n1){return((n1)?Promise.resolve(this._RESTART.NOT_NEEDED):this._handleReloadOnExit()).then(function(o1){return((m1)?Promise.resolve():this._serializeToLrep(this)).then(this._closeToolbar.bind(this)).then(function(){this.fireStop();if(o1!==this._RESTART.NOT_NEEDED){this._handleParametersOnExit(true).then(function(p1){this._triggerCrossAppNavigation(p1);if(o1===this._RESTART.RELOAD_PAGE){this._reloadPage();}}.bind(this));}}.bind(this));}.bind(this)).catch(k1).then(function(){this._sStatus=d1;q("body").removeClass("sapUiRtaMode");}.bind(this));};i1.prototype.restore=function(){this._onRestore();};i1.prototype.transport=function(){return this._onTransport();};i1.prototype.undo=function(){return this._onUndo();};i1.prototype.redo=function(){return this._onRedo();};i1.prototype.canUndo=function(){return this.getCommandStack().canUndo();};i1.prototype.canRedo=function(){return this.getCommandStack().canRedo();};i1.prototype._onKeyDown=function(m1){var n1=K.os.macintosh;var o1=O.getOverlayContainer().get(0).contains(document.activeElement);var p1=this.getShowToolbars()&&this.getToolbar().getDomRef().contains(document.activeElement);var q1=false;q(".sapUiDtContextMenu").each(function(u1,v1){if(v1.contains(document.activeElement)){q1=true;}});var r1=document.body===document.activeElement;var s1=q(document.activeElement).parents('.sapUiRtaEditableField').length>0;if((o1||p1||q1||r1)&&!s1){var t1=n1?m1.metaKey:m1.ctrlKey;if(m1.keyCode===_.Z&&m1.shiftKey===false&&m1.altKey===false&&t1===true){this._onUndo().then(m1.stopPropagation.bind(m1));}else if(((n1&&m1.keyCode===_.Z&&m1.shiftKey===true)||(!n1&&m1.keyCode===_.Y&&m1.shiftKey===false))&&m1.altKey===false&&t1===true){this._onRedo().then(m1.stopPropagation.bind(m1));}}};i1.prototype._onUnload=function(){var m1=this.getCommandStack();var n1=m1.canUndo()||m1.canRedo();if(n1&&this.getShowWindowUnloadDialog()){var o1=this._getTextResources().getText("MSG_UNSAVED_CHANGES");return o1;}window.onbeforeunload=this._oldUnloadHandler;};i1.prototype._serializeAndSave=function(){return this._oSerializer.saveCommands(this._bVersioningEnabled);};i1.prototype._serializeToLrep=function(){if(!this._bReloadNeeded){return this._oSerializer.needsReload().then(function(m1){this._bReloadNeeded=m1;return this._serializeAndSave();}.bind(this));}return this._serializeAndSave();};i1.prototype._onUndo=function(){this._handleStopCutPaste();return this.getCommandStack().undo();};i1.prototype._onRedo=function(){this._handleStopCutPaste();return this.getCommandStack().redo();};i1.prototype._onActivateDraft=function(m1){return this._serializeAndSave().then(V.activateDraft.bind(undefined,{layer:this.getLayer(),selector:this.getRootControlInstance(),title:m1.getParameter("versionTitle")})).then(function(){this._showMessageToast("MSG_DRAFT_ACTIVATION_SUCCESS");this.bInitialDraftAvailable=false;return this._handleVersionToolbar(false);}.bind(this)).catch(function(n1){U._showMessageBox(y.Icon.ERROR,"HEADER_ERROR","MSG_DRAFT_ACTIVATION_FAILED",n1);});};i1.prototype._handleDiscard=function(m1){var n1=t.getParsedURLHash();var o1=this.getRootControlInstance();var p1=this.getLayer();return this._handleDraftParameter(n1).then(function(n1){V.loadDraftForApplication({selector:o1,layer:p1});this.getCommandStack().removeAllCommands();this._triggerCrossAppNavigation(n1);i1.enableRestart(p1,o1);if(m1){this._reloadPage();}else{return this.stop(true,true);}}.bind(this));};i1.prototype._onDiscardDraft=function(){return V.discardDraft({layer:this.getLayer(),selector:this.getRootControlInstance(),updateState:true}).then(function(){var m1=function(o1){if(o1==="OK"){return this._handleDiscard(false);}}.bind(this);var n1=this._getTextResources().getText("MSG_DRAFT_DISCARD_DIALOG");y.confirm(n1,{icon:y.Icon.WARNING,title:"Discard",onClose:m1,styleClass:U.getRtaStyleClassName()});}.bind(this));};i1.prototype._createToolsMenu=function(m1){if(!this.getDependent('toolbar')){var n1;if(this.getLayer()===v.USER){n1=P;}else if(U.getFiori2Renderer()){n1=F;}else{n1=S;}if(this.getLayer()===v.USER){this.addDependent(new n1({textResources:this._getTextResources(),exit:this.stop.bind(this,false,true),restore:this._onRestore.bind(this)}),'toolbar');}else{this.addDependent(new n1({modeSwitcher:this.getMode(),publishVisible:m1.publishAvailable,textResources:this._getTextResources(),versioningVisible:this._bVersioningEnabled,draftEnabled:m1.draftAvailable,exit:this.stop.bind(this,false,false),transport:this._onTransport.bind(this),restore:this._onRestore.bind(this),undo:this._onUndo.bind(this),redo:this._onRedo.bind(this),modeChange:this._onModeChange.bind(this),manageApps:J.onGetOverview.bind(null,true,this.getLayer()),appVariantOverview:this._onGetAppVariantOverview.bind(this),saveAs:J.onSaveAs.bind(null,true,true,this.getLayer(),null),activateDraft:this._onActivateDraft.bind(this),discardDraft:this._onDiscardDraft.bind(this)}),'toolbar');}this.getToolbar().setPublishEnabled(this.bInitialPublishEnabled);this.getToolbar().setRestoreEnabled(this.bInitialResetEnabled);var o1=m1.publishAppVariantSupported;this.getToolbar().setAppVariantsVisible(o1);var p1=o1&&J.isOverviewExtended();this.getToolbar().setExtendedManageAppVariants(p1);if(o1){J.isManifestSupported().then(function(q1){this.getToolbar().setAppVariantsEnabled(q1);}.bind(this));}}};i1.prototype._onGetAppVariantOverview=function(m1){var n1=m1.getParameter("item");var o1=n1.getId()==='keyUser';return J.onGetOverview(o1,this.getLayer());};i1.prototype.destroy=function(){q.map(this._dependents,function(m1,n1){this.removeDependent(n1);m1.destroy(true);}.bind(this));Object.keys(this._mServices).forEach(function(m1){this.stopService(m1);},this);if(this._oDesignTime){this._oDesignTime.destroy();this._oDesignTime=null;q(document).off("keydown",this.fnKeyDown);this._destroyDefaultPlugins();this.setPlugins(null);}if(this._$RootControl){this._$RootControl.removeClass("sapUiRtaRoot");}this.setCommandStack(null);if(this._oServiceEventBus){this._oServiceEventBus.destroy();}if(K.browser.name==="ff"){q(document).off("contextmenu",j1);}window.onbeforeunload=this._oldUnloadHandler;M.prototype.destroy.apply(this,arguments);};i1.prototype._onTransport=function(){this._handleStopCutPaste();G.show(500);return this._serializeToLrep().then(function(){G.hide();var m1=t.isApplicationVariant(this._oRootControl)&&!t.isVariantByStartupParameter(this._oRootControl);return((m1)?J.getAppVariantDescriptor(this._oRootControl):Promise.resolve()).then(function(n1){var o1=[];if(n1){o1.push(n1);}return x.publish({selector:this.getRootControlInstance(),styleClass:U.getRtaStyleClassName(),layer:this.getLayer(),appVariantDescriptors:o1}).then(function(p1){if(p1!=="Error"&&p1!=="Cancel"){this._showMessageToast("MSG_TRANSPORT_SUCCESS");if(this.getShowToolbars()){var q1={selector:this.getRootControlInstance(),layer:this.getLayer()};x.getResetAndPublishInfo(q1).then(function(r1){this.getToolbar().setPublishEnabled(r1.isPublishEnabled);this.getToolbar().setRestoreEnabled(r1.isResetEnabled);}.bind(this));}}}.bind(this));}.bind(this));}.bind(this))['catch'](k1);};i1.prototype._deleteChanges=function(){return x.reset({selector:t.getAppComponentForControl(this.getRootControlInstance()),layer:this.getLayer(),generator:"Change.createInitialFileContent"}).then(function(){return this._handleParametersOnExit(false).then(function(m1){this._triggerCrossAppNavigation(m1);this._reloadPage();}.bind(this));}.bind(this)).catch(function(m1){if(m1!=="cancel"){U._showMessageBox(y.Icon.ERROR,"HEADER_RESTORE_FAILED","MSG_RESTORE_FAILED",m1);}});};i1.prototype._reloadPage=function(){window.location.reload();};i1.prototype._showMessageToast=function(m1){var n1=this._getTextResources().getText(m1);z.show(n1);};i1.needsRestart=function(m1){var n1=!!window.sessionStorage.getItem("sap.ui.rta.restart."+m1);return n1;};i1.enableRestart=function(m1,n1){var o1=t.getComponentClassName(n1);var p1=o1||true;window.sessionStorage.setItem("sap.ui.rta.restart."+m1,p1);};i1.disableRestart=function(m1){window.sessionStorage.removeItem("sap.ui.rta.restart."+m1);};i1.prototype._onRestore=function(){var m1=this.getLayer();var n1=m1===v.USER?this._getTextResources().getText("FORM_PERS_RESET_MESSAGE_PERSONALIZATION"):this._getTextResources().getText("FORM_PERS_RESET_MESSAGE");var o1=m1===v.USER?this._getTextResources().getText("BTN_RESTORE"):this._getTextResources().getText("FORM_PERS_RESET_TITLE");var p1=function(q1){if(q1==="OK"){i1.enableRestart(m1,this.getRootControlInstance());this._deleteChanges();this.getCommandStack().removeAllCommands();}}.bind(this);this._handleStopCutPaste();y.confirm(n1,{icon:y.Icon.WARNING,title:o1,onClose:p1,styleClass:U.getRtaStyleClassName()});};i1.prototype._scheduleOnCreated=function(m1,n1){function o1(p1){var q1=p1.getParameter("elementOverlay");if(q1.getElement().getId()===m1){this._oDesignTime.detachEvent("elementOverlayCreated",o1,this);n1(q1);}}this._oDesignTime.attachEvent("elementOverlayCreated",o1,this);};i1.prototype._scheduleOnCreatedAndVisible=function(m1,n1){function o1(q1){var r1=q1.getSource();if(r1.getGeometry()&&r1.getGeometry().visible){r1.detachEvent("geometryChanged",o1);n1(r1);}}function p1(q1){if(!q1.getGeometry()||!q1.getGeometry().visible){q1.attachEvent('geometryChanged',o1);}else{n1(q1);}}this._scheduleOnCreated(m1,function(q1){if(q1.isRendered()){p1(q1);}else{q1.attachEventOnce('afterRendering',function(r1){p1(r1.getSource());});}});};i1.prototype._scheduleRenameOnCreatedContainer=function(m1,n1){var o1=function(p1){p1.setSelected(true);this.getPlugins()["rename"].startEdit(p1);}.bind(this);this._scheduleOnCreatedAndVisible(n1,function(p1){var q1=this.getPlugins()["createContainer"].getCreatedContainerId(m1,p1.getElement().getId());var r1=W.getOverlay(q1);if(r1){o1(r1);}else{this._scheduleOnCreatedAndVisible(q1,o1);}}.bind(this));};i1.prototype._handleElementModified=function(m1){this._handleStopCutPaste();var n1=m1.getParameter("action");var o1=m1.getParameter("newControlId");var p1=m1.getParameter("command");if(p1 instanceof sap.ui.rta.command.BaseCommand){if(o1){this._scheduleOnCreated(o1,function(q1){var r1=q1.getDesignTimeMetadata();var s1=r1.getData().select;if(typeof s1==="function"){s1(q1.getElement());}});if(n1){this._scheduleRenameOnCreatedContainer(n1,o1);}}return this.getCommandStack().pushAndExecute(p1).catch(function(q1){if(q1&&q1.message&&q1.message.indexOf("The following Change cannot be applied because of a dependency")>-1){U._showMessageBox(y.Icon.ERROR,"HEADER_DEPENDENCY_ERROR","MSG_DEPENDENCY_ERROR",q1);}$.error("sap.ui.rta: "+q1.message);});}return Promise.resolve();};i1.prototype._onElementEditableChange=function(m1){var n1=m1.getParameter("editable");if(n1){this.iEditableOverlaysCount+=1;}else{this.iEditableOverlaysCount-=1;}};i1.prototype._handleStopCutPaste=function(){if(this.getPlugins()["cutPaste"]){this.getPlugins()["cutPaste"].stopCutAndPaste();}};i1.prototype._buildNavigationArguments=function(m1){return{target:{semanticObject:m1.semanticObject,action:m1.action,context:m1.contextRaw},params:m1.params,appSpecificRoute:m1.appSpecificRoute,writeHistory:false};};i1.prototype._hasParameter=function(m1,n1){var o1=this.getLayer();return m1.params&&m1.params[n1]&&m1.params[n1][0]===o1;};i1.prototype._hasDraftFalseParameter=function(m1,n1){return m1.params&&m1.params[n1]&&m1.params[n1][0]==="false";};i1.prototype._reloadWithMaxLayerOrDraftParam=function(m1,n1,o1){if(!m1.params){m1.params={};}if(!this._hasParameter(m1,u.FL_MAX_LAYER_PARAM)&&o1.hasHigherLayerChanges){m1.params[u.FL_MAX_LAYER_PARAM]=[o1.layer];}if(!this._hasParameter(m1,u.FL_DRAFT_PARAM)&&o1.hasDraftChanges){m1.params[u.FL_DRAFT_PARAM]=[o1.layer];V.loadDraftForApplication({selector:o1.selector,layer:o1.layer});}i1.enableRestart(o1.layer,this.getRootControlInstance());n1.toExternal(this._buildNavigationArguments(m1));return Promise.resolve(true);};i1.prototype._triggerCrossAppNavigation=function(m1){if(t.getUshellContainer()&&this.getLayer()!==v.USER){var n1=t.getUshellContainer().getService("CrossApplicationNavigation");n1.toExternal(this._buildNavigationArguments(m1));return Promise.resolve(true);}};i1.prototype._handleDraftParameter=function(m1){if(!t.getUshellContainer()||this.getLayer()===v.USER){return Promise.resolve();}return this._isDraftAvailable().then(function(n1){if(this._hasParameter(m1,u.FL_DRAFT_PARAM)){delete m1.params[u.FL_DRAFT_PARAM];}else if(this._hasDraftFalseParameter(m1,u.FL_DRAFT_PARAM)){delete m1.params[u.FL_DRAFT_PARAM];}else if(n1){m1.params[u.FL_DRAFT_PARAM]=["false"];}return m1;}.bind(this));};i1.prototype._handleMaxLayerParameter=function(m1,n1){if(n1&&this._hasParameter(m1,u.FL_MAX_LAYER_PARAM)){delete m1.params[u.FL_MAX_LAYER_PARAM];}return m1;};i1.prototype._handleParametersOnExit=function(m1){if(!t.getUshellContainer()||this.getLayer()===v.USER){return Promise.resolve();}var n1=t.getUshellContainer().getService("CrossApplicationNavigation");var o1=t.getParsedURLHash();if(!n1.toExternal||!o1){return Promise.resolve();}o1=this._handleMaxLayerParameter(o1,m1);var p1=this._handleDraftParameter(o1);return p1;};i1.prototype._handleReloadMessageBoxOnStart=function(m1){var n1;var o1=m1.layer===v.CUSTOMER;if(m1.hasHigherLayerChanges&&m1.hasDraftChanges){n1=o1?"MSG_PERSONALIZATION_AND_DRAFT_EXISTS":"MSG_HIGHER_LAYER_CHANGES_AND_DRAFT_EXISTS";}else if(m1.hasHigherLayerChanges){n1=o1?"MSG_PERSONALIZATION_EXISTS":"MSG_HIGHER_LAYER_CHANGES_EXIST";}else if(m1.hasDraftChanges){n1="MSG_DRAFT_EXISTS";}if(n1){return U._showMessageBox(y.Icon.INFORMATION,"HEADER_PERSONALIZATION_EXISTS",n1);}};i1.prototype._determineReload=function(){var m1=t.getUshellContainer();if(!m1){return Promise.resolve(false);}var n1={hasHigherLayerChanges:false,hasDraftChanges:false,layer:this.getLayer(),selector:this.getRootControlInstance(),ignoreMaxLayerParameter:false};var o1;var p1=false;var q1=t.getParsedURLHash();if(!this._hasParameter(q1,u.FL_MAX_LAYER_PARAM)&&n1.layer!==v.USER){o1=x.hasHigherLayerChanges({selector:n1.selector,ignoreMaxLayerParameter:n1.ignoreMaxLayerParameter});}if(!this._hasParameter(q1,u.FL_DRAFT_PARAM)&&this._bVersioningEnabled){p1=V.isDraftAvailable({selector:n1.selector,layer:n1.layer});}return Promise.all([o1,p1]).then(function(r1){n1.hasHigherLayerChanges=r1[0];n1.hasDraftChanges=r1[1];if(n1.hasHigherLayerChanges||n1.hasDraftChanges){return this._handleReloadMessageBoxOnStart(n1).then(function(){var s1=m1.getService("CrossApplicationNavigation");if(s1.toExternal&&q1){return this._reloadWithMaxLayerOrDraftParam(q1,s1,n1);}}.bind(this));}}.bind(this));};i1.prototype._handleReloadMessageBoxOnExit=function(m1){var n1;var o1=this.getLayer()===v.CUSTOMER;if(m1.hasHigherLayerChanges&&m1.hasDraftChanges){n1=o1?"MSG_RELOAD_WITH_PERSONALIZATION_AND_WITHOUT_DRAFT":"MSG_RELOAD_WITH_ALL_CHANGES";}else if(m1.hasHigherLayerChanges){n1=o1?"MSG_RELOAD_WITH_PERSONALIZATION":"MSG_RELOAD_WITH_ALL_CHANGES";}else if(m1.hasDraftChanges){n1="MSG_RELOAD_WITHOUT_DRAFT";}else if(m1.changesNeedReload){n1="MSG_RELOAD_NEEDED";}else if(m1.hasDraftParameter){n1="MSG_RELOAD_REMOVE_DRAFT_PARAMETER";}return U._showMessageBox(y.Icon.INFORMATION,"HEADER_RELOAD_NEEDED",n1,undefined,"BUTTON_RELOAD_NEEDED");};i1.prototype._handleReloadOnExit=function(){return Promise.all([(!this._bReloadNeeded)?this._oSerializer.needsReload():Promise.resolve(this._bReloadNeeded),x.hasHigherLayerChanges({selector:this.getRootControlInstance(),ignoreMaxLayerParameter:true}),this._isDraftAvailable()]).then(function(m1){var n1={changesNeedReload:m1[0],hasHigherLayerChanges:m1[1],hasDraftChanges:m1[2],hasDraftParameter:this._hasParameter(t.getParsedURLHash(),u.FL_DRAFT_PARAM)};if(n1.changesNeedReload||n1.hasHigherLayerChanges||n1.hasDraftChanges||n1.hasDraftParameter){var o1=this._RESTART.RELOAD_PAGE;if(!n1.changesNeedReload&&t.getUshellContainer()){o1=this._RESTART.VIA_HASH;}return this._handleReloadMessageBoxOnExit(n1).then(function(){return o1;});}return this._RESTART.NOT_NEEDED;}.bind(this));};i1.prototype._onModeChange=function(m1){this.setMode(m1.getParameter("item").getKey());};i1.prototype.setMode=function(m1){if(this.getProperty('mode')!==m1){var n1=this.getShowToolbars()&&this.getToolbar().getControl('modeSwitcher');var o1=m1==='adaptation';if(n1){n1.setSelectedButton(n1.getItems().filter(function(p1){return p1.getKey()===m1;}).pop().getId());}this._oDesignTime.setEnabled(o1);this.getPlugins()['tabHandling'][o1?'removeTabIndex':'restoreTabIndex']();this.setProperty('mode',m1);this.fireModeChanged({mode:m1});}};i1.prototype.setMetadataScope=function(m1){if(this._oDesignTime){$.error("sap.ui.rta: Failed to set metadata scope on RTA instance after RTA is started");return;}this.setProperty('metadataScope',m1);};function l1(m1){if(N.hasOwnProperty(m1)){return N[m1].replace(/\./g,'/');}}i1.prototype.startService=function(m1){if(this._sStatus!==c1){return new Promise(function(p1,q1){this.attachEventOnce('start',p1);this.attachEventOnce('failed',q1);}.bind(this)).then(function(){return this.startService(m1);}.bind(this),function(){return Promise.reject(s.createError("RuntimeAuthoring#startService",s.printf("Can't start the service '{0}' while RTA has been failed during a startup",m1),"sap.ui.rta"));});}var n1=l1(m1);var o1;if(!n1){return Promise.reject(s.createError("RuntimeAuthoring#startService",s.printf("Unknown service. Can't find any registered service by name '{0}'",m1),"sap.ui.rta"));}o1=this._mServices[m1];if(o1){switch(o1.status){case g1:{return Promise.resolve(o1.exports);}case f1:{return o1.initPromise;}case h1:{return o1.initPromise;}default:{return Promise.reject(s.createError("RuntimeAuthoring#startService",s.printf("Unknown service status. Service name = '{0}'",m1),"sap.ui.rta"));}}}else{this._mServices[m1]=o1={status:f1,location:n1,initPromise:new Promise(function(p1,q1){sap.ui.require([n1],function(r1){o1.factory=r1;if(!this._oServiceEventBus){this._oServiceEventBus=new Q();}s.wrapIntoPromise(r1)(this,this._oServiceEventBus.publish.bind(this._oServiceEventBus,m1)).then(function(s1){if(this.bIsDestroyed){throw s.createError("RuntimeAuthoring#startService",s.printf("RuntimeAuthoring instance is destroyed while initialising the service '{0}'",m1),"sap.ui.rta");}if(!q.isPlainObject(s1)){throw s.createError("RuntimeAuthoring#startService",s.printf("Invalid service format. Service should return simple javascript object after initialisation. Service name = '{0}'",m1),"sap.ui.rta");}o1.service=s1;o1.exports={};if(Array.isArray(s1.events)&&s1.events.length>0){q.extend(o1.exports,{attachEvent:this._oServiceEventBus.subscribe.bind(this._oServiceEventBus,m1),detachEvent:this._oServiceEventBus.unsubscribe.bind(this._oServiceEventBus,m1),attachEventOnce:this._oServiceEventBus.subscribeOnce.bind(this._oServiceEventBus,m1)});}var t1=s1.exports||{};q.extend(o1.exports,Object.keys(t1).reduce(function(u1,v1){var w1=t1[v1];u1[v1]=typeof w1==="function"?s.waitForSynced(this._oDesignTime,w1):w1;return u1;}.bind(this),{}));o1.status=g1;p1(Object.freeze(o1.exports));}.bind(this)).catch(q1);}.bind(this),function(r1){o1.status=h1;q1(s.propagateError(r1,"RuntimeAuthoring#startService",s.printf("Can't load service '{0}' by its name: {1}",m1,n1),"sap.ui.rta"));});}.bind(this)).catch(function(p1){o1.status=h1;return Promise.reject(s.propagateError(p1,"RuntimeAuthoring#startService",s.printf("Error during service '{0}' initialisation.",m1),"sap.ui.rta"));})};return o1.initPromise;}};i1.prototype.stopService=function(m1){var n1=this._mServices[m1];if(n1){if(n1.status===g1){if(typeof n1.service.destroy==="function"){n1.service.destroy();}}delete this._mServices[m1];}else{throw s.createError("RuntimeAuthoring#stopService",s.printf("Can't destroy service: unable to find service with name '{0}'",m1),"sap.ui.rta");}};i1.prototype.getService=function(m1){return this.startService(m1);};return i1;});
