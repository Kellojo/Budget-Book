/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/EventBus"],function(E){"use strict";var S=E.extend("sap.ui.rta.util.ServiceEventBus");S.prototype._callListener=function(c,l,C,e,d){c.call(l,d);};S.prototype.getChannel=function(c){return this._mChannels[c];};return S;});
