/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"PANEL_NAME",plural:"PANEL_NAME_PLURAL"},palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/Panel.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:function(p){if(p.getHeaderToolbar()){return;}return{changeType:"rename",domRef:".sapMPanelHdr"};},reveal:{changeType:"unhideControl",getLabel:function(c){var l,h=c.getHeaderToolbar();if(h&&h.getTitleControl()){l=h.getTitleControl().getText();}else{l=c.getHeaderText();}return l||c.getId();}}},aggregations:{headerToolbar:{domRef:":sap-domref > .sapMPanelHeaderTB, :sap-domref > .sapMPanelWrappingDivTb .sapMPanelHeaderTB, :sap-domref > .sapUiDtEmptyHeader"},infoToolbar:{domRef:":sap-domref > .sapMPanelInfoTB, :sap-domref > .sapUiDtEmptyInfoToolbar"},content:{domRef:":sap-domref > .sapMPanelContent",show:function(){this.setExpanded(true);},actions:{move:"moveControls"}}},templates:{create:"sap/m/designtime/Panel.create.fragment.xml"}};});
