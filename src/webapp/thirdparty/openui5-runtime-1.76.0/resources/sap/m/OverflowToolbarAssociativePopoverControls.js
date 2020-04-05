/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/Metadata','./OverflowToolbarButton','./OverflowToolbarToggleButton','./ToggleButton','./Button','sap/m/library',"sap/base/Log"],function(M,O,a,T,B,l,L){"use strict";var b=l.ButtonType;var c=M.createClass("sap.m._overflowToolbarHelpers.OverflowToolbarAssociativePopoverControls",{constructor:function(){this._mControlsCache={};}});c.prototype._preProcessSapMButton=function(o){var d=o.getType();this._mControlsCache[o.getId()]={buttonType:d};if(d===b.Default){o.setProperty("type",b.Transparent,true);}if(o.getIcon()){o.addStyleClass("sapMOTAPButtonWithIcon");}else{o.addStyleClass("sapMOTAPButtonNoIcon");}o.attachEvent("_change",this._onSapMButtonUpdated,this);};c.prototype._postProcessSapMButton=function(o){var p=this._mControlsCache[o.getId()];if(o.getType()!==p.buttonType){o.setProperty("type",p.buttonType,true);}o.removeStyleClass("sapMOTAPButtonNoIcon");o.removeStyleClass("sapMOTAPButtonWithIcon");o.detachEvent("_change",this._onSapMButtonUpdated,this);};c.prototype._onSapMButtonUpdated=function(e){var p=e.getParameter("name"),o=e.getSource(),s=o.getId();if(typeof this._mControlsCache[s]==="undefined"){return;}if(p==="type"){this._mControlsCache[s]["buttonType"]=o.getType();}};c.prototype._preProcessSapMOverflowToolbarButton=function(o){this._preProcessSapMButton(o);o._bInOverflow=true;};c.prototype._postProcessSapMOverflowToolbarButton=function(o){delete o._bInOverflow;this._postProcessSapMButton(o);};c.prototype._preProcessSapMToggleButton=function(o){this._preProcessSapMButton(o);};c.prototype._postProcessSapMToggleButton=function(o){this._postProcessSapMButton(o);};c.prototype._preProcessSapMOverflowToolbarToggleButton=function(o){this._preProcessSapMToggleButton(o);o._bInOverflow=true;};c.prototype._postProcessSapMOverflowToolbarToggleButton=function(o){delete o._bInOverflow;this._postProcessSapMToggleButton(o);};c._mSupportedControls={"sap.m.Button":{canOverflow:true,listenForEvents:["press"],noInvalidationProps:["enabled","type"]},"sap.m.MenuButton":{canOverflow:true,listenForEvents:["defaultAction","_menuItemSelected"],noInvalidationProps:["enabled","text","icon"]},"sap.m.OverflowToolbarButton":{canOverflow:true,listenForEvents:["press"],noInvalidationProps:["enabled","type"]},"sap.m.OverflowToolbarToggleButton":{canOverflow:true,listenForEvents:["press"],noInvalidationProps:["enabled","type","pressed"]},"sap.m.CheckBox":{canOverflow:true,listenForEvents:["select"],noInvalidationProps:["enabled","selected"]},"sap.m.ToggleButton":{canOverflow:true,listenForEvents:["press"],noInvalidationProps:["enabled","pressed"]},"sap.m.ComboBox":{canOverflow:true,listenForEvents:[],noInvalidationProps:["enabled","value","selectedItemId","selectedKey"]},"sap.m.SearchField":{canOverflow:true,listenForEvents:["search"],noInvalidationProps:["enabled","value","selectOnFocus"]},"sap.m.Input":{canOverflow:true,listenForEvents:[],noInvalidationProps:["enabled","value"]},"sap.m.DateTimeInput":{canOverflow:true,listenForEvents:["change"],noInvalidationProps:["enabled","value","dateValue"]},"sap.m.DatePicker":{canOverflow:true,listenForEvents:["change"],noInvalidationProps:["enabled","value","dateValue","displayFormat","valueFormat","displayFormatType","secondaryCalendarType","minDate","maxDate"]},"sap.m.DateTimePicker":{canOverflow:true,listenForEvents:["change"],noInvalidationProps:["enabled","value","dateValue","displayFormat","valueFormat","displayFormatType","secondaryCalendarType","minDate","maxDate"]},"sap.m.TimePicker":{canOverflow:true,listenForEvents:["change"],noInvalidationProps:["enabled","value","dateValue","displayFormat","valueFormat"]},"sap.m.RadioButton":{canOverflow:false,listenForEvents:[],noInvalidationProps:["enabled","selected"]},"sap.m.Slider":{canOverflow:false,listenForEvents:[],noInvalidationProps:["enabled","value"]},"sap.m.IconTabHeader":{canOverflow:false,listenForEvents:[],noInvalidationProps:["selectedKey"]},"sap.ui.comp.smartfield.SmartField":{canOverflow:true,listenForEvents:["change"],noInvalidationProps:["enabled","value","valueState","showValueHelp","contextEditable","clientSideMandatoryCheck","mandatory","name","placeholder","showSuggestion","tooltipLabel"]},"sap.ui.comp.smartfield.SmartLabel":{canOverflow:true,listenForEvents:[],noInvalidationProps:["enabled"]}};c.getControlConfig=function(o){var d;if(o.getMetadata().getInterfaces().indexOf("sap.m.IOverflowToolbarContent")!==-1){if(typeof o.getOverflowToolbarConfig!=="function"){L.error("Required method getOverflowToolbarConfig not implemented by: "+o.getMetadata().getName());return;}d=o.getOverflowToolbarConfig();if(typeof d!=="object"){L.error("Method getOverflowToolbarConfig implemented, but does not return an object in: "+o.getMetadata().getName());return;}return{canOverflow:!!d.canOverflow,listenForEvents:Array.isArray(d.autoCloseEvents)?d.autoCloseEvents:[],noInvalidationProps:Array.isArray(d.propsUnrelatedToSize)?d.propsUnrelatedToSize:[],preProcess:d.onBeforeEnterOverflow,postProcess:d.onAfterExitOverflow};}var s=c.getControlClass(o);d=c._mSupportedControls[s];if(d===undefined){return;}var p="_preProcess"+s.split(".").map(C).join("");if(typeof c.prototype[p]==="function"){d.preProcess=c.prototype[p];}var P="_postProcess"+s.split(".").map(C).join("");if(typeof c.prototype[P]==="function"){d.postProcess=c.prototype[P];}return d;};c.supportsControl=function(o){var d=c.getControlConfig(o);return typeof d!=="undefined"&&d.canOverflow;};c.getControlClass=function(o){if(o instanceof O){return"sap.m.OverflowToolbarButton";}else if(o instanceof a){return"sap.m.OverflowToolbarToggleButton";}else if(o instanceof T){return"sap.m.ToggleButton";}else if(o instanceof B){return"sap.m.Button";}return o.getMetadata().getName();};function C(n){return n.substring(0,1).toUpperCase()+n.substr(1);}return c;});
