/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.script","sap/ui/support/supportRules/WindowCommunicationBus","sap/ui/support/supportRules/WCBConfig"],function(q,C,a){"use strict";var c;var b=C.extend("sap.ui.support.supportRules.CommunicationBus",{constructor:function(){if(!c){var o=new a({modulePath:"sap/ui/support",receivingWindow:"supportTool",uriParams:{origin:"sap-ui-xx-support-origin",frameId:"sap-ui-xx-frame-identifier"}});C.call(this,o);}else{return c;}}});c=new b();return c;},true);
