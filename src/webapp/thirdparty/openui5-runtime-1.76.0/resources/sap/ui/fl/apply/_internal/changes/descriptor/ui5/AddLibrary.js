/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/Version"],function(V){"use strict";function _(m,c){var u={};if(c.minVersion){var M=new V(m.minVersion);u.minVersion=M.compareTo(c.minVersion)>=0?m.minVersion:c.minVersion;}if(c.lazy){u.lazy=m.lazy===c.lazy===true;}return u;}var A={applyChange:function(m,c){if(!m["sap.ui5"]["dependencies"]["libs"]){m["sap.ui5"]["dependencies"]["libs"]={};}var M=m["sap.ui5"]["dependencies"]["libs"];var C=c.getContent().libraries;Object.keys(C).forEach(function(l){if(M[l]){m["sap.ui5"]["dependencies"]["libs"][l]=_(M[l],C[l]);}else{m["sap.ui5"]["dependencies"]["libs"][l]=C[l];}});return m;}};return A;},true);
