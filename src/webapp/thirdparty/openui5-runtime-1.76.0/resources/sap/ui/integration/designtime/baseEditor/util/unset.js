/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath","sap/base/util/isPlainObject","sap/base/util/isEmptyObject"],function(O,i,a){"use strict";function u(p,o){var c=O.get(p.slice(0,-1),o);if(c){delete c[p[p.length-1]];return(Array.isArray(c)&&c.length===0||i(c)&&a(c)?u(p.slice(0,-1),o):o);}}return u;});
