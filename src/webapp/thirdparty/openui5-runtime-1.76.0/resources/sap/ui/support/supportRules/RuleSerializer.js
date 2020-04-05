/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{serialize:function serializeRule(r){var a=function(k,v){if(typeof v==="function"){return v.toString();}else{return v;}};var b=JSON.stringify(r,a);return b;},deserialize:function(serializedRule,stringifyCheck){var rule;if(typeof serializedRule==='string'){rule=JSON.parse(serializedRule);}else{rule=serializedRule;}if(!stringifyCheck&&rule.check!==undefined){eval("rule.check = "+rule.check);}return rule;}};},true);
