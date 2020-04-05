/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/Log','sap/ui/core/ComponentMetadata','jquery.sap.sjax'],function(L,C,q){"use strict";var A=function(c,o){C.apply(this,arguments);};A.prototype=Object.create(C.prototype);A.preprocessClassInfo=function(c){if(c&&typeof c.metadata==="string"){c.metadata={_src:c.metadata};}return c;};A.prototype.applySettings=function(c){var s=c.metadata;C.prototype.applySettings.call(this,c);if(s._src){L.warning("The metadata of the application "+this.getName()+" is loaded from file "+s._src+". This is a design time feature and not for productive usage!");var p=this.getName().replace(/\.\w+?$/,"");var u=sap.ui.require.toUrl(p.replace(/\./g,"/")+"/"+s._src);var r=q.sap.syncGetJSON(u);if(r.success){Object.assign(s,r.data);}else{L.error("Failed to load application metadata from \""+s._src+"\"! Reason: "+r.error);}}this._mRootComponent=s.rootComponent||null;};A.prototype.getRootComponent=function(){return this._mRootComponent;};return A;},true);
