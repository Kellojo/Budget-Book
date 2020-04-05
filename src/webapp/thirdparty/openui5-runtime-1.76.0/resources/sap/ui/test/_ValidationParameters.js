/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/test/matchers/matchers"],function(q,m){"use strict";var O={error:"func",check:"func",success:"func",timeout:"numeric",debugTimeout:"numeric",pollingInterval:"numeric",_stackDropCount:"numeric",errorMessage:"string",asyncPolling:"bool"};var a=q.extend({_stack:"string",viewName:"string",viewNamespace:"string",viewId:"string",fragmentId:"string",visible:"bool",enabled:"bool",matchers:"any",actions:"any",id:"any",controlType:"any",searchOpenDialogs:"bool",autoWait:"any"},O);var b=q.extend({},a,_());var c=q.extend({sOriginalControlType:"string",interaction:"any"},a);function _(){return Object.keys(sap.ui.test.matchers).reduce(function(r,M){M=M.charAt(0).toLowerCase()+M.substr(1);r[M]="any";return r;},{});}return{OPA_WAITFOR:O,OPA5_WAITFOR:b,OPA5_WAITFOR_DECORATED:c};});
