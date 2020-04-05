/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var P={};var p={};P.registerTypes=function(t){Object.keys(t).forEach(function(s){if(!p[s]){p[s]=new Promise(function(r,a){sap.ui.require([t[s]],r,a);});}});};P.deregisterType=function(t){if(p[t]){delete p[t];}};P.deregisterAllTypes=function(){p={};};P.create=function(s){return new Promise(function(r,a){if(!s){return a("No editor type was specified in the property configuration.");}if(!p[s]){return a("Editor type was not registered");}p[s].then(function(b){return r(new b());}).catch(function(e){return a(e);});});};return P;});
