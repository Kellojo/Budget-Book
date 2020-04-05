/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.1
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function(r,f){'use strict';if(typeof module==='object'&&module.exports){module.exports=f();}else if(typeof define==='function'&&define.amd){define(f);}else{r.IPv6=f(r);}}(this,function(r){'use strict';var _=r&&r.IPv6;function b(a){var c=a.toLowerCase();var s=c.split(':');var l=s.length;var t=8;if(s[0]===''&&s[1]===''&&s[2]===''){s.shift();s.shift();}else if(s[0]===''&&s[1]===''){s.shift();}else if(s[l-1]===''&&s[l-2]===''){s.pop();}l=s.length;if(s[l-1].indexOf('.')!==-1){t=7;}var p;for(p=0;p<l;p++){if(s[p]===''){break;}}if(p<t){s.splice(p,1,'0000');while(s.length<t){s.splice(p,0,'0000');}}var d;for(var i=0;i<t;i++){d=s[i].split('');for(var j=0;j<3;j++){if(d[0]==='0'&&d.length>1){d.splice(0,1);}else{break;}}s[i]=d.join('');}var e=-1;var f=0;var g=0;var h=-1;var k=false;for(i=0;i<t;i++){if(k){if(s[i]==='0'){g+=1;}else{k=false;if(g>f){e=h;f=g;}}}else{if(s[i]==='0'){k=true;h=i;g=1;}}}if(g>f){e=h;f=g;}if(f>1){s.splice(e,f,'');}l=s.length;var m='';if(s[0]===''){m=':';}for(i=0;i<l;i++){m+=s[i];if(i===l-1){break;}m+=':';}if(s[l-1]===''){m+=':';}return m;}function n(){if(r.IPv6===this){r.IPv6=_;}return this;}return{best:b,noConflict:n};}));
