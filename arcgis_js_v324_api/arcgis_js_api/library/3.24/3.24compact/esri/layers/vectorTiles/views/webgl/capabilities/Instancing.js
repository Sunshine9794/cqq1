// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/capabilities/Instancing",["require","exports","./isWebGL2Context"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.load=function(a,c){if(d.default(a))return{drawArraysInstanced:a.drawArraysInstanced.bind(a),drawElementsInstanced:a.drawElementsInstanced.bind(a),vertexAttribDivisor:a.vertexAttribDivisor.bind(a)};if(c.angleInstancedArrays)return null;var b=a.getExtension("ANGLE_instanced_arrays");return b?{drawArraysInstanced:b.drawArraysInstancedANGLE.bind(b),
drawElementsInstanced:b.drawElementsInstancedANGLE.bind(b),vertexAttribDivisor:b.vertexAttribDivisorANGLE.bind(b)}:null}});