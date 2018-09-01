// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/painter/WGLHighlightPainter",["require","exports","dojo/has","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],function(k,l,f,g,h){return function(){function b(){this._hlRenderer=new g;this._hlSurfaces=new h;this._height=this._width=void 0}b.prototype.setup=function(a,c,d){var b=c%4,e=d%4;c+=2>b?-b:4-b;d+=2>e?-e:4-e;this._width=c;this._height=d;this._boundFBO=a.getBoundFramebufferObject();c=Math.round(.75*c);d=Math.round(.75*d);
this._hlRenderer.setup(a,c,d);this._hlSurfaces.setup(a,c,d)};b.prototype.setHighlightOptions=function(a){this._hlRenderer.setHighlightOptions({fillColor:a.fillColor,outlineColor:a.outlineColor,outlineWidth:.75*a.outlineWidth,outerHaloWidth:.75*a.outerHaloWidth,innerHaloWidth:.75*a.innerHaloWidth,outlinePosition:.75*a.outlinePosition})};b.prototype.startMaskDraw=function(a){a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo);a.setClearColor(0,0,0,0);a.setClearStencil(0);a.clear(a.gl.COLOR_BUFFER_BIT|
a.gl.STENCIL_BUFFER_BIT);a.setViewport(0,0,.75*this._width,.75*this._height)};b.prototype.draw=function(a){a.setStencilTestEnabled(!1);a.setBlendingEnabled(!1);a.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._hlRenderer.preBlur(a,this._hlSurfaces.sharedBlur1Tex);f("esri-feature-highlight-debug")?(a.bindFramebuffer(null),a.clear(a.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(a,this._hlSurfaces.sharedBlur2Tex)):(a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),
a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(a,this._hlSurfaces.sharedBlur2Tex),a.bindFramebuffer(this._boundFBO),a.setBlendingEnabled(!0),a.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(a,this._hlSurfaces.sharedBlur1Tex),this._boundFBO=null)};return b}()});