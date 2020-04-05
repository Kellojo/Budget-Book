/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./TreeItemBaseRenderer','sap/ui/core/Renderer'],function(T,R){"use strict";var C=R.extend(T);C.renderLIAttributes=function(r,l){r.addClass("sapMCTI");T.renderLIAttributes.apply(this,arguments);};C.renderLIContent=function(r,l){l.getContent().forEach(function(c){r.renderControl(c);});};return C;},true);
