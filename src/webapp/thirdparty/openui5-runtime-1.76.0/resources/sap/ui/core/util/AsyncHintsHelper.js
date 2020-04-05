/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){'use strict';var A={};A.modifyUrls=function(a,u){function _(o,U){if(U===undefined){delete o.url;}}[a.components,a.libs].forEach(function(i){if(Array.isArray(i)){i.forEach(function(v){if(typeof v!=="object"){return;}if(typeof v.url==="string"){v.url=u(v.url);_(v,v.url);}else if(typeof v.url==="object"&&typeof v.url.url==="string"){v.url.url=u(v.url.url);_(v,v.url.url);}});}});return a;};return A;});
