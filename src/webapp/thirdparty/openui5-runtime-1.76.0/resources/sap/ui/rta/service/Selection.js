/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";return function(r,p){var s=r._oDesignTime.getSelectionManager();function g(e){return e.map(function(E){return E.getElement().getId();});}s.attachEvent("change",function(e){p("change",g(e.getParameter("selection")));});return{events:["change"],exports:{get:function(){return g(s.get());},set:s.set.bind(s),add:s.add.bind(s),remove:s.remove.bind(s),reset:s.reset.bind(s)}};};});
