/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";var _={};var g=function(c,f){if(typeof c==="boolean"){f=c;c=null;}var k=c||"#DEFAULT";if(f){if(c){delete _[c];}else{_={};}}if(_[k]){return _[k];}if(!document.body){return{width:0,height:0};}var a=q("<DIV/>").css("visibility","hidden").css("height","0").css("width","0").css("overflow","hidden");if(c){a.addClass(c);}a.prependTo(document.body);var d=q("<div style=\"visibility:visible;position:absolute;height:100px;width:100px;overflow:scroll;opacity:0;\"></div>");a.append(d);var D=d.get(0);var w=D.offsetWidth-D.scrollWidth;var h=D.offsetHeight-D.scrollHeight;a.remove();if(w===0||h===0){return{width:w,height:h};}_[k]={width:w,height:h};return _[k];};return g;});
