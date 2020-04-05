/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";return{display:function(t,d,T){var s=Promise.resolve();return this._display(t,d,T,s);},_display:function(t,d,T,s){var a=this,v=[];if(!Array.isArray(t)){t=[t];}this._attachTitleChanged(t,T);return this._alignTargetsInfo(t).reduce(function(p,o){var b={prefix:o.prefix,propagateTitle:o.propagateTitle||false};return a._displaySingleTarget(o,d,p,b).then(function(V){V=V||{};V.targetInfo=o;v.push(V);});},s).then(function(){return v;});},_displaySingleTarget:function(t,d,s,T){var n=t.name,o=this.getTarget(n);if(o!==undefined){return o._display(d,s,T);}else{var e="The target with the name \""+n+"\" does not exist!";L.error(e,this);return Promise.resolve({name:n,error:e});}}};});
