// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/Polygon","require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./Extent ./Geometry ./Point ./SpatialReference ./support/centroid ./support/contains ./support/coordsUtils ./support/intersects ./support/webMercatorUtils ./support/zmUtils".split(" "),function(r,U,M,f,A,h,J,N,k,O,P,Q,R,S,B,K){function L(h){return function(b,l){return null==b?l:null==l?b:h(b,l)}}var p=L(Math.min),
m=L(Math.max);r=function(r){function b(){for(var a=0;a<arguments.length;a++);a=r.call(this)||this;a.rings=[];a.type="polygon";return a}M(b,r);l=b;b.createEllipse=function(a){var d=a.center.x,c=a.center.y,g=a.center.z,e=a.center.m,b=a.center.hasZ,h=a.center.hasM,T=a.longAxis,p=a.shortAxis,m=a.numberOfPoints;a=a.view;for(var t=[],f=2*Math.PI/m,k=b?3:2,v=0;v<m;v++){var q=a.toMap(T*Math.cos(v*f)+d,p*Math.sin(v*f)+c),q=[q.x,q.y];b&&(q[2]=g);h&&(q[k]=e);t.push(q)}t.push(t[0]);return new l({rings:[t],spatialReference:a.spatialReference})};
b.createCircle=function(a){return l.createEllipse({center:a.center,longAxis:a.r,shortAxis:a.r,numberOfPoints:a.numberOfPoints,view:a.view})};b.fromExtent=function(a){var d=a.clone().normalize();a=a.spatialReference;var c=!1,g=!1;d.map(function(a){a.hasZ&&(c=!0);a.hasM&&(g=!0)});d={rings:d.map(function(a){var d=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(c&&a.hasZ)for(var b=a.zmin+.5*(a.zmax-a.zmin),e=0;e<d.length;e++)d[e].push(b);if(g&&a.hasM)for(a=a.mmin+
.5*(a.mmax-a.mmin),e=0;e<d.length;e++)d[e].push(a);return d}),spatialReference:a};c&&(d.hasZ=!0);g&&(d.hasM=!0);return new l(d)};b.prototype.normalizeCtorArgs=function(a,d){var c=null,g,b,n=null;a&&!Array.isArray(a)?(c=a.rings?a.rings:null,d||(a.spatialReference?d=a.spatialReference:a.rings||(d=a)),g=a.hasZ,b=a.hasM):c=a;c=c||[];d=d||O.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(n=c[0]&&c[0][0])void 0===g&&void 0===b?(g=2<n.length,b=!1):void 0===g?g=!b&&3<n.length:void 0===
b&&(b=!g&&3<n.length);return{rings:c,spatialReference:d,hasZ:g,hasM:b}};Object.defineProperty(b.prototype,"centroid",{get:function(){var a=P.polygonCentroid(this);if(!a||isNaN(a[0])||isNaN(a[1])||this.hasZ&&isNaN(a[2]))return null;var d=new k;d.x=a[0];d.y=a[1];d.spatialReference=this.spatialReference;this.hasZ&&(d.z=a[2]);return d},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"extent",{get:function(){var a=this.hasZ,d=this.hasM,c=this.spatialReference,b=this.rings,e=a?3:2;if(!b.length||
!b[0].length)return null;for(var n=b[0][0],h=n[0],n=n[1],f=b[0][0],l=f[0],f=f[1],k=void 0,t=void 0,r=void 0,A=void 0,v=[],q=0;q<b.length;q++){for(var C=b[q],x=C[0],G=x[0],x=x[1],y=C[0],H=y[0],y=y[1],D=void 0,E=void 0,B=void 0,w=void 0,I=0;I<C.length;I++){var z=C[I],u=z[0],F=z[1],h=p(h,u),n=p(n,F),l=m(l,u),f=m(f,F),G=p(G,u),x=p(x,F),H=m(H,u),y=m(y,F);a&&2<z.length&&(u=z[2],k=p(k,u),t=m(t,u),D=p(D,u),E=m(E,u));d&&z.length>e&&(w=z[e],r=p(k,w),A=m(t,w),B=p(D,w),w=m(E,w))}v.push(new J({xmin:G,ymin:x,zmin:D,
mmin:B,xmax:H,ymax:y,zmax:E,mmax:w,spatialReference:c}))}b=new J;b.xmin=h;b.ymin=n;b.xmax=l;b.ymax=f;b.spatialReference=c;a&&(b.zmin=k,b.zmax=t);d&&(b.mmin=r,b.mmax=A);b.cache._partwise=1<v.length?v:null;return b},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isSelfIntersecting",{get:function(){return S.isSelfIntersecting(this.rings)},enumerable:!0,configurable:!0});b.prototype.writePaths=function(a,b,c,g){b.rings=A.clone(this.rings)};b.prototype.addRing=function(a){if(a){this.clearCache();
var b=this.rings,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{for(var g=[],e=0,f=a.length;e<f;e++)g[e]=a[e].toArray();b[c]=g}return this}};b.prototype.clone=function(){var a=new l;a.spatialReference=this.spatialReference;a.rings=A.clone(this.rings);a.hasZ=this.hasZ;a.hasM=this.hasM;return a};b.prototype.contains=function(a){if(!a)return!1;B.canProject(a,this.spatialReference)&&(a=B.project(a,this.spatialReference));return Q.polygonContainsPoint(this,a)};b.prototype.isClockwise=function(a){var b=
this;a=Array.isArray(a[0])?a:a.map(function(a){return b.hasZ?b.hasM?[a.x,a.y,a.z,a.m]:[a.x,a.y,a.z]:[a.x,a.y]});return R.isClockwise(a,this.hasM,this.hasZ)};b.prototype.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;var c=this.rings[a][b],d=this.hasZ,e=this.hasM;return d&&!e?new k(c[0],c[1],c[2],void 0,this.spatialReference):e&&!d?new k(c[0],c[1],void 0,c[2],this.spatialReference):d&&e?new k(c[0],c[1],c[2],c[3],this.spatialReference):new k(c[0],c[1],this.spatialReference)};b.prototype.insertPoint=
function(a,b,c){if(!this._validateInputs(a,b,!0))return this;this.clearCache();K.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a].splice(b,0,c);return this};b.prototype.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;this.clearCache();return new k(this.rings[a].splice(b,1)[0],this.spatialReference)};b.prototype.removeRing=function(a){if(!this._validateInputs(a,null))return null;this.clearCache();a=this.rings.splice(a,1)[0];var b=this.spatialReference;
return a.map(function(a){return new k(a,b)})};b.prototype.setPoint=function(a,b,c){if(!this._validateInputs(a,b))return this;this.clearCache();K.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a][b]=c;return this};b.prototype._validateInputs=function(a,b,c){void 0===c&&(c=!1);return null==a||0>a||a>=this.rings.length||null!=b&&(a=this.rings[a],c&&(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0};b.prototype.toJSON=function(a){return this.write(null,a)};f([h.property({dependsOn:["hasM",
"hasZ","rings"]})],b.prototype,"cache",void 0);f([h.property({readOnly:!0,dependsOn:["cache"]})],b.prototype,"centroid",null);f([h.property({dependsOn:["cache"],readOnly:!0})],b.prototype,"extent",null);f([h.property({dependsOn:["cache"],readOnly:!0})],b.prototype,"isSelfIntersecting",null);f([h.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],b.prototype,"rings",void 0);f([h.writer("rings")],b.prototype,"writePaths",null);return b=l=f([h.subclass("esri.geometry.Polygon")],b);var l}(h.declared(N));
r.prototype.toJSON.isDefaultToJSON=!0;return r});