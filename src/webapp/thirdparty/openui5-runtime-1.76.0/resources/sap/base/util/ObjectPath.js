/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var O={};var d=window;function g(o){return Array.isArray(o)?o.slice():o.split(".");}O.create=function(o,r){var a=r||d;var n=g(o);for(var i=0;i<n.length;i++){var N=n[i];if(a[N]===null||(a[N]!==undefined&&(typeof a[N]!=="object"&&typeof a[N]!=="function"))){throw new Error("Could not set object-path for '"+n.join(".")+"', path segment '"+N+"' already exists.");}a[N]=a[N]||{};a=a[N];}return a;};O.get=function(o,r){var a=r||d;var n=g(o);var p=n.pop();for(var i=0;i<n.length&&a;i++){a=a[n[i]];}return a?a[p]:undefined;};O.set=function(o,v,r){r=r||d;var n=g(o);var p=n.pop();var a=O.create(n,r);a[p]=v;};return O;});
