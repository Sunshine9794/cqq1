// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/arcgis/portal/PortalItemContext",["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","../../../../kernel"],function(b,c,d,e,f){b=b([e],{allowEditMetadata:!1,allowPullItem:!0,allowPushToItem:!1,autoPullItem:!0,originalXml:null,portal:null,isForPortalItemPage:!1,portalItem:null,restBaseUrl:null,token:null,postCreate:function(){this.inherited(arguments)},getAllowEditMetadata:function(){return this.allowEditMetadata},getAllowDeleteMetadata:function(){return this.getAllowEditMetadata()},
getAllowPullItem:function(){return this.getItem()?this.allowPullItem:!1},getAllowPushToItem:function(){return this.allowPushToItem},getAutoPullItem:function(){return this.autoPullItem},getItem:function(){return this.portalItem},getItemFolderId:function(){var a=this.getItem();return a&&"undefined"!==typeof a.folderId?a.folderId:null},getItemId:function(){var a=this.getItem();return a&&"undefined"!==typeof a.id?a.id:null},getItemOwner:function(){var a=this.getItem();return a&&"undefined"!==typeof a.owner?
a.owner:null},getOriginalXml:function(){return this.originalXml},getPortal:function(){return this.portal},getRestBaseUrl:function(){return this.restBaseUrl},getToken:function(){return this.token}});d("extend-esri")&&c.setObject("dijit.metadata.arcgis.portal.PortalItemContext",b,f);return b});