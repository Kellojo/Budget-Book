/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/library"],function(l){"use strict";var A={apiVersion:2};A.render=function(r,a){r.openStart("div",a).class("sapFAvatarGroupItem").class("sapFAvatarGroupItem"+a._sAvatarDisplaySize);if(a._getGroupType()==="Individual"){r.attr("tabindex",0);}r.openEnd();r.renderControl(a._getAvatar());r.close("div");};return A;},true);
