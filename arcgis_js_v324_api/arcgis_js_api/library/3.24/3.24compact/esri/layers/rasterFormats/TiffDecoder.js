// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterFormats/TiffDecoder",["./Jpg","./Zlib"],function(Pa,ja){var Qa=function(){var a=new ArrayBuffer(4),g=new Uint8Array(a),a=new Uint32Array(a);g[0]=1;g[1]=2;g[2]=3;g[3]=4;return 67305985===a[0]},fb=function(){var a=[];a[254]="NEWSUBFILETYPE";a[255]="SUBFILETYPE";a[256]="IMAGEWIDTH";a[257]="IMAGELENGTH";a[258]="BITSPERSAMPLE";a[259]="COMPRESSION";a[262]="PHOTOMETRICINTERPRETATION";a[263]="THRESHHOLDING";a[264]="CELLWIDTH";a[265]="CELLLENGTH";a[266]="FILLORDER";a[269]="DOCUMENTNAME";
a[270]="IMAGEDESCRIPTION";a[271]="MAKE";a[272]="MODEL";a[273]="STRIPOFFSETS";a[274]="ORIENTATION";a[277]="SAMPLESPERPIXEL";a[278]="ROWSPERSTRIP";a[279]="STRIPBYTECOUNTS";a[280]="MINSAMPLEVALUE";a[281]="MAXSAMPLEVALUE";a[282]="XRESOLUTION";a[283]="YRESOLUTION";a[284]="PLANARCONFIGURATION";a[285]="PAGENAME";a[286]="XPOSITION";a[287]="YPOSITION";a[288]="FREEOFFSETS";a[289]="FREEBYTECOUNTS";a[290]="GRAYRESPONSEUNIT";a[291]="GRAYRESPONSECURVE";a[292]="T4OPTIONS";a[293]="T6OPTIONS";a[296]="RESOLUTIONUNIT";
a[297]="PAGENUMBER";a[300]="COLORRESPONSEUNIT";a[301]="TRANSFERFUNCTION";a[305]="SOFTWARE";a[306]="DATETIME";a[315]="ARTIST";a[316]="HOSTCOMPUTER";a[317]="PREDICTOR";a[318]="WHITEPOINT";a[319]="PRIMARYCHROMATICITIES";a[320]="COLORMAP";a[321]="HALFTONEHINTS";a[322]="TILEWIDTH";a[323]="TILELENGTH";a[324]="TILEOFFSETS";a[325]="TILEBYTECOUNTS";a[326]="BADFAXLINES";a[327]="CLEANFAXDATA";a[328]="CONSECUTIVEBADFAXLINES";a[330]="SUBIFD";a[332]="INKSET";a[333]="INKNAMES";a[334]="NUMBEROFINKS";a[336]="DOTRANGE";
a[337]="TARGETPRINTER";a[338]="EXTRASAMPLES";a[339]="SAMPLEFORMAT";a[340]="SMINSAMPLEVALUE";a[341]="SMAXSAMPLEVALUE";a[342]="TRANSFERRANGE";a[347]="JPEGTABLES";a[512]="JPEGPROC";a[513]="JPEGIFOFFSET";a[514]="JPEGIFBYTECOUNT";a[515]="JPEGRESTARTINTERVAL";a[517]="JPEGLOSSLESSPREDICTORS";a[518]="JPEGPOINTTRANSFORM";a[519]="JPEGQTABLES";a[520]="JPEGDCTABLES";a[521]="JPEGACTABLES";a[529]="YCBCRCOEFFICIENTS";a[530]="YCBCRSUBSAMPLING";a[531]="YCBCRPOSITIONING";a[532]="REFERENCEBLACKWHITE";a[33550]="GEOPIXELSCALE";
a[33922]="GEOTIEPOINTS";a[33432]="COPYRIGHT";a[42112]="GDAL_METADATA";a[42113]="GDAL_NODATA";a[50844]="RPCCOEFFICIENT";a[34735]="GEOKEYDIRECTORY";a[34736]="GEODOUBLEPARAMS";a[34737]="GEOASCIIPARAMS";return a}(),Ra=[0,1,1,2,4,8,1,1,2,4,8,4,8],Sa=function(a,g){var t="UNKNOWN";3===a?t="F32":1===a?8>=g?t="U8":16>=g?t="U16":32>=g&&(t="U32"):2===a&&(8>=g?t="S8":16>=g?t="S16":32>=g&&(t="S32"));return t};return{decode:function(a){var g,t=new DataView(a,0,8),Ta=t.getUint16(0,!1),W;if(18761===Ta)W=!0;else if(19789===
Ta)W=!1;else throw"unexpected endianess byte";if(42!==t.getUint16(2,W))throw"unexpected tiff identifier";var gb=t.getUint32(4,W);g=W;var X,ya,ka,za,Y,la,Z,Ua,Va,Aa,aa;X=gb;for(var Ba=[];X;){ya=(new DataView(a,X,2)).getUint16(0,g);ka=X+2;X=(new DataView(a,ka+12*ya,4)).getUint32(0,g);Aa={};for(za=0;za<ya;za++)if(Y=new DataView(a,ka,12),la=Y.getUint16(0,g),Z=Y.getUint16(2,g),Ua=Y.getUint32(4,g),Va=Y.getUint32(8,g),ka+=12,!(7===Z||12<Z)){var hb=aa={fieldTag:la,fieldType:Z,fieldValueCount:Ua,fieldValueOffset:Va},
r=a,x=g,R=[],ma=aa.fieldType,na=aa.fieldValueCount,S=aa.fieldValueOffset,n=S,Ca=Ra[ma],Wa=8*Ca,ib=na*Ca,Xa=na*Ra[ma]*8,q=void 0,E=void 0;if(32>=Xa)if(x||(S>>>=32-Xa),1===na)R=[S];else for(E=0;E<na;E++)R.push(S<<Wa*E>>>32-Wa);else for(n=S;n<S+ib;n+=Ca){switch(ma){case 1:q=(new DataView(r,n,1)).getUint8(0);break;case 2:q=(new DataView(r,n,1)).getUint8(0);break;case 3:q=(new DataView(r,n,2)).getUint16(0,x);break;case 4:q=(new DataView(r,n,4)).getUint32(0,x);break;case 5:q=(new DataView(r,n,4)).getUint32(0,
x)/(new DataView(r,n+4,4)).getUint32(0,x);break;case 6:q=(new DataView(r,n,1)).getInt8(0);break;case 8:q=(new DataView(r,n,2)).getInt16(0,x);break;case 9:q=(new DataView(r,n,4)).getInt32(0,x);break;case 10:q=(new DataView(r,n,4)).getInt32(0,x)/(new DataView(r,n+4,4)).getInt32(0,x);break;case 11:q=(new DataView(r,n,4)).getFloat32(0,x);break;case 12:q=(new DataView(r,n,8)).getFloat64(0,x);break;case 7:q=null;break;default:q=null}R.push(q)}if(2===ma)for(var Da="",Ea=R,R=[],E=0;E<Ea.length;E++)0===Ea[E]?
(R.push(Da),Da=""):Da+=String.fromCharCode(Ea[E]);hb.fieldValues=R;var jb=Aa,Fa=fb[la];void 0===Fa&&(Fa="unknown"+la);jb[Fa]={type:Z,values:aa.fieldValues}}Ba.push(Aa)}if(0===Ba.length)throw"no valid image file directory";var z,h,b=Ba[0],T=void 0===b.GDAL_NODATA||null===b.GDAL_NODATA?null:parseFloat(b.GDAL_NODATA.values[0]);if(b.TILEOFFSETS){var Ya,A,F,kb=Qa()===g,I=b.TILEOFFSETS?b.TILEOFFSETS.values:void 0;if(void 0===I)h=void 0;else{var J=b.TILEBYTECOUNTS.values,K=b.TILEWIDTH.values[0],U=b.TILELENGTH.values[0],
V=b.IMAGEWIDTH.values[0],Ga=b.IMAGELENGTH.values[0],G=V*Ga,u=b.BITSPERSAMPLE.values[0],k=b.SAMPLESPERPIXEL.values[0],ba=b.SAMPLEFORMAT?b.SAMPLEFORMAT.values[0]:1,oa=Sa(ba,u);if(1!==(b.PLANARCONFIGURATION?b.PLANARCONFIGURATION.values[0]:1))throw console.log("can only handle PLANARCONFIGURATION\x3d1"),"can only handle PLANARCONFIGURATION\x3d1";var y=b.COMPRESSION?b.COMPRESSION.values[0]:1;if(1!==y&&6!==y&&8!==y&&32946!==y)throw console.log("this compression is not supported at this moment"),"this compression is not supported at this moment";
if(3<ba)h=void 0;else{3===ba?(A=new Float32Array(G*k),F=Float32Array):1===ba?8>=u?(A=new Uint8Array(G*k),F=Uint8Array):16>=u?(A=new Uint16Array(G*k),F=Uint16Array):32>=u&&(A=new Uint32Array(G*k),F=Uint32Array):2===ba&&(8>=u?(A=new Int8Array(G*k),F=Int8Array):16>=u?(A=new Int16Array(G*k),F=Int16Array):32>=u&&(A=new Int32Array(G*k),F=Int32Array));var d,ca,l,da,Ha,Ia,Ja,Ka,pa,qa,Za,$a,B,e,L,La,ra,Ma,ab=Math.ceil(V/K);if(0===u%8)for(d=0;d<I.length;d++){Ia=Math.floor(d/ab)*U;Ja=d%ab*K;Ka=(Ia*V+Ja)*k;if("U8"===
oa||"S8"===oa||kb)if(8===y||32946===y)e=new Uint8Array(a,I[d],J[d]),ra=new ja(e),Ma=ra.getBytes(),B=new ArrayBuffer(Ma.length),e=new Uint8Array(B),e.set(Ma),e.length!==K*U*k*u/8&&console.log("tile byte counts is different than expected");else if(6===y){e=new Uint8Array(a,I[d],J[d]);var sa=new Pa;sa.parse(e);var bb=sa.getData(sa.width,sa.height);B=new ArrayBuffer(bb.length);e=new Uint8Array(B);e.set(bb)}else 1===y&&(J[d]!==K*U*k*u/8&&console.log("tile byte counts is different than expected"),B=a.slice(I[d],
I[d]+J[d]));else switch(8===y||32946===y?(e=new Uint8Array(a,I[d],J[d]),ra=new ja(e),e=ra.getBytes(),B=new ArrayBuffer(e.length),L=new Uint8Array(B),e.length!==K*U*k*u/8&&console.log("tile byte counts is different than expected")):1===y&&(J[d]!==K*U*k*u/8&&console.log("tile byte counts is different than expected"),B=new ArrayBuffer(J[d]),e=new Uint8Array(a,I[d],J[d]),L=new Uint8Array(B)),oa){case "U16":case "S16":for(l=0;l<e.length;l+=2)L[l]=e[l+1],L[l+1]=e[l];break;case "U32":case "S32":case "F32":for(l=
0;l<e.length;l+=4)L[l]=e[l+3],L[l+1]=e[l+2],L[l+2]=e[l+1],L[l+3]=e[l]}Ya=new F(B);qa=0;pa=Ka;$a=Math.min(K,V-Ja);Za=Math.min(U,Ga-Ia);for(da=0;da<Za;da++)for(pa=Ka+da*V*k,qa=da*K*k,Ha=0;Ha<$a*k;Ha++,pa++,qa++)A[pa]=Ya[qa]}var ta={width:V,height:Ga,pixelType:oa};if(1===k)ta.pixels=[A];else for(ta.pixels=[],d=0;d<k;d++){La=new F(G);for(ca=0;ca<G;ca++)La[ca]=A[ca*k+d];ta.pixels.push(La)}h=ta}}}else if(b.STRIPOFFSETS){var cb,C,H,lb=Qa()===g,M=b.STRIPOFFSETS?b.STRIPOFFSETS.values:void 0;if(void 0===M)h=
void 0;else{var N=b.STRIPBYTECOUNTS.values,ea=b.ROWSPERSTRIP.values,O=b.IMAGEWIDTH.values[0],fa=b.IMAGELENGTH.values[0],P=O*fa,v=b.BITSPERSAMPLE.values[0],p=b.SAMPLESPERPIXEL.values[0],ga=b.SAMPLEFORMAT?b.SAMPLEFORMAT.values[0]:1,ua=Sa(ga,v);if(1!==(b.PLANARCONFIGURATION?b.PLANARCONFIGURATION.values[0]:1))throw console.log("can only handle PLANARCONFIGURATION\x3d1"),"can only handle PLANARCONFIGURATION\x3d1";var w=b.COMPRESSION?b.COMPRESSION.values[0]:1;if(1!==w&&6!==w&&8!==w&&32946!==w)throw console.log("compressed tiff is not supported at this moment"),
"compressed tiff is not supported at this moment";if(3<ga)h=void 0;else{3===ga?(C=new Float32Array(P*p),H=Float32Array):1===ga?8>=v?(C=new Uint8Array(P*p),H=Uint8Array):16>=v?(C=new Uint16Array(P*p),H=Uint16Array):32>=v&&(C=new Uint32Array(P*p),H=Uint32Array):2===ga&&(8>=v?(C=new Int8Array(P*p),H=Int8Array):16>=v?(C=new Int16Array(P*p),H=Int16Array):32>=v&&(C=new Int32Array(O*fa*p),H=Int32Array));var c,ha,m,db,D,f,Q,Na,va,Oa,ia=ea;if(0===v%8)for(c=0;c<M.length;c++){db=c*ea*O*p;ia=(c+1)*ea>fa?fa-c*
ea:ea;if("U8"===ua||"S8"===ua||lb)if(8===w||32946===w)f=new Uint8Array(a,M[c],N[c]),va=new ja(f),Oa=va.getBytes(),D=new ArrayBuffer(Oa.length),f=new Uint8Array(D),f.set(Oa),f.length!==ia*O*p*v/8&&console.log("strip byte counts is different than expected");else if(6===w){f=new Uint8Array(a,M[c],N[c]);var wa=new Pa;wa.parse(f);var eb=wa.getData(wa.width,wa.height);D=new ArrayBuffer(eb.length);f=new Uint8Array(D);f.set(eb)}else 1===w&&(N[c]!==ia*O*p*v/8&&console.log("strip byte counts is different than expected"),
D=a.slice(M[c],M[c]+N[c]));else switch(6===w||8===w||32946===w?(f=new Uint8Array(a,M[c],N[c]),va=new ja(f),f=va.getBytes(),D=new ArrayBuffer(f.length),Q=new Uint8Array(D),f.length!==ia*O*p*v/8&&console.log("strip byte counts is different than expected")):1===w&&(N[c]!==ia*O*p*v/8&&console.log("strip byte counts is different than expected"),D=new ArrayBuffer(N[c]),f=new Uint8Array(a,M[c],N[c]),Q=new Uint8Array(D)),ua){case "U16":case "S16":for(m=0;m<f.length;m+=2)Q[m]=f[m+1],Q[m+1]=f[m];break;case "U32":case "S32":case "F32":for(m=
0;m<f.length;m+=4)Q[m]=f[m+3],Q[m+1]=f[m+2],Q[m+2]=f[m+1],Q[m+3]=f[m]}cb=new H(D);C.set(cb,db)}var xa={width:O,height:fa,pixelType:ua};if(1===p)xa.pixels=[C];else for(xa.pixels=[],c=0;c<p;c++){Na=new H(P);for(ha=0;ha<P;ha++)Na[ha]=C[ha*p+c];xa.pixels.push(Na)}h=xa}}}if(null!==T){h.maskData=new Uint8Array(h.width*h.height);if(1E24<Math.abs(T))for(z=0;z<h.width*h.height;z++)h.maskData[z]=1E-6>Math.abs((h.pixels[0][z]-T)/T)?0:1;else for(z=0;z<h.width*h.height;z++)h.maskData[z]=h.pixels[0][z]===T?0:1;
h.noDataValue=T}return h}}});