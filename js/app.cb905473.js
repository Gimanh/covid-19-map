(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"07d1":function(e,t,a){},"1f68":function(e,t,a){},"39d6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},"41ce":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{staticClass:"app-tool-bar",attrs:{app:"",elevation:1}},[a("div",[a("v-toolbar-title",{staticStyle:{position:"relative"}},[a("v-icon",[e._v(" mdi-flask-empty-outline ")]),e._v(" COVID-19 MAP ")],1),a("span",{staticClass:"app-sub-title"},[e._v(" Stay home ")])],1),a("v-spacer"),a("share"),a("v-btn",{staticClass:"ma-1",attrs:{icon:e.showLikeIcon,text:""},on:{click:function(t){e.sheet=!0}}},[e.showLikeIcon?e._e():a("span",{staticClass:"mr-2"},[e._v(" About ")]),a("v-icon",[e._v(" mdi-information-outline ")])],1),a("v-btn",{class:e.showLikeIcon?"":"ma-1 white--text",attrs:{icon:e.showLikeIcon,color:"#a961c3"},on:{click:e.toggleHeatMap}},[a("v-icon",{attrs:{left:!e.showLikeIcon}},[e._v(" mdi-map-outline ")]),e.showLikeIcon?e._e():a("span",[e._v(" Heat map ")])],1),a("v-menu",{attrs:{transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({class:e.showLikeIcon?"":"ma-1 white--text",attrs:{icon:e.showLikeIcon,color:"#306dbc"}},r),[a("v-icon",{attrs:{left:!e.showLikeIcon}},[e._v(" mdi-calendar ")]),e.showLikeIcon?e._e():a("span",[e._v(" "+e._s(e.months[e.selectedMonth])+" ")])],1)]}}])},[a("v-list",e._l(e.dateData,(function(t,r){return a("v-list-item",{key:r,class:r===e.selectedMonth?"blue-grey lighten-4":"",on:{click:function(t){return e.selectMonth(r)}}},[a("v-list-item-title",[e._v(" "+e._s(e.months[r])+" ")])],1)})),1)],1)],1),a("v-content",[a("div",{staticClass:"d-flex justify-center flex-wrap"},[e._l(e.allowedLayers,(function(t){return a("div",{key:t.id,staticClass:"my-2 ma-1"},[a("v-btn",{class:t.id===e.selectedLayer.id?"color-lilac white--text":"",attrs:{depressed:"",small:"",rounded:""},on:{click:function(a){return e.selectLayer(t)}}},[e._v(" "+e._s(t.label)+": "+e._s(e.parseNumber(t.totalCount))+" ")])],1)})),a("div",{staticClass:"my-2 ma-1"},[a("v-btn",{staticStyle:{color:"black !important"},attrs:{text:"",depressed:"",small:"",rounded:"",disabled:""}},[e._v(" Active cases: "+e._s(e.parseNumber(e.activeCasesCount))+" ")])],1)],2),a("geo-map",{ref:"geoMap",on:{selectedLayerChanged:e.selectedLayerChanged}})],1),a("about",{attrs:{visible:e.sheet},on:{close:function(t){e.sheet=!1}}}),a("app-note")],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"ma-0 app-geo-container"},[a("div",{staticClass:"map-container",attrs:{id:"mapid"}},[a("div",{staticClass:"chart-container",on:{mousedown:function(e){e.stopPropagation()},touchstart:function(e){e.stopPropagation()}}},[a("v-btn",{staticClass:"app-play-button white--text",attrs:{fab:"",color:"#a961c3",absolute:"",disabled:e.nowPlaying},on:{click:e.playSelectedMonth}},[a("v-icon",[e._v("mdi-play")])],1),e.chartData.datasets.length>0?a("time-line",{ref:"timeLine",staticClass:"app-time-line-chart",attrs:{"chart-data":e.chartData},on:{selectedBarItem:e.selectedBarItem}}):e._e(),e.sliderLabels.length>0?a("v-slider",{staticClass:"app-slider ml-5",attrs:{max:e.sliderLabels.length-1,"thumb-label":"",dense:"",label:e.selectedDate},on:{change:e.sliderValueChanged},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var a=t.value;return[e._v(" "+e._s(e.parseDate(e.sliderLabels[a]).day)+" ")]}}],null,!1,2266319827),model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}}):e._e()],1)])])},i=[],c=(a("a4d3"),a("e01a"),a("d28b"),a("c975"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("ddb0"),a("96cf"),a("1da1")),l=a("e11e"),d=(a("2573"),a("a662"),a("369b")),u=a.n(d),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("bar-chart",{ref:"bar",staticClass:"app-bar-chart",attrs:{"chart-data":e.chartData},on:{selectedBarItem:e.selectedBarItem}})},f=[],b=(a("4160"),a("fb6a"),a("466d"),a("5319"),a("159b"),a("d4ec")),p=a("bee2"),v=a("99de"),m=a("7e84"),g=a("262e"),y=a("9ab4"),k=a("1fca"),w=a("60a3"),j=function(e){function t(){return Object(b["a"])(this,t),Object(v["a"])(this,Object(m["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),Object(p["a"])(t,[{key:"updateChart",value:function(){this.$data._chart.update()}},{key:"mounted",value:function(){var e=this;Chart.pluginService.register({afterInit:function(e,t){e.pluginInitialized=!0},afterDraw:function(e,t){if(e.pluginInitialized){for(var a=Math.floor(e.data.labels.length/2),r=0;r<e.data.datasets.length;r++)e.getDatasetMeta(r).data.forEach((function(e,t){var r=" 0.3)";if(t==a&&(r=" 1)"),e.custom=e.custom||{},void 0==e.custom.backgroundColor){var s=e._model.backgroundColor,n=null;if(n=s.match(/^#([a-fA-F0-9]{6})$/i)){s="rgb(",n=n[1];for(var o=0;o<3;o++)s+=parseInt(n.slice(2*o,2*o+2),16)+",";s+=r}e.custom.backgroundColor=s}}));e.pluginInitialized=!1,e.update(!0)}}}),this.renderChart(this.chartData,{legend:{position:"bottom"},maintainAspectRatio:!1,onClick:function(t,a){var r=this.getElementsAtXAxis(t);if(r){var s=r[0];e.$emit("selectedBarItem",s._model.label);for(var n=0;n<this.data.datasets.length;n++)this.getDatasetMeta(n).data.forEach((function(e,t){var a=/(rgba*\(\d{1,3}), *(\d{1,3}), *(\d{1,3}), *[0-9.]+(\))/;e._model.backgroundColor=e._model.backgroundColor.replace(a,"$1, $2, $3$4"),void 0!==e.custom&&delete e.custom.backgroundColor}));var o=this.active.length>0?this.active:r;o.forEach((function(e){e.custom=e.custom||{},void 0===e.custom.backgroundColor?e.custom.backgroundColor=e._model.backgroundColor.replace(")",", 0.99)"):delete e.custom.backgroundColor})),this.update(!0)}else console.error('Can not get elements in "Bar"')},responsive:!0,tooltips:{mode:"index",intersect:!1,callbacks:{labelColor:function(e,t){return{borderColor:t.data.datasets[e.datasetIndex].backgroundColor,backgroundColor:t.data.datasets[e.datasetIndex].hoverBackgroundColor}}}},scales:{xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{callback:function(e,t,a){return t%2===1?"":e}}}],yAxes:[{stacked:!0,gridLines:{display:!1},ticks:{display:!1}}]}})}}]),t}(w["c"]);Object(y["a"])([Object(w["b"])({type:Object,default:function(){return{labels:[],datasets:[]}}})],j.prototype,"chartData",void 0),j=Object(y["a"])([Object(w["a"])({extends:k["a"]})],j);var C,L,D=j,x={name:"TimeLine",components:{BarChart:D},props:{chartData:{type:Object,default:function(){return{labels:[],datasets:[]}}}},data:function(){return{}},methods:{selectedBarItem:function(e){this.$emit("selectedBarItem",e)},updateChart:function(){this.$refs.bar.updateChart()}}},A=x,M=(a("f154"),a("2877")),S=Object(M["a"])(A,h,f,!1,null,null,null),O=S.exports,z=a("bc3a"),_=a.n(z),I=(a("d81d"),a("a9e3"),a("07ac"),a("25f0"),function(){function e(){Object(b["a"])(this,e)}return Object(p["a"])(e,null,[{key:"csvToGeoJson",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{label:"Label 1",color:"#ccc",bgColor:"#cc6268"};if(e.data){var a=4,r={},s={},n={},o={labels:[],datasets:[]},i={};o.datasets.push({label:t.label,backgroundColor:t.color,hoverBackgroundColor:t.bgColor,barThickness:25,data:[]});for(var c=a;c<e.data[0].length;c++)n[c]=e.data[0][c],o.labels.push(e.data[0][c]);for(var l=1;l<e.data.length;l++)for(var d=e.data[l],u=d[2],h=d[3],f=d[1],b=d[0],p=a;p<d.length;p++){var v=Number(d[p]),m=n[p].split("/");r[m[0]]||(r[m[0]]={},s[m[0]]={},i[m[0]]={chartData:{labels:[],datasets:[{label:t.label,backgroundColor:t.color,hoverBackgroundColor:t.bgColor,categoryPercentage:1,barPercentage:.99,minBarLength:3,data:[]}]}}),r[m[0]][n[p]]||(r[m[0]][n[p]]={featureCollection:{type:"FeatureCollection",features:[]}},i[m[0]].chartData.labels.push(n[p])),s[m[0]].lastDate=n[p],r[m[0]][n[p]].featureCollection.features.push({type:"Feature",id:p+":"+n[p],properties:{region:f+(b?" ("+b+")":""),countIncidents:v},geometry:{type:"Point",coordinates:[Number(h),Number(u)]}});var g=p-a;void 0===o.datasets[0].data[g]?o.datasets[0].data.push(v):o.datasets[0].data[g]=o.datasets[0].data[g]+v}var y=Object.values(n);for(var k in i){var w=!0,j=!1,C=void 0;try{for(var L,D=i[k].chartData.labels[Symbol.iterator]();!(w=(L=D.next()).done);w=!0){var x=L.value,A=y.indexOf(x);-1!==A&&i[k].chartData.datasets[0].data.push(o.datasets[0].data[A])}}catch(M){j=!0,C=M}finally{try{w||null==D.return||D.return()}finally{if(j)throw C}}}return{monthsChart:i,chartData:o,timeline:r,dateData:s,lastDate:e.data[0].length-1,mapIndexDate:n}}}},{key:"geoJson2heat",value:function(e){return e.features.map((function(e){return[parseFloat(e.geometry.coordinates[1]),parseFloat(e.geometry.coordinates[0]),e.properties["countIncidents"]]}))}},{key:"numberWithSpaces",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}]),e}()),B={version:"0.0.5",lastUpdateDataDate:"31/03/2020",maxZoom:11,minZoom:1,months:{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"June",7:"July",8:"Aug",9:"Sept",10:"Oct",11:"Nov",12:"Dec"},defaultSelectedLayer:{id:"confirmed"},chart:{data:{confirmedFileName:"data/time_series_covid19_confirmed_global.csv",deathsFileName:"data/time_series_covid19_deaths_global.csv",recoveredFileName:"data/time_series_covid19_recovered_global.csv"},options:{confirmed:{label:"Confirmed",color:"rgba(94,44,217,0.30)",bgColor:"rgba(94,44,217,0.90)"},death:{label:"Death",color:"rgba(0,0,0,0.30)",bgColor:"rgba(0,0,0,0.90)"},recovered:{label:"Recovered",color:"rgba(229,30,134,0.30)",bgColor:"rgba(229,30,134,0.90)"}}},appUrl:"./",heatMap:{confirmed:{.6:"rgb(246,222,29)",.7:"rgb(252,162,38)",.5:"rgb(235,108,61)",.9:"rgb(207,68,87)",.4:"rgb(171,27,117)",.3:"rgb(124,0,148)",.2:"rgb(72,0,149)",.99:"rgba(31,1,128)"},death:{.1:"rgb(29,135,120)",.3:"rgb(33,105,120)",.46:"rgb(38,81,120)",.57:"rgb(47,55,116)",.95:"rgb(53,29,104)",1:"rgb(51,1,64)"},recovered:{.41:"rgb(77,50,148)",.55:"rgb(65,77,168)",.35:"rgb(49,105,181)",.45:"rgb(37,137,194)",.75:"rgb(46,162,178)",.95:"rgb(72,183,145)",1:"rgb(102,205,114)"}}},N={},E=r["default"].extend({name:"GeoMap",components:{TimeLine:O},data:function(){return{slider:0,sliderLabels:[],chartData:{labels:[],datasets:[]},layer:{confirmed:{},death:{},recovered:{}},selectedDate:"",selectedLayer:{id:"",label:"",totalCount:0},allowedLayers:[{id:"confirmed",label:"Confirmed",totalCount:0},{id:"death",label:"Death",totalCount:0},{id:"recovered",label:"Recovered",totalCount:0}],activeCasesCount:0,drawClusterLayer:!0,drawHeatMapLayer:!1,nowPlaying:!1}},computed:{layerLabel:function(){var e=!0,t=!1,a=void 0;try{for(var r,s=this.allowedLayers[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var n=r.value;if(this.selectedLayer.id===n.id)return n.label}}catch(o){t=!0,a=o}finally{try{e||null==s.return||s.return()}finally{if(t)throw a}}return""}},watch:{selectedDate:function(e){this.slider=this.sliderLabels.indexOf(e)}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.initMap(),t.next=3,e.fetchData(B.chart.data.confirmedFileName,B.chart.options.confirmed);case 3:return e.confirmed=t.sent,t.next=6,e.fetchData(B.chart.data.deathsFileName,B.chart.options.death);case 6:return e.death=t.sent,t.next=9,e.fetchData(B.chart.data.recoveredFileName,B.chart.options.recovered);case 9:e.recovered=t.sent,e.selectedLayer.id=B.defaultSelectedLayer.id,e.selectedLayer.label=e.layerLabel,e.selectedLayer.totalCount=e[e.selectedLayer.id].totalCount,e.selectedDate=e[e.selectedLayer.id].mapIndexDate[e[e.selectedLayer.id].lastDate],e.computeSlider(),e.drawClustersForSelectedLayer(),e.drawChart(),e.emitSelectedData();case 18:case"end":return t.stop()}}),t)})))()},methods:{selectDateInChart:function(){},sliderValueChanged:function(e){this.selectedBarItem(this.sliderLabels[e])},computeSlider:function(){var e=this.getParsedSelectedDate().month;this.sliderLabels=this[this.selectedLayer.id].monthsChart[e].chartData.labels,this.slider=this[this.selectedLayer.id].monthsChart[e].chartData.labels.length},getAllowedLayerById:function(e){var t=!0,a=!1,r=void 0;try{for(var s,n=this.allowedLayers[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var o=s.value;if(o.id===e)return o}}catch(i){a=!0,r=i}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}return!1},pushTotalCountToAllowedLayersForSelectedMonth:function(){var e=this.getParsedSelectedDate().month,t=!0,a=!1,r=void 0;try{for(var s,n=this.allowedLayers[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var o=s.value;o.totalCount=this[o.id].monthsChart[e].chartData.datasets[0].data[this[o.id].monthsChart[e].chartData.datasets[0].data.length-1]}}catch(d){a=!0,r=d}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}var i=this.getAllowedLayerById("confirmed"),c=this.getAllowedLayerById("death"),l=this.getAllowedLayerById("recovered");this.activeCasesCount=i.totalCount-c.totalCount-l.totalCount},parseDate:function(e){var t=[];return e?(t=e.split("/"),{month:t[0],day:t[1],year:t[2]}):{month:"",day:"",year:""}},emitSelectedData:function(){this.pushTotalCountToAllowedLayersForSelectedMonth(),this.computeSlider();var e={selectedLayer:this.selectedLayer,selectedDate:this.selectedDate,allowedLayers:this.allowedLayers,dateData:this[this.selectedLayer.id].dateData,selectedMonth:this.getParsedSelectedDate().month,activeCasesCount:this.activeCasesCount};this.$emit("selectedLayerChanged",e)},initMap:function(){var e=new l["LatLngBounds"](new l["LatLng"](90,180),new l["LatLng"](-90,-180));N=l["map"]("mapid",{maxZoom:B.maxZoom,minZoom:B.minZoom,maxBoundsViscosity:1,maxBounds:e,center:e.getCenter()}),l["tileLayer"]("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a target="_blank" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'}).addTo(N)},fetchData:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,_.a.get(B.appUrl+e);case 2:if(r=a.sent,200!==r.status){a.next=6;break}return s=u.a.parse(r.data),a.abrupt("return",I.csvToGeoJson(s,t));case 6:case"end":return a.stop()}}),a)})))()},getParsedSelectedDate:function(){var e=this.selectedDate.split("/");return{month:e[0],day:e[1],year:e[2]}},getGeoJsonForSelectedDate:function(){var e=this.getParsedSelectedDate();return this[this.selectedLayer.id].timeline[e.month][this.selectedDate].featureCollection},drawClustersForSelectedLayer:function(){this.drawClusters(this.getGeoJsonForSelectedDate()),this.drawHeatMap()},drawChart:function(){var e=this;this.chartData.labels=[],this.chartData.datasets=[];var t=this.getParsedSelectedDate().month;this.chartData.labels=this[this.selectedLayer.id].monthsChart[t].chartData.labels,this.chartData.datasets.push(this.confirmed.monthsChart[t].chartData.datasets[0]),this.chartData.datasets.push(this.death.monthsChart[t].chartData.datasets[0]),this.chartData.datasets.push(this.recovered.monthsChart[t].chartData.datasets[0]),r["default"].set(this,"chartData",this.chartData),this.$nextTick((function(){e.$refs.timeLine&&e.$refs.timeLine.updateChart()}))},drawHeatMap:function(){var e={radius:35,gradient:B.heatMap[this.selectedLayer.id],blur:50};if(L){if(!this.drawHeatMapLayer)return N.removeLayer(L),L=null,!1;var t=I.geoJson2heat(this.getGeoJsonForSelectedDate());L.setOptions(e),L.setLatLngs(t)}else if(this.drawHeatMapLayer){var a=I.geoJson2heat(this.getGeoJsonForSelectedDate());L=l["heatLayer"](a,e).addTo(N)}},drawClusters:function(e){if(C&&(N.removeLayer(C),!this.drawClusterLayer))return!1;var t=l["icon"]({iconUrl:a("39d6"),iconRetinaUrl:a("41ce"),iconSize:[25,41],iconAnchor:[15,41],popupAnchor:[-3,-35]});C=l["markerClusterGroup"]({removeOutsideVisibleBounds:!0,spiderfyOnMaxZoom:!1,animateAddingMarkers:!1,singleMarkerMode:!0,iconCreateFunction:function(e){var t=0,a=e.getAllChildMarkers();for(var r in a)t+=a[r].feature.properties.countIncidents;var s=" marker-cluster-";s+=t<100?"small":t<1e3?"medium":"large";var n=(t+"").length,o=n<=3?14*n:12*n,i=o-10;return new l["DivIcon"]({html:'<div style="width:'+i+"px; height: "+i+'px;"><span>'+t+"</span></div>",className:"marker-cluster"+s,iconSize:new l["Point"](o,o)})}});var r=l["geoJSON"](e,{onEachFeature:function(e,a){a.setIcon(t),a.bindPopup(e.properties.region)}});C.addLayer(r),N.addLayer(C),N.fitBounds(C.getBounds())},selectedBarItem:function(e){this.selectedDate=e,this.drawClustersForSelectedLayer(),this.emitSelectedData()},switchOnLayer:function(e){this.selectedLayer=e,this.emitSelectedData(),this.drawClustersForSelectedLayer()},setSelectedMonth:function(e){this.selectedDate=this[this.selectedLayer.id].dateData[e].lastDate,this.emitSelectedData(),this.drawClustersForSelectedLayer(),this.drawChart()},playSelectedMonth:function(){var e=this;this.nowPlaying||(N.fitBounds(C.getBounds()),setTimeout((function(){e.nowPlaying=!0;var t=0;e.drawClusterLayer=!1;var a=e.drawHeatMapLayer;e.drawHeatMapLayer=!0;var r=setInterval((function(){e[e.selectedLayer.id].chartData.labels[t]?(e.selectedBarItem(e[e.selectedLayer.id].chartData.labels[t]),e.drawChart()):(clearInterval(r),e.nowPlaying=!1,e.drawHeatMapLayer=a,e.drawClusterLayer=!0,e.drawClustersForSelectedLayer()),t++}),100)}),1e3))},toggleHeatMap:function(){this.drawHeatMapLayer=!this.drawHeatMapLayer,this.drawHeatMap()}}}),F=E,H=Object(M["a"])(F,o,i,!1,null,null,null),J=H.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{scrollable:"","max-width":"500px",persistent:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("v-card",[a("v-card-title",[e._v("About")]),a("v-divider"),a("v-card-text",{staticClass:"pa-0",staticStyle:{height:"300%"}},[a("v-card",{staticClass:"ma-2"},[a("v-card-title",[e._v("Sources")]),a("v-card-text",[a("p",[a("a",{attrs:{target:"_blank",href:"https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"}},[e._v(" Johns Hopkins University ")])]),a("p",[e._v(" GitHub data repository "),a("a",{attrs:{target:"_blank",href:"https://github.com/CSSEGISandData/COVID-19"}},[e._v("Johns Hopkins University COVID-19")])]),a("p",[e._v(" Map data © "),a("a",{attrs:{target:"_blank",href:"https://www.openstreetmap.org/"}},[e._v("OpenStreetMap")])]),a("p",[a("strong",[e._v(" Last data update "+e._s(e.lastUpdateDataDate)+" ")])])])],1),a("v-card",{staticClass:"ma-2"},[a("v-card-title",[e._v("Note")]),a("v-card-text",[a("p",[a("strong",[e._v(" Confirmed cases include presumptive positive cases. Point level: Province/State level - China, US, Canada, Australia; Country level - other countries. All points shown on the map are based on geographic centroids, and are not representative of a specific address, building or any location at a spatial scale finer than a province/state. ")])]),a("p",[a("strong",[e._v(" The Website relies upon publicly available data from multiple sources, that do not always agree. We hereby disclaims any and all representations and warranties with respect to the Website, including accuracy, fitness for use, and merchantability. Reliance on the Website for medical guidance or use of the Website in commerce is strictly prohibited. ")])])])],1),a("v-card",{staticClass:"ma-2"},[a("v-card-title",[e._v("Source code")]),a("v-card-text",[a("p",[e._v(" Application published "),a("a",{attrs:{target:"_blank",href:"https://github.com/Gimanh/covid-19-map"}},[e._v("Here")]),e._v(" v"+e._s(e.version)+" ")])])],1),a("v-card",{staticClass:"ma-2"},[a("v-card-title",[e._v("Authors")]),a("v-card-text",[a("div",[a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/nikolay-giman/"}},[e._v(" Giman Nikolay ")])]),a("div",[a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/kirichenkox/"}},[e._v(" Kirichenko Alexander ")])])])],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.emitClose}},[e._v(" Ok ")])],1)],1)],1)},T=[],U={name:"About",props:{visible:{type:Boolean,default:!0}},data:function(){return{version:B.version,lastUpdateDataDate:B.lastUpdateDataDate}},methods:{emitClose:function(){this.$emit("close")}}},V=U,R=Object(M["a"])(V,P,T,!1,null,null,null),W=R.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:""}},r),[a("v-icon",[e._v(" mdi-share-variant ")])],1)]}}])},[a("v-list",e._l(e.socialItems,(function(e,t){return a("v-list-item",{key:t,on:{click:function(e){}}},[a("v-list-item-title",[a("social-sharing",{attrs:{url:"https://gimanh.github.io/covid19mapvisualisation/",title:"COVID-19 Map",description:"COVID-19 Map visualisation",hashtags:"covid-19,covid-19Map"},inlineTemplate:{render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("network",{attrs:{network:e.network}},[r("v-icon",[t._v(t._s(e.icon))]),t._v(" "+t._s(e.label)+" ")],1)},staticRenderFns:[]}})],1)],1)})),1)],1)},q=[],Z={name:"Share",data:function(){return{shareDialog:!1,socialItems:[{network:"facebook",label:"Facebook",icon:"mdi-facebook"},{network:"twitter",label:"Twitter",icon:"mdi-twitter"},{network:"linkedin",label:"LinkedIn",icon:"mdi-linkedin"},{network:"vk",label:"Vkontakte",icon:"mdi-vk"},{network:"whatsapp",label:"WhatsApp",icon:"mdi-whatsapp"},{network:"telegram",label:"Telegram",icon:"mdi-telegram"},{network:"viber",label:"Viber",icon:"mdi-message-text"}]}}},X=Z,Y=Object(M["a"])(X,K,q,!1,null,"97f8d1f2",null),G=Y.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":"300px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v(" Note ")]),a("v-divider"),a("v-card-text",{staticStyle:{height:"100%"}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[e._v(" 1. Zoom in on a map to see country statistics ")])],1),a("v-list-item",[a("v-list-item-content",[a("span",[e._v(" 2. Press the button "),a("v-icon",[e._v(" mdi-map-outline ")]),e._v(" to see a heat map ")],1)])],1),a("v-list-item",[a("v-list-item-content",[a("span",[e._v(" 3. Press the button "),a("v-icon",[e._v(" mdi-play ")]),e._v(" to see how COVID-19 spreads ")],1)])],1),a("v-list-item",[a("v-list-item-content",[a("span",[e._v(" 4. You can see statistics for any day. Press the button "),a("v-icon",[e._v(" mdi-calendar ")]),e._v(" to select a month. Click on the chart bar at the bottom of the screen to select a day ")],1)])],1),a("v-list-item",[a("v-list-item-content",[a("strong",[a("span",[e._v(" 5. Stay home ")])])])],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){e.dialog=!1}}},[e._v(" Ok ")])],1)],1)],1)},$=[],ee={name:"AppNote",data:function(){return{dialog:!0,items:[]}}},te=ee,ae=Object(M["a"])(te,Q,$,!1,null,"4e9905c0",null),re=ae.exports,se=r["default"].extend({name:"App",components:{GeoMap:J,About:W,Share:G,AppNote:re},data:function(){return{selectedLayer:{id:"",label:"",totalCount:0},selectedMonth:"",selectedDate:"",allowedLayers:[],sheet:!1,dateData:{},months:B.months,activeCasesCount:0,windowWidth:1e3,shareDialog:!0}},computed:{showLikeIcon:function(){return this.windowWidth<900}},mounted:function(){var e=this;this.windowWidth=window.innerWidth;var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",(function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),e.windowWidth=window.innerWidth}))},methods:{selectLayer:function(e){this.$refs.geoMap.switchOnLayer(e)},selectedLayerChanged:function(e){this.selectedLayer=e.selectedLayer,this.selectedDate=e.selectedDate,this.allowedLayers=e.allowedLayers,this.dateData=e.dateData,this.selectedMonth=e.selectedMonth,this.activeCasesCount=e.activeCasesCount},selectMonth:function(e){this.$refs.geoMap.setSelectedMonth(e)},playSelectedMonth:function(){this.$refs.geoMap.playSelectedMonth()},toggleHeatMap:function(){this.$refs.geoMap.toggleHeatMap()},parseNumber:function(e){return I.numberWithSpaces(e)}}}),ne=se,oe=Object(M["a"])(ne,s,n,!1,null,null,null),ie=oe.exports,ce=a("8c4f");r["default"].use(ce["a"]);var le=[],de=new ce["a"]({mode:"history",base:"",routes:le}),ue=de,he=a("2f62");r["default"].use(he["a"]);var fe=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}}),be=a("ce5b"),pe=a.n(be);a("bf40");r["default"].use(pe.a);var ve=new pe.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"md"}}),me=a("5299"),ge=a.n(me);r["default"].use(ge.a);a("d5e8"),a("5363"),a("1f68"),a("6cc5"),a("8243"),a("3ac1");r["default"].config.productionTip=!1,new r["default"]({router:ue,store:fe,vuetify:ve,render:function(e){return e(ie)}}).$mount("#app")},f154:function(e,t,a){"use strict";var r=a("07d1"),s=a.n(r);s.a}});
//# sourceMappingURL=app.cb905473.js.map