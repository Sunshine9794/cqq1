// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/CircleRenderer","require exports ../../../core/libs/gl-matrix/mat4 ../../../core/libs/gl-matrix/vec3 ../GeometryUtils ./rendererUtils ./vtShaderSnippets ../../webgl/ShaderVariations ../../webgl/VertexArrayObject".split(" "),function(x,y,m,n,r,t,u,v,w){return function(){function b(){this._attributeLocations={a_pos:0,a_color:1,a_stroke_color:2,a_data:3};this._initialized=!1;this._viewProjMat=m.create();this._offsetVector=n.create()}b.prototype.dispose=
function(){};b.prototype.render=function(c,d,a,l,g,e,b,n,q){if(0!==d.triangleElementCount){this._initialized||this._initialize(c);q*=b.getPaintValue("circle-opacity",a);l=3===l;var h=e.tileTransform.transform,f=b.getPaintValue("circle-translate",a);if(0!==f[0]||0!==f[1]){m.copy(this._viewProjMat,e.tileTransform.transform);var h=f[0],f=f[1],p=0,k=0,k=(1<<e.key.level)/Math.pow(2,a)*(e.coordRange/512);1===b.getPaintValue("circle-translate-anchor",a)?(g*=-r.C_DEG_TO_RAD,a=Math.sin(g),g=Math.cos(g),p=
k*(h*g-f*a),k*=h*a+f*g):(p=k*h,k*=f);this._offsetVector[0]=p;this._offsetVector[1]=k;this._offsetVector[2]=0;m.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);h=this._viewProjMat}if(a=this._getCircleVAO(c,e))c.bindVAO(a),a=this._shaderVariations.getProgram([l],void 0,void 0,this._attributeLocations),c.bindProgram(a),a.setUniformMatrix4fv("u_transformMatrix",h),a.setUniformMatrix4fv("u_extrudeMatrix",n),a.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),a.setUniform1f("u_depth",
b.z),a.setUniform1f("u_opacity",q),a.setUniform1f("u_antialiasingWidth",1.2),l&&(e=t.int32To4Bytes(d.layerID),a.setUniform4f("u_id",e[0],e[1],e[2],e[3])),c.drawElements(4,d.triangleElementCount,5125,12*d.triangleElementStart),c.bindVAO()}};b.prototype._initialize=function(c){if(this._initialized)return!0;c=new v("circle",["circleVS","circleFS"],[],u,c);c.addDefine("ID","ID",[!0,!0],"ID");this._shaderVariations=c;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,
normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._initialized=!0};b.prototype._getCircleVAO=function(c,d){if(d.circleVertexArrayObject)return d.circleVertexArrayObject;var a=d.circleVertexBuffer,b=d.circleIndexBuffer;if(!a||!b)return null;d.circleVertexArrayObject=new w(c,
this._attributeLocations,this._vertexAttributes,{geometry:a},b);return d.circleVertexArrayObject};return b}()});