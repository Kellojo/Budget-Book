/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/base/Log"],function(O,L){"use strict";var M=O.extend("sap.ui.core.message.MessageParser",{metadata:{publicMethods:["parse","setProcessor"]},constructor:function(){this._processor=null;}});M.prototype.setProcessor=function(p){this._processor=p;return this;};M.prototype.getProcessor=function(){return this._processor;};M.prototype.parse=function(r){L.error("MessageParser: parse-method must be implemented in the specific parser class. Messages "+"have been ignored.");};return M;});
