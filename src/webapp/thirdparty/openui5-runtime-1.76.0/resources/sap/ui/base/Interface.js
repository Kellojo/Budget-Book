/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var B;var I=function(o,m,f){if(!o){return o;}B=B||sap.ui.requireSync('sap/ui/base/Object');function c(o,M){return function(){var t=o[M].apply(o,arguments);if(f){return this;}else{return(t instanceof B)?t.getInterface():t;}};}if(!m){return{};}var M;for(var i=0,a=m.length;i<a;i++){M=m[i];if(!o[M]||typeof o[M]==="function"){this[M]=c(o,M);}}};return I;},true);
