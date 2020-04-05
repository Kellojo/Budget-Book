/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListItemBase','./library','./ActionListItemRenderer'],function(L,l,A){"use strict";var a=l.ListMode;var b=l.ListType;var c=L.extend("sap.m.ActionListItem",{metadata:{library:"sap.m",properties:{text:{type:"string",group:"Misc",defaultValue:null}}}});c.prototype.init=function(){this.setType(b.Active);L.prototype.init.apply(this,arguments);};c.prototype.getMode=function(){return a.None;};c.prototype.onsapspace=c.prototype.onsapenter;c.prototype.getContentAnnouncement=function(){return this.getText();};return c;});
