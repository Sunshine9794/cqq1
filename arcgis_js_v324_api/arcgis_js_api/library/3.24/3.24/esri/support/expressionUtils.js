// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/support/expressionUtils",["dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../arcade/arcade"],function(g,h,m,n,e){var k={vars:{$feature:"any",$view:"any"}},l=/^\$feature\./i,f={_getSyntaxTree:function(a,b){return"string"===typeof a?f.createSyntaxTree(a,b):a},createSyntaxTree:function(a,b){b=b||g.clone(k);var c;try{c=a?e.parseScript(a,b):null}catch(d){c=null}return c},createFunction:function(a,b){b=b||g.clone(k);var c=f._getSyntaxTree(a,b),d;try{d=c?e.compileScript(c,b):null}catch(p){d=
null}return d},createExecContext:function(a,b){return{vars:{$feature:e.constructFeature(a),$view:b&&b.view},spatialReference:b&&b.sr}},evalSyntaxTree:function(a,b){var c;try{c=e.executeScript(a,b,b.spatialReference)}catch(d){c=null}return c},executeFunction:function(a,b){var c;try{c=a?a(b,b.spatialReference):null}catch(d){c=null}return c},extractFieldNames:function(a,b){var c=f._getSyntaxTree(a,b),c=e.extractFieldLiterals(c),d=[];h.forEach(c,function(a){l.test(a)&&(a=a.replace(l,""),d.push(a))});
d.sort();return h.filter(d,function(a,b){return 0===b||d[b-1]!==a})},dependsOnView:function(a){return e.referencesMember(a,"$view")},hasGeometryOperations:function(a){return(a=f._getSyntaxTree(a))?e.scriptUsesGeometryEngine(a):!1},enableGeometryOperations:function(){return e.enableGeometrySupport()}};m("extend-esri")&&g.setObject("renderer.expressionUtils",f,n);return f});