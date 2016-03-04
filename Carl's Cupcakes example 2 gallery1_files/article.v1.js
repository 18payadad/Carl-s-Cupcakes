define("articlev1",["jquery","utility","modal"],function(a,c,d){var b=Backbone.View.extend({defaultOptions:{SitePageModuleID:null,HasAnimation:0,IsPublish:0},events:{"click img":"loadFancybox","click .page-blurb-overlay":"loadOverlay"},initialize:function(){var e=this;e.options=_.extend({},e.defaultOptions,e.options);e.setElement(".mod_article-"+e.options.SitePageModuleID);e.loadModule(e.options.SitePageModuleID);require(["headerv1"],function(f){f.SetPointMarkerClass(a("[id$=ArticleLink]").attr("id"))})},loadModule:function(f){var e=this;if(!c.isBlank(f)){if(a("[id$=lnkArticleLinkMore_"+f+"]").length>0){a("[id$=lnkArticleLinkMore_"+f+"]").bind("click",function(){a("[id$=BodyWrapper_"+f+"]").addClass("hide");a("[id$=BodyWrapperMore_"+f+"]").removeClass("hide")});a("[id$=lnkArticleLinkLess_"+f+"]").bind("click",function(){a("[id$=BodyWrapper_"+f+"]").removeClass("hide");a("[id$=BodyWrapperMore_"+f+"]").addClass("hide")})}}if(e.options.HasAnimation===1){e.isScrolledIntoView();a(window).scroll(function(){e.isScrolledIntoView()})}},isScrolledIntoView:function(){var e=this;window.setTimeout(function(){var h,k,j,g,f,i=null;h=e.$el;k=a(window).height();j=a(window).scrollTop()-50;g=j+1;f=g+k;i=a(h).offset().top;if(i>g&&i<f){a(h).addClass("animated")}},0)},loadOverlay:function(f){var g=this,e=a(f.currentTarget);g.loadOverlayModule(g.options.IsPublish,e.data("href"),0,parseInt(e.data("width")),0,parseInt(e.data("close")),g.options.SitePageModuleID)},loadOverlayModule:function(i,k,h,l,j,g,f){var e=this;a("body").attr("sitepagemoduleid",f);if(!c.isBlank(k)){e.OpenCounter=window.setTimeout(function(){e.Overlay=new d({modalType:"dialog",autoOpen:true,showOverlay:true,title:"",subtitle:"",description:"",width:(parseInt(a(window).width(),10)*parseInt(l,10)/100),className:"overlay-v1",buttons:[],content:{url:window.location.protocol+"//"+window.location.host+"/bot.ashx?url="+decodeURIComponent((i===0)?window.location.protocol+"//"+window.location.host+"/"+k:window.location.protocol+"//"+k),datatype:"html",onSuccess:function(n,m){m.el.html(n)},onError:function(n,m){e.Overlay.doClose()}},afterContentLoad:function(){if(g>0){e.CloseCounter=window.setTimeout(function(){e.Overlay.doClose()},(parseInt(g,10)*1000))}}})},(parseInt(j,10)*1000))}},loadFancybox:function(e){var f=this;require(["fancybox"],function(h){var g=[],i=0;a.fancybox.open(g,{index:i,padding:15,transitionIn:"elastic",transitionOut:"elastic",easingIn:"easeOutBack",easingOut:"easeInBack",type:"image",changeFade:0,mouseWheel:true,helpers:{overlay:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:true},title:{type:"float"}}})})}});return b});