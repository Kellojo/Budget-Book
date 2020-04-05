/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F={};F.render=function(r,f){r.write('<div');r.writeControlData(f);r.addClass('sapUiFeed');r.writeClasses();r.write('>');r.renderControl(f.oFeeder);r.write('<header class=sapUiFeedTitle ><h4>');var t=f.getTitle();if(!t||t==""){t=f.rb.getText('FEED_TITLE');}r.writeEscaped(t);if(f.oToolsButton){r.renderControl(f.oToolsButton);}r.renderControl(f.oLiveButton);r.write('</h4>');r.write('<div class="sapUiFeedToolbar" >');r.renderControl(f.oFilter);r.renderControl(f.oSearchField);r.write('</div>');r.write('</header>');r.write('<section>');for(var i=0;i<f.getChunks().length;i++){var c=f.getChunks()[i];r.renderControl(c);}r.write('</section>');r.write('</div>');};return F;},true);
