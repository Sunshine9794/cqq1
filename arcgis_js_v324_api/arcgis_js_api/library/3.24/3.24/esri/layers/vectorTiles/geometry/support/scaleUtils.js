// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/support/scaleUtils",["require","exports","../../config","../../core/kebabDictionary","./WKIDUnitConversion"],function(v,c,k,t,u){function l(a){return m.fromJSON(a.toLowerCase())||null}function f(a){return h(a)||n}function h(a){var d,b,e;a&&("object"===typeof a?(d=a.wkid,b=a.wkt):"number"===typeof a?d=a:"string"===typeof a&&(b=a));d?e=g.values[g[d]]:b&&-1!==b.search(/^PROJCS/i)&&(a=p.exec(b))&&a[1]&&(e=parseFloat(a[1].split(",")[1]));return e}function q(a){var d,
b,e;a&&("object"===typeof a?(d=a.wkid,b=a.wkt):"number"===typeof a?d=a:"string"===typeof a&&(b=a));d?e=g.units[g[d]]:b&&-1!==b.search(/^PROJCS/i)&&(a=p.exec(b))&&a[1]&&(e=(a=/[\\"\\']{1}([^\\"\\']+)/.exec(a[1]))&&a[1]);return e?l(e):null}function r(a,d){var b=f(d);return a/(39.37*b*k.screenDPI)}Object.defineProperty(c,"__esModule",{value:!0});var n=20015077/180,p=/UNIT\[([^\]]+)\]\]$/i,g=u,m=t({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",
yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"},{ignoreUnknown:!0});c.unitFromRESTJSON=l;c.unitToRESTJSON=function(a){return m.toJSON(a)||null};c.getMetersPerVerticalUnitForSR=function(a){a=f(a);return 1E5<a?
1:a};c.getVerticalUnitStringForSR=function(a){return 1E5<f(a)?"meters":q(a)};c.getMetersPerUnitForSR=f;c.getMetersPerUnit=h;c.getUnitString=q;c.getScale=function(a,d){var b=d||a.extent,e=a.width,c=h(b&&b.spatialReference);return b&&e?b.width/e*(c||n)*39.37*k.screenDPI:0};c.getResolutionForScale=r;c.getExtentForScale=function(a,d){var b=a.extent,c=a.width,f=r(d,b.spatialReference);return b.clone().expand(f*c/b.width)}});