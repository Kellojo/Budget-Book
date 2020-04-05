/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','./library'],function(E){"use strict";var T=E.extend("sap.ui.ux3.ThingAction",{metadata:{library:"sap.ui.ux3",properties:{text:{type:"string",group:"Misc",defaultValue:null},enabled:{type:"boolean",group:"Misc",defaultValue:true}},events:{select:{parameters:{id:{type:"string"},action:{type:"sap.ui.ux3.ThingAction"}}}}}});T.prototype.onclick=function(e){this.fireSelect({id:this.getId(),action:this});};T.prototype.onsapselect=function(e){this.fireSelect({id:this.getId(),action:this});};return T;});
