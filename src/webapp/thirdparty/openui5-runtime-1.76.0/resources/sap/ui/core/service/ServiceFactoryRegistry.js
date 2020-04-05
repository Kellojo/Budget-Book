/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ServiceFactory',"sap/base/assert"],function(S,a){"use strict";var s=Object.create(null);var b=Object.create(null);b.register=function(c,o){a(c,"sServiceFactoryName must not be empty, null or undefined");a(o instanceof S,"oServiceFactory must be an instance of sap.ui.core.service.ServiceFactory");s[c]=o;return this;};b.unregister=function(c){a(c,"sServiceFactoryName must not be empty, null or undefined");delete s[c];return this;};b.get=function(c){return s[c];};return b;},true);
