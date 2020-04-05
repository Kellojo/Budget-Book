/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/EventProvider'],function(E){"use strict";var H=E.extend("sap.ui.core.routing.HashChangerBase",{metadata:{"abstract":true,publicMethods:["getHash","setHash","replaceHash"]},constructor:function(){E.apply(this);}});H.M_EVENTS={"HashChanged":"hashChanged","HashSet":"hashSet","HashReplaced":"hashReplaced"};H.prototype.setHash=function(h){this.fireEvent("hashSet",{sHash:h,hash:h});};H.prototype.replaceHash=function(h){this.fireEvent("hashReplaced",{sHash:h,hash:h});};return H;});
