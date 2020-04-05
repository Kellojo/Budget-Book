/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(L,R){"use strict";var C=R.extend(L);C.apiVersion=2;C.renderLIAttributes=function(r,l){r.class("sapMCLI");};C.renderLIContent=function(r,l){l.getContent().forEach(r.renderControl,r);};return C;},true);
