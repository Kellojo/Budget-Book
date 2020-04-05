/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TreeItemBaseRenderer","sap/ui/core/Renderer"],function(T,R){"use strict";var S=R.extend(T);S.apiVersion=2;S.renderLIContent=function(r,l){if(l.getIcon()){r.renderControl(l._getIconControl());}r.text(l.getTitle());};S.renderLIAttributes=function(r,l){T.renderLIAttributes.apply(this,arguments);r.class("sapMSTI");};return S;},true);
