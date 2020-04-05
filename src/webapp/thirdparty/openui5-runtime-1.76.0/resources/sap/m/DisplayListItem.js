/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","./library","./ListItemBase","./DisplayListItemRenderer"],function(c,l,L,D){"use strict";var T=c.TextDirection;var a=L.extend("sap.m.DisplayListItem",{metadata:{library:"sap.m",properties:{label:{type:"string",group:"Misc",defaultValue:null},value:{type:"string",group:"Data",defaultValue:null},valueTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:T.Inherit}}}});a.prototype.getContentAnnouncement=function(){return this.getLabel()+" "+this.getValue();};return a;});
