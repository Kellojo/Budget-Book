/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/thirdparty/jquery"],function(D,q){"use strict";var s=function(){var d=this.get(0);if(d){if(D.browser.msie){return d.scrollLeft;}else if(D.browser.firefox||(D.browser.safari&&D.browser.version>=10)){return(-d.scrollLeft);}else if(D.browser.webkit){return d.scrollWidth-d.scrollLeft-d.clientWidth;}else{return d.scrollLeft;}}};q.fn.scrollRightRTL=s;return q;});
