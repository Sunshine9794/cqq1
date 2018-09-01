// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ImageInfoUtil",["dojo/_base/lang","dojo/when","./ImageUtil","./UrlUtil"],function(l,f,h,m){var g={_infoCache:{},getImageInfo:function(b,c,a){function e(){return c&&c.replace(/\.\w+$/,".png").toLowerCase()}function k(d){return f(g._processDataUrl(d,n),function(a){if(a&&a.dataUrl){var b=l.mixin({},d);b.dataUrl=a.dataUrl;b.width*=a.factor;b.height*=a.factor;return f(b)}return f(d)})}var n=a&&a.sizeLimit||1E5;return(a=g._infoCache[b])?(a=l.mixin({},a),c&&(a.filename=
e()),k(a)):h.imageFromUrl(b).then(function(a){var d=h.imageToDataURL(a);a={dataUrl:d,contentType:h.getContentType(d),width:a.width,height:a.height};c&&(a.filename=e());g._infoCache[b]=a;return k(a)})},getRemoteImageDataUrl:function(b,c){function a(a){var d=b;a&&(a=m.getProxyUrl())&&(d=a+"?"+d);return g.getImageInfo(d)}function e(a){return f(g._processDataUrl(a,k),function(a){return a&&a.dataUrl||a})}var k=c&&c.sizeLimit||1E5;return f(a(!1),function(a){return e(a)},function(){return f(a(!0),function(a){return e(a)},
function(){return b})})},_processDataUrl:function(b,c){var a=Math.max(b.width,b.height);if(a<=c)return b.dataUrl;var e=c/a;return f(h.scaleImage(b.dataUrl,{factor:e}),function(a){return{dataUrl:a,factor:e}})}};return g});