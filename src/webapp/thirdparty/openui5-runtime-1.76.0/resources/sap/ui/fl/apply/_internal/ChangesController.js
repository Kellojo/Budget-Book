/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/FlexControllerFactory","sap/ui/fl/Utils"],function(O,F){"use strict";var C={getFlexControllerInstance:function(s,a){if(typeof s==="string"){return O.create(s,a);}var m=s.appComponent||s;return O.createForControl(m);},getDescriptorFlexControllerInstance:function(s){if(typeof s.appId==="string"){return O.create(s.appId,s.appVersion);}var a=s.appComponent||s;var A=F.getAppDescriptorComponentObjectForControl(a);return O.create(A.name,A.version);},getAppComponentForSelector:function(s){if(typeof s.appId==="string"){return s;}return s.appComponent||F.getAppComponentForControl(s);}};return C;},true);
