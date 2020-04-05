/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(o,c){var a=Array.isArray(o),l,i;if(a){for(i=0,l=o.length;i<l;i++){if(c.call(o[i],i,o[i])===false){break;}}}else{for(i in o){if(c.call(o[i],i,o[i])===false){break;}}}return o;};return e;});
