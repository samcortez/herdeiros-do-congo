(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2066302f"],{"04f5":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row youtube-video-container"},[e("q-video",{staticStyle:{"margin-top":"20px","margin-bottom":"20px",height:"300px",width:"100%"},attrs:{src:a.video}})],1)},i=[];s._withStripped=!0;var o=e("96a1"),l={name:"youtube-video",props:["video"],data:function(){return{}},methods:{openURL:o["a"]}},r=l,n=(e("d477"),e("2877")),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="youtube-video.vue";t["a"]=c.exports},"0f0c":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("video",{staticClass:"full-video",attrs:{slot:"media",autoplay:"",autostart:"",loop:"",muted:""},domProps:{muted:!0},slot:"media"},[e("source",{attrs:{type:"video/mp4",src:a.video}})])},i=[];s._withStripped=!0;var o=e("96a1"),l={name:"video-autoplay",props:["video"],data:function(){return{}},methods:{openURL:o["a"]}},r=l,n=(e("d2ee"),e("2877")),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="video-autoplay.vue";t["a"]=c.exports},"1bc39":function(a,t,e){},5383:function(a,t,e){"use strict";var s=e("90be"),i=e.n(s);i.a},"5e43":function(a,t,e){},"65df":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-carousel",{attrs:{infinite:"",autoplay:"",arrows:"",color:"white"}},a._l(a.items,function(a){return e("q-carousel-slide",{key:a,attrs:{"img-src":"statics/"+a,"quick-nav":!1}})}))},i=[];s._withStripped=!0;var o=e("96a1"),l={name:"slideshow",props:["items"],data:function(){return{}},methods:{openURL:o["a"]}},r=l,n=(e("f09f"),e("2877")),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="slideshow.vue";t["a"]=c.exports},"7ac3":function(a,t,e){},"897b":function(a,t,e){"use strict";var s=e("c51e"),i=e.n(s);i.a},"90be":function(a,t,e){},"956a":function(a,t,e){},"96a1":function(a,t,e){"use strict";var s=e("a60d");t["a"]=function(a,t){if(s["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(a,{openExternal:!0});var e=window.open(a,"_blank");if(e)return e.focus(),e;t()}},"995d":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{},[e("div",{staticClass:"full-width page-item relative-position"},[e("slideshow",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{items:a.images}})],1),e("div",{staticClass:"full-width page-item relative-position full-item-height"},[e("video-autoplay",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6"}),e("img",{staticClass:"image-over-video",attrs:{src:"statics/logo.png"}})],1),e("div",{staticClass:"full-width page-item row flex flex-center",staticStyle:{background:"#fff8e5"}},[e("story-text",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{title:"O Fandango das gerações",body:"Da batida dos tamancos ao sonido das violas. Da graciosidade da rabecas às letras que revelam um modo de vida característico, singular. Superagui vai muito além do som: o Fandango caiçara das roças, da comemoração de um casamento, de um festejo católico, ou por simplesmente reunir os amigos e a família no quintal das casas, aquele passado de pai para filho, de geração em geração, esse já não existe mais. As pessoas já não são mais as mesmas, é natural que o Fandango tenha assumido outras características. O que não é natural é que ele se perca. Arte da cultura popular ou espetáculo folclórico para turista ver? A classificação que divide opiniões entre os estudiosos, ganha sua própria maneira de existir (ou resistir) entre os que lutam pela perpetuação desta expressão musical-coreógrafa-poética-festiva, que no papel é tida como patrimônio imaterial do Brasil, mas e na prática? Tal como foi um dia, ele ainda é vivo na memória dos mais antigos. Hoje ele ressurge nos jovens com outras características, mas nunca deixando de fazer parte da identidade desse povo."}})],1),e("div",{staticClass:"full-width page-item row flex flex-center",staticStyle:{background:"#ffffff"}},[e("gallery",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{images:a.images}})],1),e("div",{staticClass:"full-width page-item row flex flex-center",staticStyle:{background:"#2B4853"}},[e("youtube-video",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6",attrs:{video:"https://www.youtube.com/embed/pdDRDfgn-gc"}})],1)])},i=[];s._withStripped=!0;var o=e("0f0c"),l=e("e5ac"),r=e("e85c"),n=e("04f5"),c=e("65df"),u={name:"PageIndex",data:function(){return{images:["image_1.jpg","image_2.jpg","image_3.jpg","image_4.jpg","image_5.jpg"]}},components:{videoAutoplay:o["a"],storyText:l["a"],gallery:r["a"],youtubeVideo:n["a"],slideshow:c["a"]}},d=u,m=(e("897b"),e("2877")),p=Object(m["a"])(d,s,i,!1,null,null,null);p.options.__file="Legado.vue";t["default"]=p.exports},c51e:function(a,t,e){},cba1:function(a,t,e){"use strict";var s=e("956a"),i=e.n(s);i.a},d2ee:function(a,t,e){"use strict";var s=e("5e43"),i=e.n(s);i.a},d477:function(a,t,e){"use strict";var s=e("1bc39"),i=e.n(s);i.a},e5ac:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"text-container"},[e("h3",[a._v(a._s(a.title))]),e("div",{staticClass:"text-columns"},[a._v(a._s(a.body))])])},i=[];s._withStripped=!0;var o=e("96a1"),l={name:"story-text",props:["title","body"],data:function(){return{}},methods:{openURL:o["a"]}},r=l,n=(e("cba1"),e("2877")),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="story-text.vue";t["a"]=c.exports},e85c:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row gallery-container"},a._l(a.images,function(t,s){return e("div",{key:t,staticClass:"image-container q-pa-sm col-xs-12 relative-position",class:{"col-sm-6":s%3==0,"col-sm-3":s%3==1||s%3==2},staticStyle:{height:"auto","max-height":"200px"}},[e("div",{staticClass:"image-overlay-container"},[e("img",{staticClass:"gallery-image",attrs:{src:"statics/"+t}}),a._m(0,!0)])])}))},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"image-overlay"},[e("div",{staticClass:"image-info-text"},[a._v("Hello World")])])}];s._withStripped=!0;var o=e("96a1"),l={name:"gallery",props:["images"],data:function(){return{}},methods:{openURL:o["a"]}},r=l,n=(e("5383"),e("2877")),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="gallery.vue";t["a"]=c.exports},f09f:function(a,t,e){"use strict";var s=e("7ac3"),i=e.n(s);i.a}}]);