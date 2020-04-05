/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";var g=function(){var d=this.get(0);try{if(typeof d.selectionStart==="number"){return d.value.substring(d.selectionStart,d.selectionEnd);}}catch(e){}return"";};q.fn.getSelectedText=g;return q;});
