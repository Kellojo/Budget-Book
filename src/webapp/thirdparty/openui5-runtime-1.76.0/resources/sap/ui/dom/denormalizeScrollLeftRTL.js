/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var d=function(n,o){if(o){if(D.browser.msie||D.browser.edge){return o.scrollWidth-o.clientWidth-n;}else if(D.browser.firefox||(D.browser.safari&&D.browser.version>=10)){return o.clientWidth+n-o.scrollWidth;}else if(D.browser.webkit){return n;}else{return n;}}};return d;});
