/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/registry/Settings"],function(S){"use strict";var F={isPublishAvailable:function(){return S.getInstance().then(function(s){return!s.isProductiveSystem();});},isKeyUser:function(){return S.getInstance().then(function(s){return s.isKeyUser();});},isVersioningEnabled:function(l){return S.getInstance().then(function(s){return s.isVersioningEnabled(l);});}};return F;});
