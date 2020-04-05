/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseRename","sap/m/changeHandler/CombineButtons","sap/m/changeHandler/SplitMenuButton"],function(B,C,S){"use strict";return{"moveControls":"default","rename":B.createRenameChangeHandler({propertyName:"title",translationTextType:"XTIT"}),"combineButtons":{"changeHandler":C,"layers":{"CUSTOMER":false}},"splitMenuButton":{"changeHandler":S,"layers":{"CUSTOMER":false}}};});
