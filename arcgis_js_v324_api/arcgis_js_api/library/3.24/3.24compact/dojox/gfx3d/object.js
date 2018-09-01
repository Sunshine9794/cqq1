//>>built
define("dojox/gfx3d/object","dojo/_base/array dojo/_base/declare dojo/_base/lang dojox/gfx dojox/gfx/matrix ./_base ./scheduler ./gradient ./vector ./matrix ./lighting".split(" "),function(g,m,h,p,r,d,v,w,q,f,x){var u=v.scheduler;m("dojox.gfx3d.Object",null,{constructor:function(){this.shape=this.fillStyle=this.strokeStyle=this.parent=this.renderer=this.cache=this.matrix=this.object=null},setObject:function(a){this.object=p.makeParameters(this.object,a);return this},setTransform:function(a){this.matrix=
f.clone(a?f.normalize(a):d.identity,!0);return this},applyRightTransform:function(a){return a?this.setTransform([this.matrix,a]):this},applyLeftTransform:function(a){return a?this.setTransform([a,this.matrix]):this},applyTransform:function(a){return a?this.setTransform([this.matrix,a]):this},setFill:function(a){this.fillStyle=a;return this},setStroke:function(a){this.strokeStyle=a;return this},toStdFill:function(a,b){return this.fillStyle&&"undefined"!=typeof this.fillStyle.type?a[this.fillStyle.type](b,
this.fillStyle.finish,this.fillStyle.color):this.fillStyle},invalidate:function(){this.renderer.addTodo(this)},destroy:function(){if(this.shape){var a=this.shape.getParent();a&&a.remove(this.shape);this.shape=null}},render:function(a){throw"Pure virtual function, not implemented";},draw:function(a){throw"Pure virtual function, not implemented";},getZOrder:function(){return 0},getOutline:function(){return null}});m("dojox.gfx3d.Scene",d.Object,{constructor:function(){this.objects=[];this.todos=[];
this.schedule=u.zOrder;this._draw=d.drawer.conservative},setFill:function(a){this.fillStyle=a;g.forEach(this.objects,function(b){b.setFill(a)});return this},setStroke:function(a){this.strokeStyle=a;g.forEach(this.objects,function(b){b.setStroke(a)});return this},render:function(a,b){var c=f.multiply(a,this.matrix);b&&(this.todos=this.objects);g.forEach(this.todos,function(a){a.render(c,b)})},draw:function(a){this.objects=this.schedule(this.objects);this._draw(this.todos,this.objects,this.renderer)},
addTodo:function(a){g.every(this.todos,function(b){return b!=a})&&(this.todos.push(a),this.invalidate())},invalidate:function(){this.parent.addTodo(this)},getZOrder:function(){var a=0;g.forEach(this.objects,function(b){a+=b.getZOrder()});return 1<this.objects.length?a/this.objects.length:0}});m("dojox.gfx3d.Edges",d.Object,{constructor:function(){this.object=h.clone(d.defaultEdges)},setObject:function(a,b){this.object=p.makeParameters(this.object,a instanceof Array?{points:a,style:b}:a);return this},
getZOrder:function(){var a=0;g.forEach(this.cache,function(b){a+=b.z});return 1<this.cache.length?a/this.cache.length:0},render:function(a){var b=f.multiply(a,this.matrix);this.cache=g.map(this.object.points,function(a){return f.multiplyPoint(b,a)})},draw:function(){var a=this.cache;this.shape?this.shape.setShape(""):this.shape=this.renderer.createPath();var b=this.shape.setAbsoluteMode("absolute");if("strip"==this.object.style||"loop"==this.object.style)b.moveTo(a[0].x,a[0].y),g.forEach(a.slice(1),
function(a){b.lineTo(a.x,a.y)}),"loop"==this.object.style&&b.closePath();else for(var c=0;c<this.cache.length;)b.moveTo(a[c].x,a[c].y),c++,b.lineTo(a[c].x,a[c].y),c++;b.setStroke(this.strokeStyle)}});m("dojox.gfx3d.Orbit",d.Object,{constructor:function(){this.object=h.clone(d.defaultOrbit)},render:function(a){var b=f.multiply(a,this.matrix);a=[0,Math.PI/4,Math.PI/3];var c=f.multiplyPoint(b,this.object.center),e=g.map(a,function(a){return{x:this.center.x+this.radius*Math.cos(a),y:this.center.y+this.radius*
Math.sin(a),z:this.center.z}},this.object),e=g.map(e,function(a){return f.multiplyPoint(b,a)});a=q.normalize(e);var e=g.map(e,function(a){return q.substract(a,c)}),n={xx:e[0].x*e[0].y,xy:e[0].y*e[0].y,xz:1,yx:e[1].x*e[1].y,yy:e[1].y*e[1].y,yz:1,zx:e[2].x*e[2].y,zy:e[2].y*e[2].y,zz:1,dx:0,dy:0,dz:0},d=g.map(e,function(a){return-Math.pow(a.x,2)}),n=f.multiplyPoint(f.invert(n),d[0],d[1],d[2]),l=Math.atan2(n.x,1-n.y)/2,k=g.map(e,function(a){return r.multiplyPoint(r.rotate(-l),a.x,a.y)}),e=Math.pow(k[0].x,
2),n=Math.pow(k[0].y,2),d=Math.pow(k[1].x,2),k=Math.pow(k[1].y,2);this.cache={cx:c.x,cy:c.y,rx:Math.sqrt((e*k-n*d)/(k-n)),ry:Math.sqrt((e*k-n*d)/(e-d)),theta:l,normal:a}},draw:function(a){this.shape?this.shape.setShape(this.cache):this.shape=this.renderer.createEllipse(this.cache);this.shape.applyTransform(r.rotateAt(this.cache.theta,this.cache.cx,this.cache.cy)).setStroke(this.strokeStyle).setFill(this.toStdFill(a,this.cache.normal))}});m("dojox.gfx3d.Path3d",d.Object,{constructor:function(){this.object=
h.clone(d.defaultPath3d);this.segments=[];this.absolute=!0;this.last={};this.path=""},_collectArgs:function(a,b){for(var c=0;c<b.length;++c){var e=b[c];"boolean"==typeof e?a.push(e?1:0):"number"==typeof e?a.push(e):e instanceof Array?this._collectArgs(a,e):"x"in e&&"y"in e&&(a.push(e.x),a.push(e.y))}},_validSegments:{m:3,l:3,z:0},_pushSegment:function(a,b){var c=this._validSegments[a.toLowerCase()];"number"==typeof c&&(c?b.length>=c&&(c={action:a,args:b.slice(0,b.length-b.length%c)},this.segments.push(c)):
(c={action:a,args:[]},this.segments.push(c)))},moveTo:function(){var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"M":"m",a);return this},lineTo:function(){var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"L":"l",a);return this},closePath:function(){this._pushSegment("Z",[]);return this},render:function(a){var b=f.multiply(a,this.matrix),c="",e=this._validSegments;g.forEach(this.segments,function(a){c+=a.action;for(var d=0;d<a.args.length;d+=e[a.action.toLowerCase()]){var n=
f.multiplyPoint(b,a.args[d],a.args[d+1],a.args[d+2]);c+=" "+n.x+" "+n.y}});this.cache=c},_draw:function(){return this.parent.createPath(this.cache)}});m("dojox.gfx3d.Triangles",d.Object,{constructor:function(){this.object=h.clone(d.defaultTriangles)},setObject:function(a,b){this.object=a instanceof Array?p.makeParameters(this.object,{points:a,style:b}):p.makeParameters(this.object,a);return this},render:function(a){var b=f.multiply(a,this.matrix);a=g.map(this.object.points,function(a){return f.multiplyPoint(b,
a)});this.cache=[];var c=a.slice(0,2),e=a[0];if("strip"==this.object.style)g.forEach(a.slice(2),function(a){c.push(a);c.push(c[0]);this.cache.push(c);c=c.slice(1,3)},this);else if("fan"==this.object.style)g.forEach(a.slice(2),function(a){c.push(a);c.push(e);this.cache.push(c);c=[e,a]},this);else for(var d=0;d<a.length;)this.cache.push([a[d],a[d+1],a[d+2],a[d]]),d+=3},draw:function(a){this.cache=u.bsp(this.cache,function(a){return a});this.shape?this.shape.clear():this.shape=this.renderer.createGroup();
g.forEach(this.cache,function(b){this.shape.createPolyline(b).setStroke(this.strokeStyle).setFill(this.toStdFill(a,q.normalize(b)))},this)},getZOrder:function(){var a=0;g.forEach(this.cache,function(b){a+=(b[0].z+b[1].z+b[2].z)/3});return 1<this.cache.length?a/this.cache.length:0}});m("dojox.gfx3d.Quads",d.Object,{constructor:function(){this.object=h.clone(d.defaultQuads)},setObject:function(a,b){this.object=p.makeParameters(this.object,a instanceof Array?{points:a,style:b}:a);return this},render:function(a){var b=
f.multiply(a,this.matrix),c=g.map(this.object.points,function(a){return f.multiplyPoint(b,a)});this.cache=[];if("strip"==this.object.style){var e=c.slice(0,2);for(a=2;a<c.length;)e=e.concat([c[a],c[a+1],e[0]]),this.cache.push(e),e=e.slice(2,4),a+=2}else for(a=0;a<c.length;)this.cache.push([c[a],c[a+1],c[a+2],c[a+3],c[a]]),a+=4},draw:function(a){this.cache=d.scheduler.bsp(this.cache,function(a){return a});this.shape?this.shape.clear():this.shape=this.renderer.createGroup();for(var b=0;b<this.cache.length;b++)this.shape.createPolyline(this.cache[b]).setStroke(this.strokeStyle).setFill(this.toStdFill(a,
q.normalize(this.cache[b])))},getZOrder:function(){for(var a=0,b=0;b<this.cache.length;b++)var c=this.cache[b],a=a+(c[0].z+c[1].z+c[2].z+c[3].z)/4;return 1<this.cache.length?a/this.cache.length:0}});m("dojox.gfx3d.Polygon",d.Object,{constructor:function(){this.object=h.clone(d.defaultPolygon)},setObject:function(a){this.object=p.makeParameters(this.object,a instanceof Array?{path:a}:a);return this},render:function(a){var b=f.multiply(a,this.matrix);this.cache=g.map(this.object.path,function(a){return f.multiplyPoint(b,
a)});this.cache.push(this.cache[0])},draw:function(a){this.shape?this.shape.setShape({points:this.cache}):this.shape=this.renderer.createPolyline({points:this.cache});this.shape.setStroke(this.strokeStyle).setFill(this.toStdFill(a,f.normalize(this.cache)))},getZOrder:function(){for(var a=0,b=0;b<this.cache.length;b++)a+=this.cache[b].z;return 1<this.cache.length?a/this.cache.length:0},getOutline:function(){return this.cache.slice(0,3)}});m("dojox.gfx3d.Cube",d.Object,{constructor:function(){this.object=
h.clone(d.defaultCube);this.polygons=[]},setObject:function(a){this.object=p.makeParameters(this.object,a)},render:function(a){var b=this.object.top,c=this.object.bottom,e={x:c.x,y:b.y,z:b.z},d={x:c.x,y:c.y,z:b.z},h={x:b.x,y:c.y,z:b.z},l={x:b.x,y:b.y,z:c.z},k={x:c.x,y:b.y,z:c.z},t={x:b.x,y:c.y,z:c.z},b=[b,e,d,h,l,k,c,t],m=f.multiply(a,this.matrix);a=g.map(b,function(a){return f.multiplyPoint(m,a)});b=a[0];e=a[1];d=a[2];h=a[3];l=a[4];k=a[5];c=a[6];t=a[7];this.cache=[[b,e,d,h,b],[l,k,c,t,l],[b,h,t,
l,b],[h,d,c,t,h],[d,e,k,c,d],[e,b,l,k,e]]},draw:function(a){this.cache=d.scheduler.bsp(this.cache,function(a){return a});var b=this.cache.slice(3);this.shape?this.shape.clear():this.shape=this.renderer.createGroup();for(var c=0;c<b.length;c++)this.shape.createPolyline(b[c]).setStroke(this.strokeStyle).setFill(this.toStdFill(a,q.normalize(b[c])))},getZOrder:function(){return(this.cache[0][0].z+this.cache[1][2].z)/2}});m("dojox.gfx3d.Cylinder",d.Object,{constructor:function(){this.object=h.clone(d.defaultCylinder)},
render:function(a){var b=f.multiply(a,this.matrix);a=[0,Math.PI/4,Math.PI/3];var c=f.multiplyPoint(b,this.object.center);a=g.map(a,function(a){return{x:this.center.x+this.radius*Math.cos(a),y:this.center.y+this.radius*Math.sin(a),z:this.center.z}},this.object);a=g.map(a,function(a){return q.substract(f.multiplyPoint(b,a),c)});var e={xx:a[0].x*a[0].y,xy:a[0].y*a[0].y,xz:1,yx:a[1].x*a[1].y,yy:a[1].y*a[1].y,yz:1,zx:a[2].x*a[2].y,zy:a[2].y*a[2].y,zz:1,dx:0,dy:0,dz:0},d=g.map(a,function(a){return-Math.pow(a.x,
2)}),e=f.multiplyPoint(f.invert(e),d[0],d[1],d[2]),h=Math.atan2(e.x,1-e.y)/2;a=g.map(a,function(a){return r.multiplyPoint(r.rotate(-h),a.x,a.y)});var e=Math.pow(a[0].x,2),d=Math.pow(a[0].y,2),l=Math.pow(a[1].x,2),k=Math.pow(a[1].y,2);a=Math.sqrt((e*k-d*l)/(k-d));e=Math.sqrt((e*k-d*l)/(e-l));a<e&&(d=a,a=e,e=d,h-=Math.PI/2);d=f.multiplyPoint(b,q.sum(this.object.center,{x:0,y:0,z:this.object.height}));l="constant"==this.fillStyle.type?this.fillStyle.color:w(this.renderer.lighting,this.fillStyle,this.object.center,
this.object.radius,Math.PI,2*Math.PI,b);if(isNaN(a)||isNaN(e)||isNaN(h))a=this.object.radius,h=e=0;this.cache={center:c,top:d,rx:a,ry:e,theta:h,gradient:l}},draw:function(){var a=this.cache,b=[a.center,a.top],c=q.substract(a.top,a.center);0<q.dotProduct(c,this.renderer.lighting.incident)&&(b=[a.top,a.center],c=q.substract(a.center,a.top));var c=this.renderer.lighting[this.fillStyle.type](c,this.fillStyle.finish,this.fillStyle.color),d=Math.sqrt(Math.pow(a.center.x-a.top.x,2)+Math.pow(a.center.y-a.top.y,
2));this.shape?this.shape.clear():this.shape=this.renderer.createGroup();this.shape.createPath("").moveTo(0,-a.rx).lineTo(d,-a.rx).lineTo(d,a.rx).lineTo(0,a.rx).arcTo(a.ry,a.rx,0,!0,!0,0,-a.rx).setFill(a.gradient).setStroke(this.strokeStyle).setTransform([r.translate(b[0]),r.rotate(Math.atan2(b[1].y-b[0].y,b[1].x-b[0].x))]);0<a.rx&&0<a.ry&&this.shape.createEllipse({cx:b[1].x,cy:b[1].y,rx:a.rx,ry:a.ry}).setFill(c).setStroke(this.strokeStyle).applyTransform(r.rotateAt(a.theta,b[1]))}});m("dojox.gfx3d.Viewport",
p.Group,{constructor:function(){this.dimension=null;this.objects=[];this.todos=[];this.renderer=this;this.schedule=d.scheduler.zOrder;this.draw=d.drawer.conservative;this.deep=!1;this.lights=[];this.lighting=null},setCameraTransform:function(a){this.camera=f.clone(a?f.normalize(a):d.identity,!0);this.invalidate();return this},applyCameraRightTransform:function(a){return a?this.setCameraTransform([this.camera,a]):this},applyCameraLeftTransform:function(a){return a?this.setCameraTransform([a,this.camera]):
this},applyCameraTransform:function(a){return this.applyCameraRightTransform(a)},setLights:function(a,b,c){this.lights=a instanceof Array?{sources:a,ambient:b,specular:c}:a;this.lighting=new x.Model({x:0,y:0,z:1},this.lights.sources,this.lights.ambient,this.lights.specular);this.invalidate();return this},addLights:function(a){return this.setLights(this.lights.sources.concat(a))},addTodo:function(a){g.every(this.todos,function(b){return b!=a})&&this.todos.push(a)},invalidate:function(){this.deep=!0;
this.todos=this.objects},setDimensions:function(a){if(a){var b=h.isString(a.width)?parseInt(a.width):a.width;a=h.isString(a.height)?parseInt(a.height):a.height;if(this.rawNode){var c=this.rawNode.style;c?(c.height=a,c.width=b):(this.rawNode.width=b,this.rawNode.height=a)}this.dimension={width:b,height:a}}else this.dimension=null},render:function(){if(this.todos.length){for(var a=0;a<this.todos.length;a++)this.todos[a].render(f.normalize([f.cameraRotateXg(180),f.cameraTranslate(0,this.dimension.height,
0),this.camera]),this.deep);this.objects=this.schedule(this.objects);this.draw(this.todos,this.objects,this);this.todos=[];this.deep=!1}}});d.Viewport.nodeType=p.Group.nodeType;d._creators={createEdges:function(a,b){return this.create3DObject(d.Edges,a,b)},createTriangles:function(a,b){return this.create3DObject(d.Triangles,a,b)},createQuads:function(a,b){return this.create3DObject(d.Quads,a,b)},createPolygon:function(a){return this.create3DObject(d.Polygon,a)},createOrbit:function(a){return this.create3DObject(d.Orbit,
a)},createCube:function(a){return this.create3DObject(d.Cube,a)},createCylinder:function(a){return this.create3DObject(d.Cylinder,a)},createPath3d:function(a){return this.create3DObject(d.Path3d,a)},createScene:function(){return this.create3DObject(d.Scene)},create3DObject:function(a,b,c){a=new a;this.adopt(a);b&&a.setObject(b,c);return a},adopt:function(a){a.renderer=this.renderer;a.parent=this;this.objects.push(a);this.addTodo(a);return this},abandon:function(a,b){for(var c=0;c<this.objects.length;++c)this.objects[c]==
a&&this.objects.splice(c,1);a.parent=null;return this},setScheduler:function(a){this.schedule=a},setDrawer:function(a){this.draw=a}};h.extend(d.Viewport,d._creators);h.extend(d.Scene,d._creators);delete d._creators;h.extend(p.Surface,{createViewport:function(){var a=this.createObject(d.Viewport,null,!0);a.setDimensions(this.getDimensions());return a}});return d.Object});