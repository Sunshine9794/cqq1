// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/layers/support/TileInfo","require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../geometry ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ./LOD".split(" "),function(B,C,u,d,v,k,w,x,e,q,y,m,z,A){var r=x({PNG:"png",
PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"});return function(t){function b(a){a=t.call(this)||this;a.dpi=96;a.format=null;a.origin=null;a.minScale=0;a.maxScale=0;a.size=null;a.spatialReference=null;return a}u(b,t);l=b;b.create=function(a){void 0===a&&(a={size:256,spatialReference:k.SpatialReference.WebMercator});var c=a.resolutionFactor||1,f=a.scales,g=a.size||
256;a=a.spatialReference||k.SpatialReference.WebMercator;var b=m.getInfo(a),b=b?new k.Point(b.origin[0],b.origin[1],a):new k.Point(0,0,a),n=1/(39.37*y.getMetersPerUnitForSR(a)*96),e=[];if(f)for(var d=0;d<f.length;d++){var h=f[d],p=h*n;e.push({level:d,scale:h,resolution:p})}else for(h=m.isGeographic(a)?512/g*1.47748799285417E8:256/g*5.91657527591555E8,f=Math.ceil(24/c),e.push({level:0,scale:h,resolution:h*n}),d=1;d<f;d++)h/=Math.pow(2,c),p=h*n,e.push({level:d,scale:h,resolution:p});return new l({dpi:96,
lods:e,origin:b,size:g,spatialReference:a})};Object.defineProperty(b.prototype,"isWrappable",{get:function(){var a=this.spatialReference,c=this.origin;if(a&&c){var f=m.getInfo(a);return a.isWrappable&&Math.abs(f.origin[0]-c.x)<=f.dx}return!1},enumerable:!0,configurable:!0});b.prototype.readOrigin=function(a,c){return k.Point.fromJSON(v.mixin({spatialReference:c.spatialReference},a))};Object.defineProperty(b.prototype,"lods",{set:function(a){var c=this,f=0,b=0,d=[];this._levelToLOD={};a&&(f=-Infinity,
b=Infinity,a.forEach(function(a){d.push(a.scale);f=a.scale>f?a.scale:f;b=a.scale<b?a.scale:b;c._levelToLOD[a.level]=a}));this._set("scales",d);this._set("minScale",f);this._set("maxScale",b);this._set("lods",a);this._initializeUpsampleLevels()},enumerable:!0,configurable:!0});b.prototype.readSize=function(a,c){return[c.cols,c.rows]};b.prototype.writeSize=function(a,c){c.cols=a[0];c.rows=a[0]};b.prototype.zoomToScale=function(a){var c=this.scales;if(0>=a)return c[0];if(a>=c.length)return c[c.length-
1];var b=Math.round(a);return c[b]+(b-a)*(c[Math.round(a-.5)]-c[b])};b.prototype.scaleToZoom=function(a){for(var c=this.scales,b=c.length-1,g=0;g<b;g++){var d=c[g],e=c[g+1];if(d<=a)break;if(e===a)return g+1;if(d>a&&e<a)return g+1-(a-e)/(d-e)}return g};b.prototype.snapScale=function(a,c){void 0===c&&(c=.95);var b=this.scaleToZoom(a);return b%Math.floor(b)>=c?this.zoomToScale(Math.ceil(b)):this.zoomToScale(Math.floor(b))};b.prototype.tileAt=function(a,c,b,d){var f=this.lodAt(a);if(!f)return null;var e;
if("number"===typeof c)e=c,c=b;else{if(c.spatialReference.equals(this.spatialReference))e=c.x,c=c.y;else{d=z.project(c,this.spatialReference);if(!d)return null;e=d.x;c=d.y}d=b}b=f.resolution*this.size[0];f=f.resolution*this.size[1];d||(d={id:null,level:0,row:0,col:0,extent:[0,0,0,0]});d.level=a;d.row=Math.floor((this.origin.y-c)/f+.001);d.col=Math.floor((e-this.origin.x)/b+.001);this.updateTileInfo(d);return d};b.prototype.updateTileInfo=function(a){var c=this.lodAt(a.level),b=c.resolution*this.size[0],
c=c.resolution*this.size[1];a.id=a.level+"/"+a.row+"/"+a.col;a.extent||(a.extent=[0,0,0,0]);a.extent[0]=this.origin.x+a.col*b;a.extent[1]=this.origin.y-(a.row+1)*c;a.extent[2]=a.extent[0]+b;a.extent[3]=a.extent[1]+c};b.prototype.upsampleTile=function(a){var b=this._upsampleLevels[a.level];if(!b||-1===b.parentLevel)return!1;a.level=b.parentLevel;a.row=Math.floor(a.row/b.factor+.001);a.col=Math.floor(a.col/b.factor+.001);this.updateTileInfo(a);return!0};b.prototype.getTileBounds=function(a,b){var c=
this.lodAt(b.level).resolution,d=c*this.size[0],c=c*this.size[1];a[0]=this.origin.x+b.col*d;a[1]=this.origin.y-(b.row+1)*c;a[2]=a[0]+d;a[3]=a[1]+c;return a};b.prototype.lodAt=function(a){return this._levelToLOD&&this._levelToLOD[a]||null};b.prototype.clone=function(){return l.fromJSON(this.write({}))};b.prototype._initializeUpsampleLevels=function(){var a=this.lods;this._upsampleLevels=[];for(var b=null,d=0;d<a.length;d++){var e=a[d];this._upsampleLevels[e.level]={parentLevel:b?b.level:-1,factor:b?
b.resolution/e.resolution:0};b=e}};d([e.property({type:Number,json:{write:!0}})],b.prototype,"compressionQuality",void 0);d([e.property({type:Number,json:{write:!0}})],b.prototype,"dpi",void 0);d([e.property({type:String,json:{read:r.read,write:r.write}})],b.prototype,"format",void 0);d([e.property({readOnly:!0,dependsOn:["spatialReference","origin"]})],b.prototype,"isWrappable",null);d([e.property({type:k.Point,json:{write:!0}})],b.prototype,"origin",void 0);d([e.reader("origin")],b.prototype,"readOrigin",
null);d([e.property({type:[A],value:null,json:{write:!0}})],b.prototype,"lods",null);d([e.property({readOnly:!0})],b.prototype,"minScale",void 0);d([e.property({readOnly:!0})],b.prototype,"maxScale",void 0);d([e.property({readOnly:!0})],b.prototype,"scales",void 0);d([e.property({cast:function(a){return Array.isArray(a)?a:"number"===typeof a?[a,a]:[256,256]}})],b.prototype,"size",void 0);d([e.reader("size",["rows","cols"])],b.prototype,"readSize",null);d([e.writer("size",{cols:{type:q.Integer},rows:{type:q.Integer}})],
b.prototype,"writeSize",null);d([e.property({type:k.SpatialReference,json:{write:!0}})],b.prototype,"spatialReference",void 0);return b=l=d([e.subclass("esri.layers.support.TileInfo")],b);var l}(e.declared(w))});