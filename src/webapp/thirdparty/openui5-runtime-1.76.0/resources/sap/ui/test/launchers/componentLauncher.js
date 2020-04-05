/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/ComponentContainer',"sap/base/util/uid","sap/ui/thirdparty/jquery",'sap/ui/core/Component'],function(C,u,q){"use strict";var _=false,a=null,b=null;return{start:function(c){if(_){throw new Error("sap.ui.test.launchers.componentLauncher: Start was called twice without teardown. Only one component can be started at a time.");}c.async=true;var p=sap.ui.component(c);_=true;return p.then(function(o){var i=u();b=q('<div id="'+i+'" class="sapUiOpaComponent"></div>');q("body").append(b).addClass("sapUiOpaBodyComponent");a=new C({component:o});a.placeAt(i);});},hasLaunched:function(){return _;},teardown:function(){if(!_){throw new Error("sap.ui.test.launchers.componentLauncher: Teardown was called before start. No component was started.");}a.destroy();b.remove();_=false;q("body").removeClass("sapUiOpaBodyComponent");}};},true);
