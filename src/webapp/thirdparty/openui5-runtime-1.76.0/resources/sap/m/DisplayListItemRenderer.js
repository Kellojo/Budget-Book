/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Renderer","./ListItemBaseRenderer"],function(c,R,L){"use strict";var T=c.TextDirection;var D=R.extend(L);D.apiVersion=2;D.renderLIAttributes=function(r,l){r.class("sapMDLI");};D.renderLIContent=function(r,l){var s=l.getLabel();if(s){r.openStart("label");r.attr("for",l.getId()+"-value");r.class("sapMDLILabel");r.openEnd();r.text(s);r.close("label");}var v=l.getValue();if(v){r.openStart("div",l.getId()+"-value");r.class("sapMDLIValue");var V=l.getValueTextDirection();if(V!=T.Inherit){r.attr("dir",V.toLowerCase());}r.openEnd();r.text(v);r.close("div");}};return D;},true);
