// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/inspire/base/PortalItemTransformer","dojo/_base/declare dojo/_base/lang dojo/has dojo/query dijit/registry ../../../types/iso/base/PortalItemTransformer ../../../../../kernel".split(" "),function(b,c,d,e,f,g,h){b=b([g],{postCreate:function(){this.inherited(arguments)},findInputWidget:function(b,c,d){if("tags"!==b)return this.inherited(arguments);var a;return(a=e(".gxeOtherKeywords",this.gxeDocument.rootDescriptor.domNode))&&0<a.length&&(a=e("[data-gxe-path\x3d'"+
c+"']",a[0]))&&1===a.length&&(a=f.byNode(a[0]))?a.inputWidget:null}});d("extend-esri")&&c.setObject("dijit.metadata.types.inspire.base.PortalItemTransformer",b,h);return b});