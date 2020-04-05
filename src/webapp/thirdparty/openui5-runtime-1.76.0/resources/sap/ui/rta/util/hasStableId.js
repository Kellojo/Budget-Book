/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils","sap/ui/dt/ElementUtil","sap/base/util/isPlainObject"],function(F,E,i){"use strict";function a(c){var p=c.sParentAggregationName;var P=c.getParent();if(P&&p){var b=P.getBindingInfo(p);if(b){if(b.template&&c instanceof b.template.getMetadata().getClass()){return b.template;}return false;}return a(P);}return false;}return function hasStableId(e){if(!e||e._bIsBeingDestroyed){return false;}if(typeof e.data("hasStableId")!=="boolean"){var s=e.getDesignTimeMetadata().getStableElements(e);var u=false;if(s.length>0){if(a(e.getElement())){u=s.some(function(S){var c;var A;var u=false;if(i(S)){c=S.id;A=S.appComponent;}else{c=S;}u=!F.checkControlId(c,A);if(u){var C=E.getElementInstance(c);if(E.getElementInstance(c)){var l=E.getAggregationInformation(C);u=!F.checkControlId(E.extractTemplateId(l),A);}}return u;});}else{u=s.some(function(S){var c=S.id||S;return!F.checkControlId(c,S.appComponent);});}}e.data("hasStableId",!u);}return e.data("hasStableId");};});
