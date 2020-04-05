/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Avatar","sap/m/AvatarRenderer","./library"],function(M,A){"use strict";var a=M.extend("sap.f.Avatar",{metadata:{library:"sap.f",properties:{},designtime:"sap/f/designtime/Avatar.designtime"},renderer:A});a.prototype._getDefaultTooltip=function(){return sap.ui.getCore().getLibraryResourceBundle("sap.f").getText("AVATAR_TOOLTIP");};return a;});
