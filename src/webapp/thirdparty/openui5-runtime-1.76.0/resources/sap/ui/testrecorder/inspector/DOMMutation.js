/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/ManagedObject","sap/ui/testrecorder/Constants"],function($,M,c){"use strict";var D=M.extend("sap.ui.testrecorder.inspector.DOMMutation",{constructor:function(o){this._observer=new window.MutationObserver(function(m){var i=true;m.forEach(function(a){if(_(a,c.HIGHLIGHTER_ID)||_(a,c.CONTEXTMENU_ID)){i=false;}});if(i){o();}});},start:function(){this._observer.observe(document.body,{subtree:true,childList:true});},stop:function(){this._observer.disconnect();}});function _(m,i){return m.target.id===i||(m.addedNodes.length&&m.addedNodes[0].id===i)||(m.removedNodes.length&&m.removedNodes[0].id===i);}return D;});
