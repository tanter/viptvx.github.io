(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{336:function(t,e,n){},369:function(t,e,n){"use strict";n(336)},394:function(t,e,n){"use strict";n.r(e);var o={computed:{shouldShow:function(){return"undefined"==typeof window||null===window.localStorage.getItem("beta-banner-discarded")}},methods:{close:function(){window.localStorage.setItem("beta-banner-discarded",!0),this.$el.remove(),document.querySelector("html").classList.remove("with-beta-banner")}},beforeMount:function(){this.shouldShow&&document.querySelector("html").classList.add("with-beta-banner")}},s=(n(369),n(44)),i=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("ClientOnly",[this.shouldShow?e("aside",{staticClass:"app-banner"},[this._t("default"),this._v(" "),e("button",{ref:"closeButton",on:{click:this.close}},[this._v("Close")])],2):this._e()])}),[],!1,null,"59b1037a",null);e.default=i.exports}}]);