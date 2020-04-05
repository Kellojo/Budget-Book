/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";var c=function cursorPos(p){var l=arguments.length,t,T;t=this.prop("tagName");T=this.prop("type");if(this.length===1&&((t=="INPUT"&&(T=="text"||T=="password"||T=="search"))||t=="TEXTAREA")){var d=this.get(0);if(l>0){if(typeof(d.selectionStart)=="number"){d.focus();d.selectionStart=p;d.selectionEnd=p;}return this;}else{if(typeof(d.selectionStart)=="number"){return d.selectionStart;}return-1;}}else{return this;}};q.fn.cursorPos=c;return q;});
