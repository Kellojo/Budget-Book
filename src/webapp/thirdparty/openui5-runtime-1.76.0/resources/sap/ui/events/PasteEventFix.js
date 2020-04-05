/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";document.documentElement.addEventListener("paste",function(e){var a=document.activeElement,n;if(a instanceof HTMLElement&&!a.contains(e.target)){if(typeof ClipboardEvent==="function"){n=new ClipboardEvent("paste",{bubbles:true,cancelable:true,clipboardData:e.clipboardData});}else{n=document.createEvent('Event');n.initEvent("paste",true,true);n.clipboardData=e.clipboardData;}a.dispatchEvent(n);e.stopImmediatePropagation();e.preventDefault();}});});
