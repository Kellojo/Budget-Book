/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var U={};U.isJson=function(t){if(typeof t!=="string"){return false;}try{JSON.parse(t);return true;}catch(e){return false;}};return U;});
