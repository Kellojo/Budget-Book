/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var E=function(){};E._aEventIds=["ControlForPersonalizationRendered"];E._aUnsubscribedEventIds=[];E._oHistory={};E.start=function(){E._aEventIds.forEach(function(e){if(E._aUnsubscribedEventIds.indexOf(e)===-1){sap.ui.getCore().getEventBus().subscribe("sap.ui",e,E.saveEvent);E._oHistory[e]=[];}});};E.saveEvent=function(c,e,p){var o={channelId:c,eventId:e,parameters:p.getId()};if(E._oHistory[e]){var b=E._oHistory[e].some(function(O){return(O.channelId===o.channelId&&O.eventId===o.eventId&&O.parameters===o.parameters);});if(!b){E._oHistory[e].push(o);}}};E.getHistoryAndStop=function(e){sap.ui.getCore().getEventBus().unsubscribe("sap.ui",e,E.saveEvent);E._addUnsubscribedEvent(e);return E._oHistory[e]||[];};E._addUnsubscribedEvent=function(e){if(E._aUnsubscribedEventIds.indexOf(e)===-1){E._aUnsubscribedEventIds.push(e);}};return E;},true);
