/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./SemanticControl","sap/m/Button","sap/m/OverflowToolbarButton"],function(S,B,O){"use strict";var a=S.extend("sap.f.semantic.SemanticButton",{metadata:{library:"sap.f","abstract":true,properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true}},events:{press:{}}}});a.prototype._getControl=function(){var c=this.getAggregation('_control'),C=this._getConfiguration(),o,n;if(!C){return null;}if(!c){o=C&&C.constraints==="IconOnly"?O:B;n=this._createInstance(o);n.applySettings(C.getSettings());if(typeof C.getEventDelegates==="function"){n.addEventDelegate(C.getEventDelegates(n));}this.setAggregation('_control',n,true);c=this.getAggregation('_control');}return c;};a.prototype._createInstance=function(c){return new c({id:this.getId()+"-button",press:jQuery.proxy(this.firePress,this)});};return a;});
