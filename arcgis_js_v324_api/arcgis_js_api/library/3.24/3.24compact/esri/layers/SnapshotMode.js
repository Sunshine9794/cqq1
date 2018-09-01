// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/SnapshotMode","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../SpatialReference ../srUtils ../tasks/query ./RenderMode ./support/ParallelSnapshot".split(" "),function(d,e,l,m,t,n,p,q,r){d=d([q],{declaredClass:"esri.layers._SnapshotMode",maxFeatures:5E4,_isSuspendedAtStartup:!1,_pendingRefresh:!1,constructor:function(a){this.featureLayer=a;this._featureMap={};this._hasUpdateError=this._hasPartialFeatures=!1;this._drawFeatures=e.hitch(this,this._drawFeatures);this._queryErrorHandler=
e.hitch(this,this._queryErrorHandler);this._handleSuccess=e.hitch(this,this._handleSuccess);this._handleError=e.hitch(this,this._handleError);this._handleProgress=e.hitch(this,this._handleProgress)},startup:function(){if(!this._started||this._isSuspendedAtStartup){this.inherited(arguments);var a=this.featureLayer,b=a.advancedQueryCapabilities,c=a.reHostedFS.test(a.url);this.pagination=a.queryPagination&&null!=a.maxRecordCount;this._tileQueriesAllowed=c&&b&&b.supportsQueryWithResultType&&a.isFeatureReductionApplied();
c&&this.pagination&&(this._parallelSnapshot=new r({layer:a,mode:this,queryTask:a._task}));this._isSuspendedAtStartup=a.suspended;this._startup()}},propertyChangeHandler:function(a){this._init&&(a?this.featureLayer._collection?console.log("FeatureLayer: layer created by value (from a feature collection) does not support definition expressions and time definitions. Layer id \x3d "+this.featureLayer.id):this._fetchAll():this._applyTimeFilter())},destroy:function(){this._isSuspendedAtStartup=this._pendingRefresh=
!1;this._cancelPendingRequest(this._pendingRequest);this._parallelSnapshot&&this._parallelSnapshot.destroy();this.inherited(arguments)},drawFeature:function(a){var b=a.attributes[this.featureLayer.objectIdField];this._addFeatureIIf(b,a);this._incRefCount(b)},resume:function(){this._isSuspendedAtStartup||this._pendingRefresh?(this._isSuspendedAtStartup=!1,this._startup()):this.propertyChangeHandler(0)},refresh:function(){var a=this.featureLayer;a._collection?(a._fireUpdateStart(),a._refresh(!0),a._fireUpdateEnd()):
this._fetchAll()},hasAllFeatures:function(){return!this._hasPartialFeatures},hasUpdateError:function(){return this._hasUpdateError},_startup:function(){this.featureLayer._collection?this._applyTimeFilter():this._fetchAll()},_fetchAll:function(){var a=this.featureLayer;a._collection||a.suspended||!a.isQueryable()?this._pendingRefresh=a.suspended:(this._pendingRefresh=!1,a._fireUpdateStart(),this._clearIIf(),this._hasUpdateError=this._hasPartialFeatures=!1,this._parallelSnapshot?this._parallelSnapshot.fetch(this._createQuery()).then(this._handleSuccess,
this._handleError,this._handleProgress):this._sendRequest())},_handleSuccess:function(a){this._hasPartialFeatures=a.hasPartialFeatures;this._hasUpdateError=a.hasUpdateError;this.featureLayer._fireUpdateEnd(null)},_handleError:function(a){this._queryErrorHandler(a)},_handleProgress:function(a){a.isError?this.featureLayer._errorHandler(a.error):this._addFeatures(a.features)},_sendRequest:function(a){var b=this.featureLayer,c=this._createQuery();this.pagination&&(this._start=c.start=null==a?0:a,c.num=
b.maxRecordCount);this._pendingRequest&&this._cancelPendingRequest(this._pendingRequest);this._pendingRequest=b._task.execute(c,this._drawFeatures,this._queryErrorHandler)},_drawFeatures:function(a){this._pendingRequest=null;var b=this.featureLayer,c=a.exceededTransferLimit,g=c&&!b._collection;a=this._checkMaxLimit(a.features);var f=a.maxLimitReached;this._addFeatures(a.features);this.pagination&&g&&!f||(this._hasPartialFeatures=!!c,b._fireUpdateEnd(null,c?{queryLimitExceeded:!0}:null));g&&(this.pagination&&
!f&&this._sendRequest(this._start+b.maxRecordCount),b.onQueryLimitExceeded())},_queryErrorHandler:function(a){this._pendingRequest=null;this._hasUpdateError=this._hasPartialFeatures=!0;var b=this.featureLayer;b._errorHandler(a);b._fireUpdateEnd(a)},_checkMaxLimit:function(a){var b=a?a.length:0,c=this.featureLayer.graphics.length+b,g=c>=this.maxFeatures;if(g){var f=c-this.maxFeatures;f&&a.splice(b-f,f)}return{maxLimitReached:g,featuresDiscarded:c>this.maxFeatures,features:a}},_createQuery:function(){var a=
this.featureLayer,b=new p;b.outFields=a.getOutFields();b.where=a.getDefinitionExpression()||"1\x3d1";b.returnGeometry=!0;b.outSpatialReference=n.createSpatialReference(this.map.spatialReference.toJson());b.timeExtent=a.getTimeDefinition();b.maxAllowableOffset=a._maxOffset;b.quantizationParameters=a._quantizationParameters;b.orderByFields=a.supportsAdvancedQueries?a.getOrderByFields():null;b.multipatchOption=a.multipatchOption;a._ts&&(b._ts=(new Date).getTime());this._tileQueriesAllowed&&(b.resultType=
"tile");return b},_addFeatures:function(a){var b=this.featureLayer,c=b.objectIdField,g=a.length,f=b._selectedFeatures,e=b.mode===b.constructor.MODE_AUTO,d,h,k;b._fireUpdateStart();b._sortFeatures(a);for(b=0;b<g;b++)h=a[b],k=h.attributes[c],d=this._addFeatureIIf(k,h),this._incRefCount(k),e&&d!==h&&f[k]&&(d.setGeometry(h.geometry),d.setAttributes(h.attributes));this._applyTimeFilter(!0)}});l("extend-esri")&&e.setObject("layers._SnapshotMode",d,m);return d});