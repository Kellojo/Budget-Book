/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
if(!('baseURI'in Node.prototype)){Object.defineProperty(Node.prototype,'baseURI',{get:function(){var d=this.ownerDocument||this,b=d.querySelector("base[href]")||window.location;return b.href;},configurable:true});}
