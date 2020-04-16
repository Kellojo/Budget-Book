/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ValueListType","./lib/_Helper","sap/base/assert","sap/base/Log","sap/base/util/ObjectPath","sap/ui/base/SyncPromise","sap/ui/model/BindingMode","sap/ui/model/ChangeReason","sap/ui/model/ClientListBinding","sap/ui/model/Context","sap/ui/model/ContextBinding","sap/ui/model/MetaModel","sap/ui/model/PropertyBinding","sap/ui/model/odata/OperationMode","sap/ui/model/odata/type/Boolean","sap/ui/model/odata/type/Byte","sap/ui/model/odata/type/Date","sap/ui/model/odata/type/DateTimeOffset","sap/ui/model/odata/type/Decimal","sap/ui/model/odata/type/Double","sap/ui/model/odata/type/Guid","sap/ui/model/odata/type/Int16","sap/ui/model/odata/type/Int32","sap/ui/model/odata/type/Int64","sap/ui/model/odata/type/Raw","sap/ui/model/odata/type/SByte","sap/ui/model/odata/type/Single","sap/ui/model/odata/type/Stream","sap/ui/model/odata/type/String","sap/ui/model/odata/type/TimeOfDay","sap/ui/thirdparty/URI"],function(V,_,a,L,O,S,B,C,b,c,d,M,P,f,g,h,E,D,k,l,G,I,m,o,R,p,q,r,s,T,U){"use strict";var t,u=new Map(),v=L.Level.DEBUG,w=/^-?\d+$/,x,y,z="sap.ui.model.odata.v4.ODataMetaModel",A,F=/\(.*\)$/,H=new R(),J=new Map(),K={messageChange:true},N={"Edm.Boolean":{Type:g},"Edm.Byte":{Type:h},"Edm.Date":{Type:E},"Edm.DateTimeOffset":{constraints:{"$Precision":"precision"},Type:D},"Edm.Decimal":{constraints:{"@Org.OData.Validation.V1.Minimum/$Decimal":"minimum","@Org.OData.Validation.V1.Minimum@Org.OData.Validation.V1.Exclusive":"minimumExclusive","@Org.OData.Validation.V1.Maximum/$Decimal":"maximum","@Org.OData.Validation.V1.Maximum@Org.OData.Validation.V1.Exclusive":"maximumExclusive","$Precision":"precision","$Scale":"scale"},Type:k},"Edm.Double":{Type:l},"Edm.Guid":{Type:G},"Edm.Int16":{Type:I},"Edm.Int32":{Type:m},"Edm.Int64":{Type:o},"Edm.SByte":{Type:p},"Edm.Single":{Type:q},"Edm.Stream":{Type:r},"Edm.String":{constraints:{"@com.sap.vocabularies.Common.v1.IsDigitSequence":"isDigitSequence","$MaxLength":"maxLength"},Type:s},"Edm.TimeOfDay":{constraints:{"$Precision":"precision"},Type:T}},Q={},W="@com.sap.vocabularies.Common.v1.ValueList",X="@com.sap.vocabularies.Common.v1.ValueListMapping",Y="@com.sap.vocabularies.Common.v1.ValueListReferences",Z="@com.sap.vocabularies.Common.v1.ValueListWithFixedValues",$=L.Level.WARNING;function a1(e,i,j,n){var j1,k1=e.mSchema2MetadataUrl[i];if(!k1){k1=e.mSchema2MetadataUrl[i]={};k1[j]=false;}else if(!(j in k1)){j1=Object.keys(k1)[0];if(k1[j1]){g1(e,"A schema cannot span more than one document: "+i+" - expected reference URI "+j1+" but instead saw "+j,n);}k1[j]=false;}}function b1(e,i,j,n){var j1,k1,l1,m1;function n1(o1){var p1,q1;if(!(j in o1)){n($,k1," does not contain ",j);return;}n(v,"Including ",j," from ",k1);for(q1 in o1){if(q1[0]!=="$"&&h1(q1)===j){p1=o1[q1];i[q1]=p1;f1(p1,i.$Annotations);}}}if(j in i){return i[j];}m1=e.mSchema2MetadataUrl[j];if(m1){l1=Object.keys(m1);if(l1.length>1){g1(e,"A schema cannot span more than one document: "+"schema is referenced by following URLs: "+l1.join(", "),j);}k1=l1[0];m1[k1]=true;n(v,"Namespace ",j," found in $Include of ",k1);j1=e.mMetadataUrl2Promise[k1];if(!j1){n(v,"Reading ",k1);j1=e.mMetadataUrl2Promise[k1]=S.resolve(e.oRequestor.read(k1)).then(e.validate.bind(e,k1));}j1=j1.then(n1);if(j in i){return i[j];}i[j]=j1;return j1;}}function c1(e,i){if(e===i){return"";}if(e.indexOf(i)===0&&e[i.length]==="#"&&e.indexOf("@",i.length)<0){return e.slice(i.length+1);}}function d1(e){var i=c1(e,X);return i!==undefined?i:c1(e,W);}function e1(n,e){return e.some(function(i){return n==="$ReturnType"?i.$ReturnType:i.$Parameter&&i.$Parameter.some(function(j){return j.$Name===n;});});}function f1(e,i,j){var n;function j1(k1,l1){var m1;for(m1 in l1){if(j||!(m1 in k1)){k1[m1]=l1[m1];}}}for(n in e.$Annotations){if(!(n in i)){i[n]={};}j1(i[n],e.$Annotations[n]);}delete e.$Annotations;}function g1(e,i,j){var n=new Error(j+": "+i);e.oModel.reportError(i,z,n);throw n;}function h1(e){return e.slice(0,e.lastIndexOf(".")+1);}x=d.extend("sap.ui.model.odata.v4.ODataMetaContextBinding",{constructor:function(e,i,j){a(!j||j.getModel()===e,"oContext must belong to this model");d.call(this,e,i,j);},initialize:function(){var e=this.oModel.createBindingContext(this.sPath,this.oContext);this.bInitial=false;if(e!==this.oElementContext){this.oElementContext=e;this._fireChange();}},setContext:function(e){a(!e||e.getModel()===this.oModel,"oContext must belong to this model");if(e!==this.oContext){this.oContext=e;if(!this.bInitial){this.initialize();}}}});y=b.extend("sap.ui.model.odata.v4.ODataMetaListBinding",{constructor:function(){b.apply(this,arguments);},_fireFilter:function(){},_fireSort:function(){},checkUpdate:function(e){var i=this.oList.length;this.update();if(e||this.oList.length!==i){this._fireChange({reason:C.Change});}},fetchContexts:function(){var i,e=this.oModel.resolve(this.sPath,this.oContext),j=this;if(!e){return S.resolve([]);}i=e.endsWith("@");if(!i&&!e.endsWith("/")){e+="/";}return this.oModel.fetchObject(e).then(function(n){if(!n){return[];}if(i){e=e.slice(0,-1);}return Object.keys(n).filter(function(j1){return j1[0]!=="$"&&i!==(j1[0]!=="@");}).map(function(j1){return new c(j.oModel,e+j1);});});},getContexts:function(i,e){this.iCurrentStart=i||0;this.iCurrentLength=Math.min(e||Infinity,this.iLength-this.iCurrentStart,this.oModel.iSizeLimit);return this.getCurrentContexts();},getCurrentContexts:function(){var e=[],i,n=this.iCurrentStart+this.iCurrentLength;for(i=this.iCurrentStart;i<n;i+=1){e.push(this.oList[this.aIndices[i]]);}if(this.oList.dataRequested){e.dataRequested=true;}return e;},setContexts:function(e){this.oList=e;this.updateIndices();this.applyFilter();this.applySort();this.iLength=this._getLength();},update:function(){var e=[],i=this.fetchContexts(),j=this;if(i.isFulfilled()){e=i.getResult();}else{i.then(function(e){j.setContexts(e);j._fireChange({reason:C.Change});});e.dataRequested=true;}this.setContexts(e);}});A=P.extend("sap.ui.model.odata.v4.ODataMetaPropertyBinding",{constructor:function(){P.apply(this,arguments);this.vValue=undefined;},checkUpdate:function(e,i){var j,n=this;function j1(k1){if(e||k1!==n.vValue){n.vValue=k1;n._fireChange({reason:i||C.Change});}return k1;}j=this.oModel.fetchObject(this.sPath,this.oContext,this.mParameters).then(j1);if(this.mParameters&&this.mParameters.$$valueAsPromise&&j.isPending()){j1(j.unwrap());}},getValue:function(){return this.vValue;},setContext:function(e){if(this.oContext!==e){this.oContext=e;if(this.bRelative){this.checkUpdate(false,C.Context);}}},setValue:function(){throw new Error("Unsupported operation: ODataMetaPropertyBinding#setValue");}});var i1=M.extend("sap.ui.model.odata.v4.ODataMetaModel",{constructor:function(e,i,j,n,j1){M.call(this);this.aAnnotationUris=j&&!Array.isArray(j)?[j]:j;this.sDefaultBindingMode=B.OneTime;this.mETags={};this.dLastModified=new Date(0);this.oMetadataPromise=null;this.oModel=n;this.mMetadataUrl2Promise={};this.oRequestor=e;this.mSchema2MetadataUrl={};this.mSupportedBindingModes={"OneTime":true,"OneWay":true};this.bSupportReferences=j1!==false;this.mUnsupportedFilterOperators={"All":true,"Any":true};this.sUrl=i;}});i1.prototype.$$valueAsPromise=true;i1.prototype._mergeAnnotations=function(e,j){var n=this;this.validate(this.sUrl,e);e.$Annotations={};Object.keys(e).forEach(function(i){if(e[i].$kind==="Schema"){a1(n,i,n.sUrl);f1(e[i],e.$Annotations);}});j.forEach(function(j1,i){var k1,l1;n.validate(n.aAnnotationUris[i],j1);for(l1 in j1){if(l1[0]!=="$"){if(l1 in e){g1(n,"A schema cannot span more than one document: "+l1,n.aAnnotationUris[i]);}k1=j1[l1];e[l1]=k1;if(k1.$kind==="Schema"){a1(n,l1,n.aAnnotationUris[i]);f1(k1,e.$Annotations,true);}}}});};i1.prototype.attachEvent=function(e){if(!(e in K)){throw new Error("Unsupported event '"+e+"': v4.ODataMetaModel#attachEvent");}return M.prototype.attachEvent.apply(this,arguments);};i1.prototype.bindContext=function(e,i){return new x(this,e,i);};i1.prototype.bindList=function(e,i,j,n){return new y(this,e,i,j,n);};i1.prototype.bindProperty=function(e,i,j){return new A(this,e,i,j);};i1.prototype.bindTree=function(){throw new Error("Unsupported operation: v4.ODataMetaModel#bindTree");};i1.prototype.fetchCanonicalPath=function(e){return this.fetchUpdateData("",e).then(function(i){if(!i.editUrl){throw new Error(e.getPath()+": No canonical path for transient entity");}if(i.propertyPath){throw new Error("Context "+e.getPath()+" does not point to an entity. It should be "+i.entityPath);}return"/"+i.editUrl;});};i1.prototype.fetchData=function(){return this.fetchEntityContainer().then(function(e){return JSON.parse(JSON.stringify(e));});};i1.prototype.fetchEntityContainer=function(e){var i,j=this;if(!this.oMetadataPromise){i=[S.resolve(this.oRequestor.read(this.sUrl,false,e))];if(this.aAnnotationUris){this.aAnnotationUris.forEach(function(n){i.push(S.resolve(j.oRequestor.read(n,true,e)));});}if(!e){this.oMetadataPromise=S.all(i).then(function(n){var j1=n[0];j._mergeAnnotations(j1,n.slice(1));return j1;});}}return this.oMetadataPromise;};i1.prototype.fetchObject=function(j,n,j1){var k1=this.resolve(j,n),l1=this;if(!k1){L.error("Invalid relative path w/o context",j,z);return S.resolve(null);}return this.fetchEntityContainer().then(function(m1){var n1,o1,p1,q1,r1,s1,t1,u1,v1;function w1(e,i,E1){var F1,G1,H1,I1,J1="";if(i){G1=i.indexOf("@@");if(G1>0){i=i.slice(0,G1);}}else{i=e;}E1=E1||"";if(n1){s1=I1=v1.filter(z1);if(I1.length!==1){return A1($,"Expected a single overload, but found "+I1.length);}if(n1!==Q){J1=I1[0].$Parameter[0].$isCollection?"Collection("+n1+")":n1;}H1=u1+"("+J1+")"+E1;if(m1.$Annotations[H1]){if(i==="@"){v1=m1.$Annotations[H1];F1=m1.$Annotations[u1+E1];if(F1){v1=Object.assign({},F1,v1);}return false;}if(i in m1.$Annotations[H1]){u1=H1;v1=m1;return true;}}}u1+=E1;v1=m1;return true;}function x1(i,j){var E1,F1=i.indexOf("@",2);if(F1>-1){return A1($,"Unsupported path after ",i.slice(0,F1));}i=i.slice(2);E1=i[0]==="."?O.get(i.slice(1),j1.scope):j1&&O.get(i,j1.scope)||(i==="requestCurrencyCodes"||i==="requestUnitsOfMeasure"?l1[i].bind(l1):O.get(i));if(typeof E1!=="function"){return A1($,i," is not a function but: "+E1);}try{v1=E1(v1,{$$valueAsPromise:j1&&j1.$$valueAsPromise,context:new c(l1,j),schemaChildName:t1,overload:s1.length===1?s1[0]:undefined});}catch(e){A1($,"Error calling ",i,": ",e);}return true;}function y1(e,i){var E1;if(e==="$ReturnType"){if(i.$ReturnType){v1=i.$ReturnType;return true;}}else if(e&&i.$Parameter){E1=i.$Parameter.filter(function(F1){return F1.$Name===e;});if(E1.length){v1=E1[0];return true;}}return false;}function z1(e){return!e.$IsBound&&n1===Q||e.$IsBound&&n1===e.$Parameter[0].$Type;}function A1(i){var e;if(L.isLoggable(i,z)){e=Array.isArray(p1)?p1.join("/"):p1;L[i===v?"debug":"warning"](Array.prototype.slice.call(arguments,1).join("")+(e?" at /"+e:""),k1,z);}if(i===$){v1=undefined;}return false;}function B1(e,i){var E1;function F1(){p1=p1||u1&&i&&u1+"/"+i;return A1.apply(this,arguments);}n1=v1&&v1.$Type;if(l1.bSupportReferences&&!(e in m1)){E1=h1(e);v1=b1(l1,m1,E1,F1);}if(e in m1){u1=q1=t1=e;v1=s1=m1[t1];if(!S.isThenable(v1)){return true;}}if(S.isThenable(v1)&&v1.isPending()){return F1(v,"Waiting for ",E1);}return F1($,"Unknown qualified name ",e);}function C1(e,i,E1){var F1,G1;if(e==="$Annotations"){return A1($,"Invalid segment: $Annotations");}if(i&&typeof v1==="object"&&e in v1){if(e[0]==="$"||w.test(e)){r1=false;}}else{F1=e.indexOf("@@");if(F1<0){if(e.endsWith("@sapui.name")){F1=e.length-11;}else{F1=e.indexOf("@");}}if(F1>0){if(!C1(e.slice(0,F1),i,E1)){return false;}e=e.slice(F1);G1=true;}if(typeof v1==="string"&&!(G1&&(e==="@sapui.name"||e[1]==="@"))&&!D1(v1,E1.slice(0,i))){return false;}if(r1){if(e[0]==="$"&&e!=="$Parameter"&&e!=="$ReturnType"||w.test(e)){r1=false;}else{if(G1){}else if(e[0]!=="@"&&e.indexOf(".")>0){return B1(e);}else if(v1&&"$Type"in v1){if(!B1(v1.$Type,"$Type")){return false;}}else if(v1&&"$Action"in v1){if(!B1(v1.$Action,"$Action")){return false;}n1=Q;}else if(v1&&"$Function"in v1){if(!B1(v1.$Function,"$Function")){return false;}n1=Q;}else if(!i){u1=q1=t1=t1||m1.$EntityContainer;v1=s1=s1||m1[t1];if(Array.isArray(v1)&&y1(e,v1[0])){return true;}if(e&&e[0]!=="@"&&!(e in s1)){return A1($,"Unknown child ",e," of ",t1);}}if(Array.isArray(v1)){if(e==="$Parameter"){return true;}if(e.startsWith("@$ui5.overload@")){e=e.slice(14);G1=true;}if(G1){if(e[1]!=="@"&&!w1(e)){return false;}}else{if(e!==E1[i]&&E1[i][e.length+1]!=="@"&&e1(e,v1)){q1=e;return w1(e,E1[i].slice(e.length),"/"+q1);}if(n1){v1=v1.filter(z1);}if(e==="@$ui5.overload"){return true;}if(v1.length!==1){return A1($,"Expected a single overload, but found "+v1.length);}if(y1(e,v1[0])){return true;}v1=v1[0].$ReturnType;u1+="/0/$ReturnType";if(v1){if(e==="value"&&!(m1[v1.$Type]&&m1[v1.$Type].value)){q1=undefined;return true;}if(!B1(v1.$Type,"$Type")){return false;}}if(!e){return true;}}}}}if(!e){return i+1>=E1.length||A1($,"Invalid empty segment");}if(e[0]==="@"){if(e==="@sapui.name"){v1=q1;if(v1===undefined){A1($,"Unsupported path before @sapui.name");}else if(i+1<E1.length){A1($,"Unsupported path after @sapui.name");}return false;}if(e[1]==="@"){if(i+1<E1.length){return A1($,"Unsupported path after ",e);}return x1(e,[""].concat(E1.slice(0,i),E1[i].slice(0,F1)).join("/"));}}if(!v1||typeof v1!=="object"){v1=undefined;return!o1&&A1(v,"Invalid segment: ",e);}if(r1&&e[0]==="@"){v1=m1.$Annotations[u1]||{};r1=false;}else if(e==="$"&&i+1<E1.length){return A1($,"Unsupported path after $");}}if(e!=="@"&&e!=="$"){if(e[0]==="@"){o1=true;}q1=r1||e[0]==="@"?e:undefined;u1=r1?u1+"/"+e:undefined;v1=v1[e];}return true;}function D1(e,i){var E1;if(p1){return A1($,"Invalid recursion");}p1=i;o1=false;r1=true;v1=m1;E1=e.split("/").every(C1);p1=undefined;return E1;}if(!D1(k1.slice(1))&&S.isThenable(v1)){v1=v1.then(function(){return l1.fetchObject(j,n,j1);});}return v1;});};i1.prototype.fetchUI5Type=function(e){var i=this.getMetaContext(e),j=this;if(e.endsWith("/$count")){t=t||new o();return S.resolve(t);}return this.fetchObject(undefined,i).catch(function(){}).then(function(n){var j1=H,k1;if(!n){L.warning("No metadata for path '"+e+"', using "+j1.getName(),undefined,z);return j1;}if(n["$ui5.type"]){return n["$ui5.type"];}if(n.$isCollection){L.warning("Unsupported collection type, using "+j1.getName(),e,z);}else{k1=N[n.$Type];if(k1){j1=new k1.Type(undefined,j.getConstraints(n,i.getPath()));}else{L.warning("Unsupported type '"+n.$Type+"', using "+j1.getName(),e,z);}}n["$ui5.type"]=j1;return j1;});};i1.prototype.fetchUpdateData=function(e,j,n){var j1=j.getModel(),k1=j1.resolve(e,j),l1=this;function m1(i){var n1=new Error(k1+": "+i);j1.reportError(i,z,n1);throw n1;}return this.fetchObject(this.getMetaPath(k1)).then(function(){return l1.fetchEntityContainer();}).then(function(n1){var o1,p1=n1[n1.$EntityContainer],q1,r1,s1,t1,u1,v1,w1,x1;function y1(C1){var i=C1.indexOf("(");return i>=0?C1.slice(i):"";}function z1(i){o1.push({path:u1,prefix:i,type:x1});}function A1(C1){var i=C1.indexOf("(");return i>=0?C1.slice(0,i):C1;}function B1(i){if(i.includes("($uid=")){z1(A1(i));}else{o1.push(i);}}w1=k1.slice(1).split("/");t1=w1.shift();u1="/"+t1;q1=u1;s1=decodeURIComponent(A1(t1));r1=p1[s1];if(!r1){m1("Not an entity set: "+s1);}x1=n1[r1.$Type];e="";v1="";o1=[];B1(t1);w1.forEach(function(i){var C1,D1;u1+="/"+i;if(w.test(i)){z1(o1.pop());q1+="/"+i;}else{D1=decodeURIComponent(A1(i));v1=_.buildPath(v1,D1);C1=x1[D1];if(!C1){m1("Not a (navigation) property: "+D1);}x1=n1[C1.$Type];if(C1.$kind==="NavigationProperty"){if(r1.$NavigationPropertyBinding&&v1 in r1.$NavigationPropertyBinding){s1=r1.$NavigationPropertyBinding[v1];r1=p1[s1];v1="";o1=[encodeURIComponent(s1)+y1(i)];if(!C1.$isCollection){z1(o1.pop());}}else{B1(i);}q1=u1;e="";}else{e=_.buildPath(e,i);}}});return S.all(o1.map(function(i){if(typeof i==="string"){return i;}return j.fetchValue(i.path).then(function(C1){var D1;if(!C1){if(n){return undefined;}m1("No instance to calculate key predicate at "+i.path);}if(_.hasPrivateAnnotation(C1,"transient")){n=true;return undefined;}D1=_.getPrivateAnnotation(C1,"predicate");if(!D1){m1("No key predicate known at "+i.path);}return i.prefix+D1;},function(C1){m1(C1.message+" at "+i.path);});})).then(function(i){return{editUrl:n?undefined:i.join("/"),entityPath:q1,propertyPath:e};});});};i1.prototype.fetchValueListMappings=function(e,i,j,n){var j1=this,k1=e.getMetaModel();function l1(){var m1=n[0],n1="";if(n.length!==1){throw new Error("Expected a single overload, but found "+n.length);}if(m1.$IsBound){n1=m1.$Parameter[0].$isCollection?"Collection("+m1.$Parameter[0].$Type+")":m1.$Parameter[0].$Type;}return i+"("+n1+")";}return k1.fetchEntityContainer().then(function(m1){var n1,o1=m1.$Annotations,p1,q1=_.namespace(i),r1={},s1=j1===k1,t1,u1;if(j.$Name){p1=l1()+"/"+j.$Name;u1=i+"/"+j.$Name;}t1=Object.keys(o1).filter(function(v1){if(_.namespace(v1)===q1){if(p1?v1===p1||v1===u1:j1.getObject("/"+v1)===j){return true;}if(s1||u1&&_.getMetaPath(v1)===u1){return false;}throw new Error("Unexpected annotation target '"+v1+"' with namespace of data service in "+e.sServiceUrl);}return false;});if(!t1.length){throw new Error("No annotation '"+W.slice(1)+"' in "+e.sServiceUrl);}if(t1.length===1){n1=o1[t1[0]];}else{n1=Object.assign({},o1[u1],o1[p1]);}Object.keys(n1).forEach(function(v1){var w1=d1(v1);if(w1!==undefined){r1[w1]=n1[v1];["CollectionRoot","SearchSupported"].forEach(function(x1){if(x1 in n1[v1]){throw new Error("Property '"+x1+"' is not allowed in annotation '"+v1.slice(1)+"' for target '"+t1[0]+"' in "+e.sServiceUrl);}});}else if(!s1){throw new Error("Unexpected annotation '"+v1.slice(1)+"' for target '"+t1[0]+"' with namespace of data service in "+e.sServiceUrl);}});return r1;});};i1.prototype.fetchValueListType=function(e){var i=this.getMetaContext(e),j=this;return this.fetchObject(undefined,i).then(function(n){var j1,k1;if(!n){throw new Error("No metadata for "+e);}j1=j.getObject("@",i);if(j1[Z]){return V.Fixed;}for(k1 in j1){if(c1(k1,Y)!==undefined||c1(k1,X)!==undefined){return V.Standard;}if(c1(k1,W)!==undefined){return j1[k1].SearchSupported===false?V.Fixed:V.Standard;}}return V.None;});};i1.prototype.getAbsoluteServiceUrl=function(e){var i=new U(this.sUrl).absoluteTo(document.baseURI).pathname().toString();return new U(e).absoluteTo(i).filename("").toString();};i1.prototype.getConstraints=function(e,i){var j,n,j1,k1=N[e.$Type];function l1(m1,n1){if(n1!==undefined){n=n||{};n[m1]=n1;}}if(k1){j1=k1.constraints;for(j in j1){l1(j1[j],j[0]==="@"?this.getObject(i+j):e[j]);}if(e.$Nullable===false){l1("nullable",false);}}return n;};i1.prototype.getData=_.createGetMethod("fetchData");i1.prototype.getETags=function(){return this.mETags;};i1.prototype.getLastModified=function(){return this.dLastModified;};i1.prototype.getMetaContext=function(e){return new c(this,this.getMetaPath(e));};i1.prototype.getMetaPath=function(e){return _.getMetaPath(e);};i1.prototype.getObject=_.createGetMethod("fetchObject");i1.prototype.getOrCreateSharedModel=function(e,i,j){var n,j1;e=this.getAbsoluteServiceUrl(e);n=!!j+e;j1=J.get(n);if(!j1){j1=new this.oModel.constructor({autoExpandSelect:j,groupId:i,httpHeaders:this.oModel.getHttpHeaders(),operationMode:f.Server,serviceUrl:e,synchronizationMode:"None"});j1.setDefaultBindingMode(B.OneWay);J.set(n,j1);}return j1;};i1.prototype.getOriginalProperty=function(){throw new Error("Unsupported operation: v4.ODataMetaModel#getOriginalProperty");};i1.prototype.getProperty=i1.prototype.getObject;i1.prototype.getReducedPath=function(e,n){var i,j1,k1,l1,m1=n.split("/").length,n1=e.split("/"),o1=this;j1=n1.map(function(p1,j){return j<m1||p1[0]==="#"||p1[0]==="@"||w.test(p1)||p1==="$Parameter"?{}:o1.getObject(o1.getMetaPath(n1.slice(0,j+1).join("/")))||{};});if(!j1[n1.length-1].$isCollection){for(i=n1.length-2;i>=m1;i-=1){l1=w.test(n1[i+1])?i+2:i+1;if(l1<n1.length&&j1[i].$Partner===n1[l1]&&!j1[l1].$isCollection&&j1[l1].$Partner===n1[i].replace(F,"")){j1.splice(i,l1-i+1);n1.splice(i,l1-i+1);}else if(Array.isArray(j1[i])&&n1[i+1]==="$Parameter"){k1=o1.getObject(o1.getMetaPath(n1.slice(0,i+1).join("/")+"/@$ui5.overload"));if(k1.length===1&&k1[0].$Parameter[0].$Name===n1[i+2]){n1.splice(i,3);}}else if(j1[i].$isCollection){break;}}}return n1.join("/");};i1.prototype.getUI5Type=_.createGetMethod("fetchUI5Type",true);i1.prototype.getUnitOrCurrencyPath=function(e){var i=this.getObject("@",this.getMetaContext(e)),j=i&&(i["@Org.OData.Measures.V1.Unit"]||i["@Org.OData.Measures.V1.ISOCurrency"]);return j&&j.$Path;};i1.prototype.getValueListType=_.createGetMethod("fetchValueListType",true);i1.prototype.isList=function(){throw new Error("Unsupported operation: v4.ODataMetaModel#isList");};i1.prototype.refresh=function(){throw new Error("Unsupported operation: v4.ODataMetaModel#refresh");};i1.prototype.requestCodeList=function(e,i,j){var n=this.fetchEntityContainer().getResult(),j1=n[n.$EntityContainer],k1=this;if(j&&j.context){if(j.context.getModel()!==this||j.context.getPath()!=="/"){throw new Error("Unsupported context: "+j.context);}}if(i!==undefined&&i!==j1){throw new Error("Unsupported raw value: "+i);}return this.requestObject("/@com.sap.vocabularies.CodeList.v1."+e).then(function(l1){var m1,n1,o1,p1,q1;if(!l1){return null;}m1=k1.getAbsoluteServiceUrl(l1.Url)+"#"+l1.CollectionPath;p1=u.get(m1);if(p1){return p1;}o1=k1.getOrCreateSharedModel(l1.Url,"$direct");n1=o1.getMetaModel();q1="/"+l1.CollectionPath+"/";p1=n1.requestObject(q1).then(function(r1){var s1=q1+"@Org.OData.Core.V1.AlternateKeys",t1=n1.getObject(s1),u1,v1=D1(r1.$Key),w1=q1+v1+"@com.sap.vocabularies.Common.v1.",x1,y1,z1=q1+v1+"@com.sap.vocabularies.CodeList.v1.StandardCode/$Path",A1,B1;function C1(E1,F1){var G1=F1.getProperty(v1),H1={Text:F1.getProperty(B1),UnitSpecificScale:F1.getProperty(y1)};if(A1){H1.StandardCode=F1.getProperty(A1);}if(H1.UnitSpecificScale===null){L.error("Ignoring customizing w/o unit-specific scale for code "+G1+" from "+l1.CollectionPath,l1.Url,z);}else{E1[G1]=H1;}return E1;}function D1(E1){var F1;if(E1&&E1.length===1){F1=E1[0];}else{throw new Error("Single key expected: "+q1);}return typeof F1==="string"?F1:F1[Object.keys(F1)[0]];}if(t1){if(t1.length!==1){throw new Error("Single alternative expected: "+s1);}else if(t1[0].Key.length!==1){throw new Error("Single key expected: "+s1+"/0/Key");}v1=t1[0].Key[0].Name.$PropertyPath;}y1=n1.getObject(w1+"UnitSpecificScale/$Path");B1=n1.getObject(w1+"Text/$Path");x1=[v1,y1,B1];A1=n1.getObject(z1);if(A1){x1.push(A1);}u1=o1.bindList("/"+l1.CollectionPath,null,null,null,{$select:x1});return u1.requestContexts(0,Infinity).then(function(E1){if(!E1.length){L.error("Customizing empty for ",o1.sServiceUrl+l1.CollectionPath,z);}return E1.reduce(C1,{});}).finally(function(){u1.destroy();});});u.set(m1,p1);return p1;});};i1.prototype.requestCurrencyCodes=function(e,i){return this.requestCodeList("CurrencyCodes",e,i);};i1.prototype.requestData=_.createRequestMethod("fetchData");i1.prototype.requestObject=_.createRequestMethod("fetchObject");i1.prototype.requestUI5Type=_.createRequestMethod("fetchUI5Type");i1.prototype.requestUnitsOfMeasure=function(e,i){return this.requestCodeList("UnitsOfMeasure",e,i);};i1.prototype.requestValueListInfo=function(e,i){var j=this.getMetaPath(e),n=j.slice(0,j.lastIndexOf("/")).replace("/$Parameter",""),j1=n.slice(n.lastIndexOf("/")+1),k1=this;if(!j1.includes(".")){j1=undefined;}return Promise.all([j1||this.requestObject(n+"/@sapui.name"),this.requestObject(j),this.requestObject(j+"@"),this.requestObject(j+Z),this.requestObject(n+"/@$ui5.overload")]).then(function(l1){var m1=l1[2],n1=l1[3],o1={},p1=l1[1],q1={};function r1(s1,t1,u1,v1){if(n1!==undefined&&"SearchSupported"in s1){throw new Error("Must not set 'SearchSupported' in annotation "+"'com.sap.vocabularies.Common.v1.ValueList' and annotation "+"'com.sap.vocabularies.Common.v1.ValueListWithFixedValues'");}if("CollectionRoot"in s1){v1=k1.getOrCreateSharedModel(s1.CollectionRoot,undefined,i);if(q1[t1]&&q1[t1].$model===v1){o1[t1]=undefined;}}if(o1[t1]){throw new Error("Annotations '"+W.slice(1)+"' with identical qualifier '"+t1+"' for property "+e+" in "+o1[t1]+" and "+u1);}o1[t1]=u1;s1=_.clone(s1);s1.$model=v1;delete s1.CollectionRoot;delete s1.SearchSupported;q1[t1]=s1;}if(!p1){throw new Error("No metadata for "+e);}return Promise.all(Object.keys(m1).filter(function(s1){return c1(s1,Y)!==undefined;}).map(function(s1){var t1=m1[s1];return Promise.all(t1.map(function(u1){var v1=k1.getOrCreateSharedModel(u1,undefined,i);return k1.fetchValueListMappings(v1,l1[0],p1,l1[4]).then(function(w1){Object.keys(w1).forEach(function(x1){r1(w1[x1],x1,u1,v1);});});}));})).then(function(){var s1;Object.keys(m1).filter(function(t1){return d1(t1)!==undefined;}).forEach(function(t1){r1(m1[t1],d1(t1),k1.sUrl,k1.oModel);});s1=Object.keys(q1);if(!s1.length){throw new Error("No annotation '"+Y.slice(1)+"' for "+e);}if(n1){if(s1.length>1){throw new Error("Annotation '"+Z.slice(1)+"' but multiple '"+W.slice(1)+"' for property "+e);}return{"":q1[s1[0]]};}return q1;});});};i1.prototype.requestValueListType=_.createRequestMethod("fetchValueListType");i1.prototype.resolve=function(e,i){var j,n;if(!e){return i?i.getPath():undefined;}n=e[0];if(n==="/"){return e;}if(!i){return undefined;}if(n==="."){if(e[1]!=="/"){throw new Error("Unsupported relative path: "+e);}e=e.slice(2);}j=i.getPath();return n==="@"||j.endsWith("/")?j+e:j+"/"+e;};i1.prototype.setLegacySyntax=function(){throw new Error("Unsupported operation: v4.ODataMetaModel#setLegacySyntax");};i1.prototype.toString=function(){return z+": "+this.sUrl;};i1.prototype.validate=function(e,j){var i,n,j1,k1,l1,m1;if(!this.bSupportReferences){return j;}for(m1 in j.$Reference){l1=j.$Reference[m1];m1=new U(m1).absoluteTo(this.sUrl).toString();if("$IncludeAnnotations"in l1){g1(this,"Unsupported IncludeAnnotations",e);}for(i in l1.$Include){k1=l1.$Include[i];if(k1 in j){g1(this,"A schema cannot span more than one document: "+k1+" - is both included and defined",e);}a1(this,k1,m1,e);}}j1=j.$LastModified?new Date(j.$LastModified):null;this.mETags[e]=j.$ETag?j.$ETag:j1;n=j.$Date?new Date(j.$Date):new Date();j1=j1||n;if(this.dLastModified<j1){this.dLastModified=j1;}delete j.$Date;delete j.$ETag;delete j.$LastModified;return j;};return i1;});