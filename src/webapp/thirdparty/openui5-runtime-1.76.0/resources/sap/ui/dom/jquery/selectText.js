/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";var s=function selectText(S,E){var d=this.get(0);try{if(typeof(d.selectionStart)==="number"){d.setSelectionRange(S>0?S:0,E);}}catch(e){}return this;};q.fn.selectText=s;return q;});
