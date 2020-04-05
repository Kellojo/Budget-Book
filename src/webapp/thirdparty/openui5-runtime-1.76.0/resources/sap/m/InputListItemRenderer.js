/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Renderer","./ListItemBaseRenderer"],function(c,R,L){"use strict";var T=c.TextDirection;var I=R.extend(L);I.apiVersion=2;I.renderLIAttributes=function(r,l){r.class("sapMILI");};I.renderLIContent=function(r,l){var s=l.getLabel();if(s){r.openStart("span",l.getId()+"-label");r.class("sapMILILabel");var a=l.getLabelTextDirection();if(a!==T.Inherit){r.attr("dir",a.toLowerCase());}r.openEnd();r.text(s);r.close("span");}r.openStart("div").class("sapMILIDiv").class("sapMILI-CTX").openEnd();l.getContent().forEach(r.renderControl,r);r.close("div");};return I;},true);
