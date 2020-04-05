/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{apiVersion:2,render:function(r,c){var a=c._oAcc,R=a.getRootAttributes(),t=c.getTitle(),b=t&&!c.getShowMenuButton();r.openStart("div",c);r.class("sapFShellBar");if(c.getShowNotifications()){r.class("sapFShellBarNotifications");}r.accessibilityState({role:R.role,label:R.label});r.openEnd();if(b){r.openStart("div",c.getId()+"-titleHidden").class("sapFShellBarTitleHidden").attr("role","heading").attr("aria-level","1").openEnd();r.text(t).close("div");}r.renderControl(c._getOverflowToolbar());r.close("div");},shouldAddIBarContext:function(){return false;}};},true);
