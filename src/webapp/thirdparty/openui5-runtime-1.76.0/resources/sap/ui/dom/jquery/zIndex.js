/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";function g(t,p){var d=Object.getOwnPropertyDescriptor(t,p);return d&&d.value;}if(!g(q.fn,"zIndex")){var f=function(z){if(z!==undefined){return this.css("zIndex",z);}if(this.length){var e=q(this[0]),p,v;while(e.length&&e[0]!==document){p=e.css("position");if(p==="absolute"||p==="relative"||p==="fixed"){v=parseInt(e.css("zIndex"));if(!isNaN(v)&&v!==0){return v;}}e=e.parent();}}return 0;};
/*!
		 * The following function is taken from
		 * jQuery UI Core 1.11.1
		 * http://jqueryui.com
		 *
		 * Copyright 2014 jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 *
		 * http://api.jqueryui.com/category/ui-core/
		 */
q.fn.zIndex=f;}return q;});
