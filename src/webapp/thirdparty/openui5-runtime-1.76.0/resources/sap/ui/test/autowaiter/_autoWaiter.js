/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_OpaLogger","sap/ui/test/autowaiter/_XHRWaiter","sap/ui/test/autowaiter/_timeoutWaiter","sap/ui/test/autowaiter/_promiseWaiter","sap/ui/test/autowaiter/_navigationContainerWaiter","sap/ui/test/autowaiter/_UIUpdatesWaiter"],function(_,a,b,c,d,e){"use strict";var l=_.getLogger("sap.ui.test.autowaiter._autoWaiter");var w=[d,e,a,c,b];return{hasToWait:function(){var r=false;w.forEach(function(W){if(!r&&W.hasPending()){r=true;}});if(!r){l.timestamp("opa.autoWaiter.syncPoint");l.debug("AutoWaiter syncpoint");}return r;},extendConfig:function(C){w.forEach(function(W){if(W.extendConfig){W.extendConfig(C);}});}};},true);
