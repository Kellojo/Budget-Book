/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(L,R){"use strict";var A=R.extend(L);A.apiVersion=2;A.renderLIAttributes=function(r,l){r.class("sapMALI");};A.renderLIContent=function(r,l){var t=l.getText();if(t){r.openStart("div").class("sapMALIText").openEnd();r.text(t);r.close("div");}};return A;},true);
