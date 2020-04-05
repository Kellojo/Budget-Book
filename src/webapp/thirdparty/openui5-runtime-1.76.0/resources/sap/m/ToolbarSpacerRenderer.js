/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var T={apiVersion:2};T.flexClass="sapMTBSpacerFlex";T.render=function(r,c){r.openStart("div",c);r.class("sapMTBSpacer");var w=c.getWidth();if(w){r.style("width",w);}else{r.class(T.flexClass);}r.openEnd().close("div");};return T;},true);
