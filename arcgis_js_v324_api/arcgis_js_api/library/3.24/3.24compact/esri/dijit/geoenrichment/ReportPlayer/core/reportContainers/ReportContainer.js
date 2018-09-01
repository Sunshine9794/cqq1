// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ReportContainer.html":'\x3cdiv class\x3d"esriGEReportPlayer_reportContainer esriGENonSelectable"\x3e\r\n    \x3cdiv\x3e\r\n        \x3cdiv class\x3d"horizontalRulerContainer" data-dojo-attach-point\x3d"horizontalRulerContainer"\x3e\r\n            \x3cdiv class\x3d"horizontalRuler" data-dojo-attach-point\x3d"horizontalRuler"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"mainContainer" class\x3d"reportContainer_mainContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"stackContainer" class\x3d"reportContainer_stackContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainer","dojo/_base/declare dojo/_base/lang dojo/on dojo/dom-construct dojo/dom-class dojo/dom-geometry dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin ../grid/ValueField ./containerUtils/QueryUtil ./containerUtils/SerializationManager ../supportClasses/DocumentOptions esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes dojo/text!../templates/ReportContainer.html".split(" "),
function(r,n,z,e,h,t,d,u,v,w,l,x,p,k,q,g,y){return r([u,v],{templateString:y,viewModel:null,theme:null,parentWidget:null,documentOptions:null,_sampleWatermarkDiv:null,queryUtil:l,serializationManager:null,postCreate:function(){this.inherited(arguments);this.serializationManager=(new this._getSerializationManagerClass)(this);this.updateLayout();this.setViewMode(g.PREVIEW_VALUES)},_getSerializationManagerClass:function(){return x},_sectionWidth:0,setDocumentOptions:function(a){this.documentOptions&&
n.mixin(this.documentOptions,a);this.updateLayout()},updateLayout:function(){if(this.documentOptions){this._sectionWidth=p.getPageBox(this.documentOptions).contentW;this._updateContainerSize();d.set(this.stackContainer,{paddingLeft:(this.documentOptions.left||0)+"px",paddingRight:(this.documentOptions.right||0)+"px",paddingTop:(this.documentOptions.top||0)+"px",paddingBottom:(this.documentOptions.bottom||0)+"px"});var a=this;this.getReportElements("setWidth").forEach(function(b){a.getElementSection(b).setWidth(a._getSectionWidth(),
{resizeContentToFit:!0,preserveRightOffset:!0});a.updateReportElement(b)})}},resizeReportElementContentToFitPageWidth:function(a){var b=a&&this.getElementSection(a);b&&b.setWidth(this._getSectionWidth(),{resizeContentToFit:!0,forceResize:!0});this.updateReportElement(a)},getCurrentPageDim:function(){return p.getPageBox(this.documentOptions)},_updateContainerSize:function(){d.set(this.stackContainer,"width",this._sectionWidth+(this._viewMode===g.EDIT?145:0)+"px");d.set(this.mainContainer,"height",
d.get(this.domNode,"height")+(this._viewMode===g.EDIT?-17:0)+"px")},_getSectionWidth:function(){return this._sectionWidth},resize:function(a,b){void 0!==a&&d.set(this.domNode,{width:a+"px",height:b+"px"});this._updateContainerSize()},getCanvasOffsets:function(){var a=d.get(this.domNode,"width"),b=d.get(this.stackContainer,"width")+t.getPadBorderExtents(this.stackContainer).w;return{l:Math.max(15,this.stackContainer.offsetLeft),r:Math.max(10,a-(this.stackContainer.offsetLeft+b))}},getFullWidth:function(){return Math.max(this.stackContainer.scrollWidth,
d.get(this.stackContainer,"width"))},getFullHeight:function(){return Math.max(this.stackContainer.scrollHeight,d.get(this.stackContainer,"height"))},addSection:function(a,b,c,m,d){var e=this._createSectionCell(a);this._createSection(a,b,e);a=this._createReportElement(a,e,c,m,b&&b.json,d);this.updateReportElement(a);return a},_createSection:function(a,b,c){b=b||{};b["class"]="reportContainer_Section";b.initialWidth=this._getSectionWidth();b.viewModel=this.viewModel;b.theme=this.theme;b.parentWidget=
this;b.viewPortContainer=this.getScrollableContainer();"empty"===a?a=this.viewModel.layoutBuilder.createElement("emptySection",b,c.getContentContainerNode()):(a=this.viewModel.layoutBuilder.createElement("section",b,c.getContentContainerNode()),(b=this.documentOptions.backgroundColor||this.viewModel.getDocumentDefaultStyles(this.theme).backgroundColor)&&d.set(a.domNode,"backgroundColor",b));c.setContent(a);return a},_getSectionCellClass:function(){return w},_getSectionCellParams:function(){return null},
_createSectionCell:function(a){return(new this._getSectionCellClass)(n.mixin({sectionId:a,"class":"reportContainerCell"},this._getSectionCellParams()))},_createReportElement:function(a,b,c,m,d,g){var f=e.create("div",{"class":"reportElement"});f.reportElementContent=e.create("div",{"class":"reportElementContent"},f);var h=this._getCellSection(b);a=f._fcPar={isReportElement:!0,sectionId:a,isEmpty:"empty"===a,sectionJson:this.isSourceContainer&&d,cell:b,section:h,coverElement:null,controls:[],dragHandleElement:null,
sectionToolbar:null,sectionLabel:null};e.place(f,c?c:this.stackContainer,c?m:void 0);this._createAdditionalElementsForReportElement(f,b,h,a);e.place(b.domNode,f.reportElementContent);this.isEmptyElement(c)&&!1!==g&&(this._removeSection(c),this._tryProvidingSmallEmpty(f));this.viewModel.dynamicReportInfo||(a.coverElement=e.create("div",{"class":"reportElement_coverElement"},f.reportElementContent),k.hide(a.coverElement));return f},_createAdditionalElementsForReportElement:function(a,b,c,d){},updateReportElement:function(a){var b=
this.getElementParams(a);this._sectionToSectionCell(b.cell);this._sectionCellToSection(b.cell);this._updateChildrenViewMode(a)},_sectionCellToSection:function(a){this._getCellSection(a).setResizedHeight(a.getHeight())},_sectionToSectionCell:function(a){var b=this._getCellSection(a);a.setWidth(b.getWidth());a.setMinHeight(b.hasTablesThatFitHeight()?20:b.getHeight());a.setHeight(b.getResizedHeight())},_tryProvidingSmallEmpty:function(a){var b=this;this.getReportElements().filter(function(a){return b.isEmptyElement(a)}).length||
this.addSection(q.EMPTY,{isSmallSize:!0},a,"after")},getElementHeight:function(a){return this.getElementCell(a).getHeight()},setElementHeight:function(a,b){var c=this.getElementCell(a);c.setHeight(b);this._sectionCellToSection(c);this.updateReportElement(a)},getElementParams:function(a,b){var c=a&&a._fcPar;return b?c&&c[b]:c},getElementSection:function(a){return this.getElementParams(a,"section")},getElementCell:function(a){return this.getElementParams(a,"cell")},isEmptyElement:function(a){return!!this.getElementParams(a,
"isEmpty")},isReportElement:function(a){return this.getElementParams(a)},_getCellSection:function(a){return a.content},scrollToElement:function(a){if(a)return this._animateScrolling(a.offsetTop-this.domNode.clientHeight/5)},_animateScrolling:function(a){this.getScrollableContainer().scrollTop=a},getScrollableContainer:function(){return this.mainContainer},getReportElements:function(a){return l.getReportElements(this,a)},clear:function(a){var b=this;this.getReportElements().forEach(function(c){b._removeSection(c,
!0===a)})},_removeSection:function(a,b){var c=this.getElementSection(a),d=this.getElementCell(a);a&&d&&(c&&c.destroy(),d.destroy(),e.destroy(a),0===this.getReportElements().length&&!1!==b&&this.addSection(q.EMPTY))},removeSection:function(a){this._removeSection(a)},removeSectionAtIndex:function(a){this._removeSection(this.getReportElements()[a])},moveSection:function(a,b,c){if((a=this.getReportElements()[a])&&a.parentNode){a.parentNode.removeChild(a);var d=this.getReportElements();d.length===b?e.place(a,
d[d.length-1],"after"):e.place(a,this.getReportElements()[b],c)}},setHeight:function(a){d.set(this.mainContainer,"height",a+"px")},_viewMode:null,getViewMode:function(){return this._viewMode},setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._memoInViewElementsInfo(),a===g.EDIT?(h.add(this.domNode,"reportContainerEditMode"),h.remove(this.domNode,"reportContainerPreviewMode")):(h.remove(this.domNode,"reportContainerEditMode"),h.add(this.domNode,"reportContainerPreviewMode")),a!==g.PREVIEW_VALUES||
this.viewModel.dynamicReportInfo?k.hide(this._sampleWatermarkDiv):(this._sampleWatermarkDiv||(this._sampleWatermarkDiv=e.create("div",{"class":"sampleValuesWatermark"},this.stackContainer,"first")),k.show(this._sampleWatermarkDiv)),this._updateContainerSize(),this._updateChildrenViewMode(),this._adjustScrollForNewViewMode())},_updateChildrenViewMode:function(a){var b=this;(a?[a]:this.getReportElements()).forEach(function(a){var c=b.getElementSection(a),d=b.getElementCell(a);c&&(c.setViewMode&&c.setViewMode(b._viewMode),
c.hasLocatorTables&&c.hasLocatorTables()&&b._sectionToSectionCell(d));b._setChildCovered(a,b._viewMode!==g.EDIT)})},_setChildCovered:function(a,b){var c=this.getElementParams(a,"coverElement");c&&(k[b?"show":"hide"](c),b?(a[this.draggableElementProperty]=c,d.set(c,{position:"absolute",left:"0px",top:"0px",width:d.get(a,"width")+"px",height:d.get(a,"height")+"px"})):a[this.draggableElementProperty]=this.getElementParams(a,"dragHandleElement"))},_inViewElementsInfo:null,_memoInViewElementsInfo:function(){this._inViewElementsInfo=
null;if(!(1E3>this.mainContainer.scrollTop)){var a;this.getReportElements().some(function(b){if(b.offsetTop>this.mainContainer.scrollTop)return a=b,!0},this);a&&(this._inViewElementsInfo={scrollTop:this.mainContainer.scrollTop,offsetTop:a.offsetTop,elementInView:a})}},_adjustScrollForNewViewMode:function(){this._inViewElementsInfo&&(this.mainContainer.scrollTop+=this._inViewElementsInfo.elementInView.offsetTop-this.mainContainer.scrollTop-(this._inViewElementsInfo.offsetTop-this._inViewElementsInfo.scrollTop))},
collectFieldInfos:function(a){return l.collectFieldInfos(this,a)},notifyShown:function(){this.serializationManager.notifyShown()},fromJson:function(a){return this.serializationManager.fromJson(a)},toJson:function(a){return this.serializationManager.toJson(a)},onPendingDataApplied:function(){},onFieldInfoSelected:function(a){},destroy:function(){this.clear();this.inherited(arguments)}})});