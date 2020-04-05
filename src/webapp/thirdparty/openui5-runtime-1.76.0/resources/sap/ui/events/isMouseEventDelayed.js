/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var i=function(n){n=n||navigator;return!!(D.browser.mobile&&!((D.os.ios&&D.os.version>=8&&D.browser.safari&&!D.browser.webview)||(D.browser.chrome&&!/SAMSUNG/.test(n.userAgent)&&D.browser.version>=32)));};return i;});
