/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var W={},r=sap.ui.getCore().getLibraryResourceBundle("sap.f");W.render=function(R,w){var c=w.getAggregation("_content");R.write("<div");R.writeElementData(w);R.writeClasses();R.writeAccessibilityState(w,{role:"region",roledescription:{value:r.getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});R.write(">");if(c){R.renderControl(c);}R.write("</div>");};return W;});
