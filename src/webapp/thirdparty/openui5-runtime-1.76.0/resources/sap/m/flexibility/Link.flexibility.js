/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/changeHandler/ChangeLinkTarget","sap/ui/fl/changeHandler/BaseRename"],function(C,B){"use strict";return{"hideControl":"default","unhideControl":"default","rename":B.createRenameChangeHandler({propertyName:"text",translationTextType:"XBUT"}),"changeLinkTarget":{"changeHandler":C,"layers":{"CUSTOMER":false}}};});
