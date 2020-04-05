/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery','sap/ui/Global'],function(q){"use strict";q.fn.control=function(i,I){var c=this.map(function(){var C;if(I){var $=q(this).closest("[data-sap-ui],[data-sap-ui-related]");C=$.attr("data-sap-ui-related")||$.attr("id");}else{C=q(this).closest("[data-sap-ui]").attr("id");}return sap.ui.getCore().byId(C);});return c.get(i);};return q;});
