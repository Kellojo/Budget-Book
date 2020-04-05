/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var v=function values(o){if(typeof o==="undefined"||o===null||o!==o){return[];}if(typeof Object.values==='function'){return Object.values(o);}if(typeof o==='string'){return o.split('');}if(typeof o!=='object'){return[];}return Object.keys(o).map(function(V){return o[V];});};return v;});
