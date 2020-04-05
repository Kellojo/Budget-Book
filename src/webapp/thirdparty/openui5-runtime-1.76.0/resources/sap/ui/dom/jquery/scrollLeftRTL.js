/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/dom/denormalizeScrollLeftRTL","sap/ui/thirdparty/jquery"],function(D,d,q){"use strict";var s=function(p){var o=this.get(0);if(o){if(p===undefined){if(D.browser.msie||D.browser.edge){return o.scrollWidth-o.scrollLeft-o.clientWidth;}else if(D.browser.firefox||(D.browser.safari&&D.browser.version>=10)){return o.scrollWidth+o.scrollLeft-o.clientWidth;}else if(D.browser.webkit){return o.scrollLeft;}else{return o.scrollLeft;}}else{o.scrollLeft=d(p,o);return this;}}};q.fn.scrollLeftRTL=s;return q;});
