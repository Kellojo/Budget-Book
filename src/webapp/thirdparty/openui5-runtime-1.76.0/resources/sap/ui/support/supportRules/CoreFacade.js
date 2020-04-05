/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Component'],function(C){"use strict";var c=null;function a(o){c=o;return{getMetadata:function(){return c.getMetadata();},getUIAreas:function(){return c.mUIAreas;},getComponents:function(){return C.registry.all();},getModels:function(){return c.oModels;}};}return a;},true);
