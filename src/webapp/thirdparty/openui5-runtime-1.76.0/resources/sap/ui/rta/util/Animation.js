/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(q){"use strict";var m={};m.waitTransition=function($,c){if(!($ instanceof q)){throw new Error('$element should be wrapped into jQuery object');}if(!q.isFunction(c)){throw new Error('fnCallback should be a function');}return new Promise(function(r){$.one('transitionend',r);var t;var a=function(T){if(!t){t=T;}if(T!==t){c();}else{window.requestAnimationFrame(a);}};window.requestAnimationFrame(a);});};return m;},true);
