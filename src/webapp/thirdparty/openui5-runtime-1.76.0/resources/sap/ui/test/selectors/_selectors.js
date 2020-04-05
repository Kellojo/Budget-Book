/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/test/selectors/_BindingPath","sap/ui/test/selectors/_DropdownItem","sap/ui/test/selectors/_GlobalID","sap/ui/test/selectors/_ControlType","sap/ui/test/selectors/_LabelFor","sap/ui/test/selectors/_Properties","sap/ui/test/selectors/_Selector","sap/ui/test/selectors/_TableRowItem","sap/ui/test/selectors/_ViewID"],function($){"use strict";function g(){return Array.prototype.slice.call(arguments,1).reduce(function(r,S){var n={};var o=S.getMetadata()._sClassName.split(".").pop();var O=o.charAt(1).toLowerCase()+o.substring(2);n[O]=new S();return $.extend(r,n);},{});}return g.apply(this,arguments);});
