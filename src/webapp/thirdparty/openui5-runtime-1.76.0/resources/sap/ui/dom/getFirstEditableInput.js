/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/isHidden"],function(q,i){"use strict";function f(c){return q(c).find('input, textarea').not('input[readonly],textarea[readonly],input[type=hidden],input[type=button],input[type=submit],input[type=reset],input[type=image],button').filter(':enabled:visible:first')[0];}function g(c){if(!c||i(c)){return null;}return f(c);}return g;});
