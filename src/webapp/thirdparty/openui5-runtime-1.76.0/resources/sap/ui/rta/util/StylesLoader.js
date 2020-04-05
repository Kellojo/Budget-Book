/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(q){"use strict";var m={};m.loadStyles=function(f){return q.get(sap.ui.require.toUrl(('sap.ui.rta.assets.'+f).replace(/\./g,"/"))+'.css').then(function(d){if(sap.ui.getCore().getConfiguration().getRTL()){return d.replace(/right/g,'left');}return d;});};return m;},true);
