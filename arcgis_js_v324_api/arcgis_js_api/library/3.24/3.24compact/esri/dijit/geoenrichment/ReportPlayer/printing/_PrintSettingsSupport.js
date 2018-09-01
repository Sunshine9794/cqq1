// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/printing/_PrintSettingsSupport","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions esri/dijit/geoenrichment/ReportPlayer/PlayerCommands ./HeaderFooterSettingsBuilder".split(" "),function(p,m,n,e,q,f,r){return p(null,{_checkPrintSettings:function(a){function g(){return b.getAllReportContainers().some(function(a){return a.hasHiddenContent()})}function k(){return m.mixin({needAutoScale:g(),
addHeader:!1,addDataSource:!1,addFooter:!1,pageSettings:b.getCurrentReportContainer().documentOptions,commandId:a.commandId,allAreas:!0,reportTitle:void 0,reportSubtitle:void 0},a.printSettings)}function c(){e(b._player.dataProvider.getCommands(),function(c){c={needAutoScale:g(),showLayoutOptions:!0,currentPageSettings:b.getCurrentReportContainer().documentOptions,commandId:a.commandId,canAddHeaderAndFooter:!0,reportTitle:b._player.getReportTitle(),reportSubtitle:b._player.printConfig.subtitle,showAllAreasOptions:1<
b.getAllReportContainers().length,showDataDrillingOptions:a.commandId!==f.PRINT,exportCommands:a.commandId===f.PRINT?null:c.filter(function(a){return a.id!==f.PRINT})};var l=new b._player.printConfig.printDialogClass;l.onPrint=function(a){e(b._applyPrintSettings(m.mixin(k(),a)),d.resolve,d.reject)};l.onCancel=function(){d.resolve("cancel")};l.show(c)})}var b=this,d=new n;a.showDialog?c():e(b._applyPrintSettings(k()),d.resolve,d.reject);return d.promise},_applyPrintSettings:function(a){function g(){a.allAreas?
c.getAllReportContainers().forEach(function(a){a.resizeRowHeightToShowCellsContent()}):c.getCurrentReportContainer().resizeRowHeightToShowCellsContent();var b=new n;setTimeout(b.resolve,500);return b.promise}function k(){return e(r.createHeaderFooterParams(c._player,c._viewModel,a),function(a){c._headerFooterParams=a})}var c=this;this._commandId=a.commandId||this._commandId;this._allowDataDrilling=a.allowDataDrilling;this._exportAllAreas=a.allAreas;var b=a.commandId!==f.DYNAMIC_HTML&&a.needAutoScale,
d,h;b&&(d=this.getCurrentReportContainer().toJson());a.allAreas&&(h=this._player._showAllContainers());this._pageSettingsRollBackFunc=function(){h&&h.undo();h=null;if(b)return c._player.updateTemplateJson(d),c._player.refresh({rerenderContent:!0})};return e(b&&g(),function(){c._pageSettings=a.pageSettings;var b=q.getPageBox(a.pageSettings);c._pageFitParams={w:b.w,h:b.h,hAlign:"center",vAlign:"top"};return k()})}})});