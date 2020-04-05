/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/library',"sap/base/Log"],function(M,L){"use strict";var w;return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectIdentifier.icon.svg"}},registerSettingsHandler:function(W){w=W;},getStableElements:function(o){return w?w.getStableElements(o):null;},actions:{settings:function(){if(!w){return;}if(!w.isSettingsAvailable()){L.error("sap.ui.comp.navpopover.ObjectIdentifier.designtime: 'settings' action is not available");return;}return{handler:function(o,g){return w.execute(o,g);}};}},templates:{create:"sap/m/designtime/ObjectIdentifier.create.fragment.xml"}};});
