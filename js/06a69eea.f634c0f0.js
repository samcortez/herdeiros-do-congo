(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["06a69eea"],{"04f5":function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row youtube-video-container"},[t("q-video",{staticStyle:{"margin-top":"20px","margin-bottom":"20px",height:"300px",width:"100%"},attrs:{src:a.video}})],1)},o=[];s._withStripped=!0;var i=t("96a1"),n={name:"youtube-video",props:["video"],data:function(){return{}},methods:{openURL:i["a"]}},r=n,l=(t("d477"),t("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);c.options.__file="youtube-video.vue";e["a"]=c.exports},"0f0c":function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("video",{staticClass:"full-video",attrs:{slot:"media",autoplay:"",autostart:"",loop:"",muted:""},domProps:{muted:!0},slot:"media"},[t("source",{attrs:{type:"video/mp4",src:a.video}})])},o=[];s._withStripped=!0;var i=t("96a1"),n={name:"video-autoplay",props:["video"],data:function(){return{}},methods:{openURL:i["a"]}},r=n,l=(t("d2ee"),t("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);c.options.__file="video-autoplay.vue";e["a"]=c.exports},"1bc39":function(a,e,t){},4859:function(a,e,t){"use strict";var s=t("a766"),o=t.n(s);o.a},5383:function(a,e,t){"use strict";var s=t("90be"),o=t.n(s);o.a},"5e43":function(a,e,t){},"65df":function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-carousel",{attrs:{infinite:"",autoplay:"",arrows:"",color:"white"}},a._l(a.items,function(a){return t("q-carousel-slide",{key:a,attrs:{"img-src":"statics/"+a,"quick-nav":!1}})}))},o=[];s._withStripped=!0;var i=t("96a1"),n={name:"slideshow",props:["items"],data:function(){return{}},methods:{openURL:i["a"]}},r=n,l=(t("f09f"),t("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);c.options.__file="slideshow.vue";e["a"]=c.exports},"7ac3":function(a,e,t){},"90be":function(a,e,t){},"956a":function(a,e,t){},"96a1":function(a,e,t){"use strict";var s=t("a60d");e["a"]=function(a,e){if(s["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(a,{openExternal:!0});var t=window.open(a,"_blank");if(t)return t.focus(),t;e()}},a766:function(a,e,t){},cba1:function(a,e,t){"use strict";var s=t("956a"),o=t.n(s);o.a},d2ee:function(a,e,t){"use strict";var s=t("5e43"),o=t.n(s);o.a},d321:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{},[t("div",{staticClass:"full-width page-item relative-position full-item-height"},[t("video-autoplay",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6"}),t("img",{staticClass:"image-over-video",attrs:{src:"statics/logo.png"}})],1),t("div",{staticClass:"full-width page-item row flex flex-center",staticStyle:{background:"#2B4853"}},[t("youtube-video",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{video:"https://www.youtube.com/embed/pdDRDfgn-gc"}})],1),t("div",{staticClass:"full-width page-item relative-position"},[t("slideshow",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{items:a.images}})],1),t("div",{staticClass:"full-width page-item row flex flex-center",staticStyle:{background:"#fff8e5"}},[t("story-text",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{title:"O Fandango das gerações",body:"Da batida dos tamancos ao sonido das violas. Da graciosidade da rabecas às letras que revelam um modo de vida característico, singular. Superagui vai muito além do som: o Fandango caiçara das roças, da comemoração de um casamento, de um festejo católico, ou por simplesmente reunir os amigos e a família no quintal das casas, aquele passado de pai para filho, de geração em geração, esse já não existe mais. As pessoas já não são mais as mesmas, é natural que o Fandango tenha assumido outras características. O que não é natural é que ele se perca. Arte da cultura popular ou espetáculo folclórico para turista ver? A classificação que divide opiniões entre os estudiosos, ganha sua própria maneira de existir (ou resistir) entre os que lutam pela perpetuação desta expressão musical-coreógrafa-poética-festiva, que no papel é tida como patrimônio imaterial do Brasil, mas e na prática? Tal como foi um dia, ele ainda é vivo na memória dos mais antigos. Hoje ele ressurge nos jovens com outras características, mas nunca deixando de fazer parte da identidade desse povo."}})],1)])},o=[];s._withStripped=!0;var i=t("0f0c"),n=t("e5ac"),r=t("e85c"),l=t("04f5"),c=t("65df"),u={name:"PageIndex",data:function(){return{images:["personagem-1.jpg","personagem-2.jpg","personagem-3.jpg","personagem-4.jpg","personagem-5.jpg","personagem-6.jpg","personagem-7.jpg","personagem-8.jpg","personagem-9.jpg","personagem-10.jpg","personagem-11.jpg","personagem-12.jpg"]}},components:{videoAutoplay:i["a"],storyText:n["a"],gallery:r["a"],youtubeVideo:l["a"],slideshow:c["a"]}},d=u,p=(t("4859"),t("2877")),m=Object(p["a"])(d,s,o,!1,null,null,null);m.options.__file="Congo.vue";e["default"]=m.exports},d477:function(a,e,t){"use strict";var s=t("1bc39"),o=t.n(s);o.a},e5ac:function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"text-container"},[t("h3",[a._v(a._s(a.title))]),t("div",{staticClass:"text-columns"},[a._v(a._s(a.body))])])},o=[];s._withStripped=!0;var i=t("96a1"),n={name:"story-text",props:["title","body"],data:function(){return{}},methods:{openURL:i["a"]}},r=n,l=(t("cba1"),t("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);c.options.__file="story-text.vue";e["a"]=c.exports},e85c:function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row gallery-container"},a._l(a.images,function(e,s){return t("div",{key:e,staticClass:"image-container q-pa-sm col-xs-12 relative-position",class:{"col-sm-6":s%3==0,"col-sm-3":s%3==1||s%3==2},staticStyle:{height:"auto","max-height":"200px"}},[t("div",{staticClass:"image-overlay-container"},[t("img",{staticClass:"gallery-image",attrs:{src:"statics/"+e}}),a._m(0,!0)])])}))},o=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"image-overlay"},[t("div",{staticClass:"image-info-text"},[a._v("Hello World")])])}];s._withStripped=!0;var i=t("96a1"),n={name:"gallery",props:["images"],data:function(){return{}},methods:{openURL:i["a"]}},r=n,l=(t("5383"),t("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);c.options.__file="gallery.vue";e["a"]=c.exports},f09f:function(a,e,t){"use strict";var s=t("7ac3"),o=t.n(s);o.a}}]);