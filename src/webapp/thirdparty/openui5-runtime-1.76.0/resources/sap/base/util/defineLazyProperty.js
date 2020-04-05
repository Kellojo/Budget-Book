/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var l=function(t,p,c,m){var P={configurable:true,get:function(){delete t[p];t[p]=c();return t[p];},set:function(v){delete t[p];t[p]=v;}};if(m){P.get[m]=true;}Object.defineProperty(t,p,P);};return l;});
