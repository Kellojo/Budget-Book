/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/i18n/ResourceBundle','jquery.sap.global'],function(R,q){"use strict";q.sap.resources=function(){return R.create.apply(R,arguments);};q.sap.resources.isBundle=function(b){return b instanceof R;};q.sap.resources._getFallbackLocales=R._getFallbackLocales;return q;});
