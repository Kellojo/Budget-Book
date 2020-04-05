/** @license
 * String.prototype.startsWith <https://github.com/mathiasbynens/String.prototype.startsWith>
 * MIT License
 * @author Mathias Bynens
 * @version v0.2.0
 */
if(!String.prototype.startsWith){(function(){'use strict';var t={}.toString;var s=function(a){if(this==null){throw TypeError();}var b=String(this);if(a&&t.call(a)=='[object RegExp]'){throw TypeError();}var c=b.length;var d=String(a);var e=d.length;var p=arguments.length>1?arguments[1]:undefined;var f=p?Number(p):0;if(f!=f){f=0;}var g=Math.min(Math.max(f,0),c);if(e+g>c){return false;}var i=-1;while(++i<e){if(b.charCodeAt(g+i)!=d.charCodeAt(i)){return false;}}return true;};Object.defineProperty(String.prototype,'startsWith',{'value':s,'configurable':true,'writable':true});}());}
/** @license
 * String.prototype.endsWith <https://github.com/mathiasbynens/String.prototype.endsWith>
 * MIT License
 * @author Mathias Bynens
 * @version v0.2.0
 */
if(!String.prototype.endsWith){(function(){'use strict';var t={}.toString;var e=function(s){if(this==null){throw TypeError();}var a=String(this);if(s&&t.call(s)=='[object RegExp]'){throw TypeError();}var b=a.length;var c=String(s);var d=c.length;var p=b;if(arguments.length>1){var f=arguments[1];if(f!==undefined){p=f?Number(f):0;if(p!=p){p=0;}}}var g=Math.min(Math.max(p,0),b);var h=g-d;if(h<0){return false;}var i=-1;while(++i<d){if(a.charCodeAt(h+i)!=c.charCodeAt(i)){return false;}}return true;};Object.defineProperty(String.prototype,'endsWith',{'value':e,'configurable':true,'writable':true});}());}
/** @license
 * String.prototype.includes <https://github.com/mathiasbynens/String.prototype.includes>
 * MIT License
 * @author Mathias Bynens
 * @version v1.0.0
 */
if(!String.prototype.includes){(function(){'use strict';var t={}.toString;var i=''.indexOf;var a=function(s){if(this==null){throw TypeError();}var b=String(this);if(s&&t.call(s)=='[object RegExp]'){throw TypeError();}var c=b.length;var d=String(s);var e=d.length;var p=arguments.length>1?arguments[1]:undefined;var f=p?Number(p):0;if(f!=f){f=0;}var g=Math.min(Math.max(f,0),c);if(e+g>c){return false;}return i.call(b,d,f)!=-1;};Object.defineProperty(String.prototype,'includes',{'value':a,'configurable':true,'writable':true});}());}
/** @license
 * String.prototype.repeat <https://github.com/mathiasbynens/String.prototype.repeat>
 * MIT License
 * @author Mathias Bynens
 * @version v0.2.0
 */
if(!String.prototype.repeat){(function(){'use strict';var r=function(c){if(this==null){throw TypeError();}var s=String(this);var n=c?Number(c):0;if(n!=n){n=0;}if(n<0||n==Infinity){throw RangeError();}var a='';while(n){if(n%2==1){a+=s;}if(n>1){s+=s;}n>>=1;}return a;};Object.defineProperty(String.prototype,'repeat',{'value':r,'configurable':true,'writable':true});}());}
/** @license
 * String.prototype.padStart <https://github.com/uxitten/polyfill>
 * MIT License
 * @author Behnam Mohammadi
 * @version v1.0.1
 */
if(!String.prototype.padStart){String.prototype.padStart=function padStart(t,p){t=t>>0;p=String((typeof p!=='undefined'?p:' '));if(this.length>t){return String(this);}else{t=t-this.length;if(t>p.length){p+=p.repeat(t/p.length);}return p.slice(0,t)+String(this);}};}
/** @license
 * String.prototype.padEnd <https://github.com/uxitten/polyfill>
 * MIT License
 * @author Behnam Mohammadi
 * @version v1.0.1
 */
if(!String.prototype.padEnd){String.prototype.padEnd=function padEnd(t,p){t=t>>0;p=String((typeof p!=='undefined'?p:' '));if(this.length>t){return String(this);}else{t=t-this.length;if(t>p.length){p+=p.repeat(t/p.length);}return String(this)+p.slice(0,t);}};}
