/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Base","sap/m/Button"],function(B,a){"use strict";var P=B.extend("sap.ui.rta.toolbar.Personalization",{renderer:'sap.ui.rta.toolbar.BaseRenderer',type:'personalization',metadata:{events:{exit:{},restore:{}}},constructor:function(){B.apply(this,arguments);this.setJustifyContent("End");}});P.prototype.buildContent=function(){[new a("sapUiRta_restore",{type:"Transparent",text:"{i18n>BTN_RESTORE}",visible:true,press:this.eventHandler.bind(this,'Restore')}).data('name','restore'),new a("sapUiRta_exit",{type:"Emphasized",text:"{i18n>BTN_DONE}",press:this.eventHandler.bind(this,'Exit')}).data('name','exit')].forEach(function(c){this.addItem(c);}.bind(this));return Promise.resolve();};P.prototype.setUndoRedoEnabled=function(){};P.prototype.setPublishEnabled=function(){};P.prototype.setRestoreEnabled=function(e){this.getControl('restore').setEnabled(e);};return P;},true);
