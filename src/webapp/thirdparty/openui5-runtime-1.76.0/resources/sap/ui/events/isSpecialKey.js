/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var i=function(e){function a(e){var k=e.key;return(k==='Shift')||(k==='Control')||(k==='Alt')||(k==='AltGraph')||(k==='CapsLock')||(k==='NumLock');}function b(e){var k=e.key;return(k==='ArrowLeft')||(k==='ArrowUp')||(k==='ArrowRight')||(k==='ArrowDown')||(k==='Left')||(k==='Up')||(k==='Right')||(k==='Down');}var k=e.key,s=a(e)||b(e)||k==='PageUp'||k==='PageDown'||k==='End'||k==='Home'||k==='PrintScreen'||k==='Insert'||k==='Del'||k==='Delete'||k==='F1'||k==='F2'||k==='F3'||k==='F4'||k==='F5'||k==='F6'||k==='F7'||k==='F8'||k==='F9'||k==='F10'||k==='F11'||k==='F12'||k==='Pause'||k==='Backspace'||k==='Tab'||k==='Enter'||k==='Escape'||k==='Esc'||k==='ScrollLock'||k==='Scroll';switch(e.type){case"keydown":case"keyup":case"keypress":return s;default:return false;}};return i;});
