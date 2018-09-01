// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/_Wizard",["../../declare","dojo/_base/lang","dijit/_WidgetBase","dojo/dom-construct","./AnimationHelper"],function(e,f,g,d,h){return e("esri.dijit.geoenrichment._Wizard",g,{currentPage:null,currentPageId:null,_anim:null,pages:null,stacking:"stretch",constructor:function(){this.pages={};this._anim=new h},buildRendering:function(){this.domNode=d.create("div",{"class":"_Wizard_Root"})},loadPage:function(a){var b=this.pages[a],c=this.currentPage;b!==c&&(this._anim.finish(),
c&&this._animPage("Anim_FadeOut").then(f.hitch(this.domNode,"removeChild",c.domNode)),this.currentPage=b,this.currentPageId=a,d.place(this.currentPage.domNode,this.domNode,"first"),c&&this._animPage("Anim_FadeIn"),b._started||(b.set("stacking",this.stacking),b.startup()),b.resize())},_animPage:function(a){return this._anim.start([{node:this.currentPage.domNode,classes:[a,"Wizard_FadeAnim"]}])},resize:function(){this.currentPage&&this.currentPage.resize()},destroy:function(){for(var a in this.pages)this.hasOwnProperty(a)&&
this.pages[a].destroyRecursive();this.pages={};this.inherited(arguments)}})});