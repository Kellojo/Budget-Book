/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListRenderer','sap/ui/core/Renderer',"sap/base/Log"],function(L,R,a){"use strict";var G=R.extend(L);G.apiVersion=2;G.render=function(r,c){if(c._isIncompatible()){a.warning("Does not render sap.m.GrowingList#"+c.getId()+" when compatibility version is 1.16 or higher. Instead use sap.m.List/Table control with growing feature!");}else{L.render.call(this,r,c);}};return G;},true);
