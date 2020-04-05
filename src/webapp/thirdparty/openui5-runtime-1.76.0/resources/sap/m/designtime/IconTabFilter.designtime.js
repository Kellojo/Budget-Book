/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/IconTabFilter.icon.svg"}},actions:{rename:function(p){return{changeType:"rename",domRef:function(c){return c.$().find(".sapMITBText")[0];}};}},aggregations:{content:{domRef:function(c){var i=c.getParent(),I=i&&i.getParent(),C=c.getContent()||[];if(i.oSelectedItem===c&&C.length>0&&I){return I.getDomRef("content");}},actions:{move:"moveControls"}}}};});
