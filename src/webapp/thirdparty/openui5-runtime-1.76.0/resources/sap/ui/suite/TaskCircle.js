/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','sap/ui/core/EnabledPropagator','./library',"./TaskCircleRenderer"],function(C,E,l,T){"use strict";var a=l.TaskCircleColor;var b=C.extend("sap.ui.suite.TaskCircle",{metadata:{library:"sap.ui.suite",properties:{value:{type:"int",group:"Misc",defaultValue:0},maxValue:{type:"int",group:"Misc",defaultValue:100},minValue:{type:"int",group:"Misc",defaultValue:0},color:{type:"sap.ui.suite.TaskCircleColor",group:"Misc",defaultValue:a.Gray}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"}},events:{press:{}}}});E.call(b.prototype);b.prototype.init=function(){};b.prototype.onclick=function(e){this.firePress({});e.preventDefault();e.stopPropagation();};b.prototype.focus=function(){var d=this.getDomRef();if(d){d.focus();}};return b;});
