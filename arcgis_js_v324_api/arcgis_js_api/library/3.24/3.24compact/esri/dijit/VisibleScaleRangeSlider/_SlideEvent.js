// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/VisibleScaleRangeSlider/_SlideEvent",["dojo/_base/array","dojo/_base/declare"],function(n,d){return d(null,{declaredClass:"esri.dijit.VisibleScaleRangeSlider._SlideEvent",_events:["onMouseMove","onFirstMove",{name:"onMoveStop",hookTo:"destroy"}],postCreate:function(){this.inherited(arguments);this._extendMover(this._movable);this._extendMover(this._movableBar,"rangebar");this._extendMover(this._movableMax,"max")},_extendMover:function(e,d){if(e){var f=e.mover,g={};n.forEach(this._events,
function(b){var c,a,k,l,h,m;"object"===typeof b?(a=b.name,c=b.hookTo):a=b;k=f.prototype[a]||function(){};l="slide"+(d||"")+"-"+a.toLowerCase();h=function(){k.apply(this,arguments);this.widget.emit(l,{movable:e})};c&&(m=f.prototype[c],g[c]=function(){m.apply(this,arguments);h.apply(this,arguments)});g[a]=h});f.extend(g)}}})});