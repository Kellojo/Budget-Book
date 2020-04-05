/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/cards/BaseContent","sap/ui/core/ComponentContainer"],function(B,C){"use strict";var a=B.extend("sap.f.cards.ComponentContent",{renderer:{}});a.prototype.setConfiguration=function(c){B.prototype.setConfiguration.apply(this,arguments);if(!c){return;}var o=new C({manifest:c,async:true,componentCreated:function(){this.fireEvent("_actionContentReady");this.fireEvent("_updated");}.bind(this),componentFailed:function(){this.fireEvent("_actionContentReady");this._handleError("Card content failed to create component");}.bind(this)});this.setAggregation("_content",o);};return a;});
