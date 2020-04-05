/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var m={};m.getParam=function(p){return m.getParams()[p];};m.getParams=function(){return document.location.search.replace(/^\?/,'').split('&').reduce(function(p,P){var a=P.split('=');var v=a[1];switch(v){case'true':v=true;break;case'false':v=false;break;}p[a[0]]=v;return p;},{});};return m;},true);
