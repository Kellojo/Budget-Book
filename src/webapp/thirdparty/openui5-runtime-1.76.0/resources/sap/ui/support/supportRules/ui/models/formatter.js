/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/supportRules/Constants"],function(c){"use strict";return{resolutionUrl:function(u,U){var s=u.indexOf(U)===u.length-1?"":", \u00a0";return U.text+s;},hasResolutionUrls:function(u){if(u&&u.length>0){return true;}return false;},filteredText:function(s,a,b,e){var r="Filtered by: ";r+=s===c.FILTER_VALUE_ALL?"":"Severity - "+s+";";r+=a===c.FILTER_VALUE_ALL?"":" Category    - "+a+";";r+=b===c.FILTER_VALUE_ALL?"":" Audience - "+b+";";r+=e===c.FILTER_VALUE_ALL?"":" Control Element - "+e+";";return r;}};});
