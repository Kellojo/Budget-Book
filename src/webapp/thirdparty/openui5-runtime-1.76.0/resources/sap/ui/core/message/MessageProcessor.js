/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/EventProvider',"sap/base/util/uid"],function(E,u){"use strict";var M=E.extend("sap.ui.core.message.MessageProcessor",{constructor:function(){E.apply(this,arguments);this.mMessages=null;this.id=u();sap.ui.getCore().getMessageManager().registerMessageProcessor(this);},metadata:{"abstract":true,publicMethods:["getId","setMessages","attachMessageChange","detachMessageChange"]}});M.M_EVENTS={messageChange:"messageChange"};M.prototype.attachMessageChange=function(d,f,l){this.attachEvent("messageChange",d,f,l);return this;};M.prototype.detachMessageChange=function(f,l){this.detachEvent("messageChange",f,l);return this;};M.prototype.fireMessageChange=function(p){this.fireEvent("messageChange",p);return this;};M.prototype.getId=function(){return this.id;};M.prototype.destroy=function(){sap.ui.getCore().getMessageManager().unregisterMessageProcessor(this);E.prototype.destroy.apply(this,arguments);};return M;});
