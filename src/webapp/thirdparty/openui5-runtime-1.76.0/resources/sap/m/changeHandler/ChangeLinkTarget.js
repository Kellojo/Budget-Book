/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var C={};C.applyChange=function(c,o,p){var m=p.modifier,a=c.getDefinition(),t=a.content,r={target:m.getProperty(o,"target")};m.setProperty(o,"target",t);c.setRevertData(r);return true;};C.revertChange=function(c,o,p){var m=p.modifier,r=c.getRevertData(),t=r.target;m.setProperty(o,"target",t);return true;};C.completeChangeContent=function(c,s,p){return true;};return C;});
