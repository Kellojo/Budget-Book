/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"DIALOG_NAME",plural:"DIALOG_NAME_PLURAL"},palette:{group:"DIALOG"},actions:{rename:function(d){if(d.getCustomHeader()){return;}return{changeType:"rename",domRef:function(d){return d.getDomRef("title");}};}},aggregations:{content:{domRef:"> .sapMDialogSection",actions:{move:"moveControls"}},customHeader:{domRef:function(c){if(c._getAnyHeader()){return c._getAnyHeader().getDomRef();}}},subHeader:{domRef:":sap-domref > .sapMDialogSubHeader"},beginButton:{domRef:function(c){return c.getBeginButton().getDomRef();},ignore:function(c){return!c.getBeginButton()||!!c.getButtons().length;}},endButton:{domRef:function(c){return c.getEndButton().getDomRef();},ignore:function(c){return!c.getEndButton()||!!c.getButtons().length;}},buttons:{domRef:function(c){if(c.getButtons().length){return c._oToolbar.getDomRef();}}}}};});
