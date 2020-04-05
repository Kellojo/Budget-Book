/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";function g(t,p){var d=Object.getOwnPropertyDescriptor(t,p);return d&&d.value;}
/*!
	 * The following functions are taken from jQuery UI 1.8.17 but modified
	 *
	 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * http://docs.jquery.com/UI
	 */
function v(e){var o=q(e).offsetParent();var O=false;var $=q(e).parents().filter(function(){if(this===o){O=true;}return O;});return!q(e).add($).filter(function(){return q.css(this,"visibility")==="hidden"||q.expr.filters.hidden(this);}).length;}function f(e,i){var n=e.nodeName.toLowerCase();if(n==="area"){var m=e.parentNode,a=m.name,b;if(!e.href||!a||m.nodeName.toLowerCase()!=="map"){return false;}b=q("img[usemap='#"+a+"']")[0];return!!b&&v(b);}return(/input|select|textarea|button|object/.test(n)?!e.disabled:n=="a"?e.href||i:i)&&v(e);}if(!g(q.expr[":"],"focusable")){
/*!
		 * The following function is taken from jQuery UI 1.8.17
		 *
		 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
		 * Dual licensed under the MIT or GPL Version 2 licenses.
		 * http://jquery.org/license
		 *
		 * http://docs.jquery.com/UI
		 *
		 * But since visible is modified, focusable is different too the jQuery UI version too.
		 */
q.expr[":"].focusable=function(e){return f(e,!isNaN(q.attr(e,"tabindex")));};}if(!g(q.expr[":"],"sapTabbable")){
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
q.expr[":"].sapTabbable=function(e){var t=q.attr(e,"tabindex"),i=isNaN(t);return(i||t>=0)&&f(e,!i);};}if(!g(q.expr[":"],"sapFocusable")){q.expr[":"].sapFocusable=function(e){return f(e,!isNaN(q.attr(e,"tabindex")));};}return q;});
