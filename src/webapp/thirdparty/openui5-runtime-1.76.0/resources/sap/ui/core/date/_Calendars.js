/*
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r=new Map();var _={get:function(c){if(!r.has(c)){sap.ui.requireSync("sap/ui/core/date/"+c);}return r.get(c);},set:function(c,C){r.set(c,C);}};return _;});
