//@ui5-bundle sap/ui/dt/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/dt/designtime/notAdaptable.designtime',[],function(){"use strict";return{actions:"not-adaptable"};});
sap.ui.predefine('sap/ui/dt/designtime/notAdaptableTree.designtime',[],function(){"use strict";return function(m){var n="not-adaptable";var r={aggregations:{},actions:n};var a={propagateMetadata:function(){return{actions:n};},actions:n};var A=m.getMetadata().getAllAggregations();Object.keys(A).reduce(function(d,s){d.aggregations[s]=a;return d;},r);return r;};});
sap.ui.predefine('sap/ui/dt/designtime/notAdaptableVisibility.designtime',[],function(){"use strict";return{actions:{remove:null,reveal:null}};});
//# sourceMappingURL=library-preload.designtime.js.map