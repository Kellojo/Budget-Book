/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var K={ALT:18,T:84};return{init:function(){var l=false;document.addEventListener("keydown",function(e){if(e.keyCode===K.ALT){l=typeof e.location!=="number"||e.location===1;return;}if(e.shiftKey&&e.altKey&&e.ctrlKey&&e.keyCode===K.T&&l){sap.ui.require(["sap/ui/testrecorder/Bootstrap"],function(B){B.init(["true","window"]);},function(E){console.warn("Could not load module 'sap/ui/testrecorder/Bootstrap'! Details: "+E);});}});}};});
