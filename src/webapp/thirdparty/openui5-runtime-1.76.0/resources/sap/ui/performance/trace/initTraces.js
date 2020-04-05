/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/performance/trace/FESR","sap/base/Log"],function(F,L){"use strict";return function(){var f=document.querySelector("meta[name=sap-ui-fesr]"),s=f?f.getAttribute("content"):undefined,a=!!s&&s!=="false",p=window.location.search.match(/[\?|&]sap-ui-(?:xx-)?fesr=(true|x|X|false|.+)&?/),u=s&&s!=="true"?s:undefined;if(p){a=p[1]&&p[1]!="false";u=["true","false","x","X",undefined].indexOf(p[1])===-1?p[1]:u;}if(typeof window.performance.getEntriesByType==="function"){F.setActive(a,u);}else{L.debug("FESR is not supported in clients without support of window.Performance extensions.");}if(/sap-ui-xx-e2e-trace=(true|x|X)/.test(location.search)){sap.ui.requireSync("sap/ui/core/support/trace/E2eTraceLib");}};});
