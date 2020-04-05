/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./encodeURL"],function(e){"use strict";var E=function(p){if(!p){return"";}var u=[];Object.keys(p).forEach(function(n){var v=p[n];if(v instanceof String||typeof v==="string"){v=e(v);}u.push(e(n)+"="+v);});return u.join("&");};return E;});
