/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S=function(){};S.extend=function(C){if(!C){var t=this;C=function(){t.apply(this,arguments);};}C.prototype=Object.create(this.prototype);C.prototype.constructor=C;C.extend=this.extend.bind(C);return C;};S.prototype.getInterface=function(){return this;};return S;});
