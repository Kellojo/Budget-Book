/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Core'],function(C){"use strict";var Q={},r=C.getLibraryResourceBundle("sap.m");Q.render=function(R,q){var c=q.getNavContainer();R.write("<div");R.addClass("sapMQuickViewCard");if(!q.getShowVerticalScrollBar()){R.addClass("sapMQuickViewCardNoScroll");}R.writeControlData(q);R.writeClasses();R.writeAccessibilityState(q,{label:{value:r.getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});R.write(">");R.renderControl(c);R.write("</div>");};return Q;},true);
