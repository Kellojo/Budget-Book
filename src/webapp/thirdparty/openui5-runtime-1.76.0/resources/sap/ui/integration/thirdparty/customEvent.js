/**
 * Any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
 *
 * Code copied from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 */
(function(){"use strict";if(typeof window.CustomEvent==="function"){return false;}function C(e,p){p=p||{bubbles:false,cancelable:false,detail:null};var a=document.createEvent('CustomEvent');a.initCustomEvent(e,p.bubbles,p.cancelable,p.detail);return a;}window.CustomEvent=C;})();
