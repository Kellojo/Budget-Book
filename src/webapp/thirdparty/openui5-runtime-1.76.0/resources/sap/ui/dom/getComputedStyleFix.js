/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var g=function(){var G=window.getComputedStyle;window.getComputedStyle=function(e,p){var c=G.call(this,e,p);if(c===null){if(document.body==null){var f=document.createElement("body");var h=document.getElementsByTagName("html")[0];h.insertBefore(f,h.firstChild);var s=f.style;f.parentNode.removeChild(f);return s;}return document.body.cloneNode(false).style;}return c;};};return g;});
