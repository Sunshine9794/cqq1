// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/geometry/screenUtils","dojo/_base/array dojo/_base/lang dojo/sniff ../kernel ./Point ./ScreenPoint ./Polyline ./Polygon ./Multipoint ./Extent".split(" "),function(C,D,E,G,u,H,y,z,A,B){var I=function(){return 9>E("ie")?function(b,p,q,a,g,d,f,c,h){var e=[],k=Math.round,t,r=f.length,l,m,v,n,w,x;for(t=0;t<r;t++)if(l=f[t],n=c?c(l[0][0],l[0][1],h):l[0],1<(v=l.length))for(w=k((n[0]-b)*q+g),x=k((p-n[1])*a+d),n=c?c(l[1][0],l[1][1],h):l[1],m=k((n[0]-b)*q+g),n=k((p-n[1])*a+d),e.push("M",w+","+x,
"L",m+","+n),m=2;m<v;m++)n=c?c(l[m][0],l[m][1],h):l[m],w=k((n[0]-b)*q+g),x=k((p-n[1])*a+d),e.push(w+","+x);else w=k((n[0]-b)*q+g),x=k((p-n[1])*a+d),e.push("M",w+","+x);return e}:function(b,p,q,a,g,d,f,c,h,e){var k=[],t,r,l,m,v,n,w=Math.round;t=0;for(l=f?f.length:0;t<l;t++){v=f[t];k.push("M");r=0;for(m=v?v.length:0;r<m;r++)n=c?c(v[r][0],v[r][1],h):v[r],k.push(w((n[0]-b)*q+g)+","+w((p-n[1])*a+d));e||k.push("Z")}return k}}(),F={toScreenPoint:function(b,p,q,a,g){var d=b.spatialReference,f=a.spatialReference,
c=a.x;a=a.y;d&&f&&!d.equals(f)&&d._canProject(f)&&(d=d.isWebMercator()?u.lngLatToXY(c,a):u.xyToLngLat(c,a,!0),c=d[0],a=d[1]);c=(c-b.xmin)*(p/b.getWidth());a=(b.ymax-a)*(q/b.getHeight());g||(c=Math.round(c),a=Math.round(a));return new H(c,a)},toScreenGeometry:function(b,p,q,a){var g=b.xmin,d=b.ymax,f=p/b.getWidth(),c=q/b.getHeight(),h=C.forEach,e=Math.round;if(a instanceof u)return new u(e((a.x-g)*f),e((d-a.y)*c));if(a instanceof A){b=new A;var k=b.points;h(a.points,function(a,b){k[b]=[e((a[0]-g)*
f),e((d-a[1])*c)]});return b}if(a instanceof B)return new B(e((a.xmin-g)*f),e((d-a.ymin)*c),e((a.xmax-g)*f),e((d-a.ymax)*f));if(a instanceof y){b=new y;var t=b.paths,r;h(a.paths,function(a,b){r=t[b]=[];h(a,function(a,b){r[b]=[e((a[0]-g)*f),e((d-a[1])*c)]})});return b}if(a instanceof z){b=new z;var l=b.rings,m;h(a.rings,function(a,b){m=l[b]=[];h(a,function(a,b){m[b]=[e((a[0]-g)*f),e((d-a[1])*c)]})});return b}},_toScreenPath:function(b,p,q,a,g,d){var f=a instanceof y,c=b.spatialReference,h=a.spatialReference,
e,k;c&&h&&!c.equals(h)&&c._canProject(h)&&(c.isWebMercator()?e=u.lngLatToXY:(e=u.xyToLngLat,k=!0));return I(b.xmin,b.ymax,p/b.getWidth(),q/b.getHeight(),g,d,f?a.paths:a.rings,e,k,f)},toMapPoint:function(b,p,q,a){return new u(b.xmin+a.x/(p/b.getWidth()),b.ymax-a.y/(q/b.getHeight()),b.spatialReference)},toMapGeometry:function(b,p,q,a){var g=b.xmin,d=b.ymax,f=b.spatialReference,c=p/b.getWidth(),h=q/b.getHeight(),e=C.forEach;if(a instanceof u)return new u(g+a.x/c,d-a.y/h,f);if(a instanceof A){b=new A(f);
var k=b.points;e(a.points,function(a,b){k[b]=[g+a[0]/c,d-a[1]/h]});return b}if(a instanceof B)return new B(g+a.xmin/c,d-a.ymin/h,g+a.xmax/c,d-a.ymax/h,f);if(a instanceof y){b=new y(f);var t=b.paths,r;e(a.paths,function(a,b){r=t[b]=[];e(a,function(a,b){r[b]=[g+a[0]/c,d-a[1]/h]})});return b}if(a instanceof z){b=new z(f);var l=b.rings,m;e(a.rings,function(a,b){m=l[b]=[];e(a,function(a,b){m[b]=[g+a[0]/c,d-a[1]/h]})});return b}}};E("extend-esri")&&D.mixin(D.getObject("geometry",!0,G),F);return F});