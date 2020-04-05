/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";L.setLogEntriesLimit(Infinity);var l=[];var i=L.Level.DEBUG;return{setLevel:function(n){var s=n&&n.toUpperCase();var N=s&&L.Level[s];i=N||i;l.forEach(function(c){L.setLevel(i,c);});},getLogger:function(c){l.push(c);var a=L.getLogger(c,i);a.timestamp=function(m){if(console.timeStamp&&this.getLevel()>=L.Level.DEBUG){console.timeStamp(m);}};return a;},getLevel:function(){return i;}};},true);
