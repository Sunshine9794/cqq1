// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/dom-style",["dojo/dom-style"],function(e){function g(a,b,d){b=b.toLowerCase();if("auto"===d){if("height"===b)return a.offsetHeight;if("width"===b)return a.offsetWidth}if("fontweight"===b)switch(d){case 700:return"bold";default:return"normal"}b in f||(f[b]=h.test(b));return f[b]?e.toPixelValue(a,d):d}var c={get:function(a,b){var d=a.__computedStyle||e.getComputedStyle(a);if("string"===typeof b)return g(a,b,d[b]||a.style[b]);for(var c in b)b[c]=
g(a,c,d[c]||a.style[c]);return b},cacheComputedStyle:function(a){a&&(a.__computedStyle=e.getComputedStyle(a))},clearCache:function(a){a&&delete a.__computedStyle}},f={left:!0,top:!0},h=/margin|padding|width|height|max|min|offset/;c.set=e.set;c.toPixelValue=e.toPixelValue;c.getComputedStyle=e.getComputedStyle;return c});