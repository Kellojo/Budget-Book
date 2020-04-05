/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var c=function(i,r){if(!Array.isArray(i)){return c([i],r)[0];}r=r||document.body;return i.map(function(I){var e=document.createElement("div");e.id=I;return r.appendChild(e);});};return c;});
