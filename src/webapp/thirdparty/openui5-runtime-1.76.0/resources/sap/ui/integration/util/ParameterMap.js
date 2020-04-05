/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Core'],function(C){"use strict";var P={};var p={"{{parameters.NOW_ISO}}":g,"{{parameters.TODAY_ISO}}":a,"{{parameters.LOCALE}}":b};function g(){return new Date().toISOString();}function a(){return new Date().toISOString().slice(0,10);}function b(){return C.getConfiguration().getLocale().toString();}P.processPredefinedParameter=function(s){var r;Object.keys(p).forEach(function(e){r=new RegExp(e,'g');if(s.indexOf(e)>-1){s=s.replace(r,p[e]());}});return s;};return P;});
