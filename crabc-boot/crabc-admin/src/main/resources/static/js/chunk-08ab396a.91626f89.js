(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08ab396a"],{"12f0":function(t,e,a){},2620:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("b680"),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a15b"),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__),_components_Charts_LineCharts_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("80af"),_components_Charts_SmoothLine_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("dc87"),_components_Charts_PieCharts_vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("e1f4"),_views_account_rangeDate_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("f3bb");__webpack_exports__.a={mixins:[_views_account_rangeDate_js__WEBPACK_IMPORTED_MODULE_9__.a],data:function(){return{consumersUser:[],serveName:[],reqCount:[],flowCount:[],timeCount:[],errorCount:[],count:{time:0,flow:0,req:0,err:0},iShow:!1,viserchar:!0,form:{appId:"",type:2,apiName:"",startTime:"",endTime:""}}},created:function(){this.getconsumersList(),this.initData(),this.getServeName()},methods:{initData:function(){this.getReqCount(),this.getFlowCount(),this.getTimeCount(),this.getErrorCount()},getconsumersList:function(){var t=this;this.$api.account.consumersUser().then((function(e){t.consumersUser=e.data}))},getServeName:function(){var t=this;this.$api.account.serveName(this.form).then((function(e){t.serveName=e.data||[]}))},getReqCount:function(){var t=this;this.$api.account.reqCount(this.form).then((function(e){var a=e.data[0]||[],i=e.data[1]||[],s=[],r=0;a.data.forEach((function(t,e){var a={};a.month=t.xaxis,a.Tokyo=t.yaxis,r+=t.yaxis,s.push(a)}));var _=0;i.data.forEach((function(t,e){s[e].London=t.yaxis,_+=t.yaxis})),t.count.req=r+_,t.reqCount=s;var n=[];t.reqCount.map((function(t){var e={month:t.month,"成功":t.Tokyo,"失败":t.London};n.push(e)})),t.reqCount=n}))},getFlowCount:function(){var t=this;this.$api.account.flowCount(this.form).then((function(e){var a=e.data||[],i=0,s=[];a.forEach((function(t){var e={};i+=Number(t.yaxis),e.year=t.xaxis,e.value=Number(t.yaxis),e.pany="KB",s.push(e)})),t.count.flow=i.toFixed(4),t.flowCount=s}))},getTimeCount:function(){var t=this;this.$api.account.timeCount(this.form).then((function(e){var a=e.data||[],i=[],s=0;a.forEach((function(t){var e={};s+=t.yaxis,e.year=t.xaxis,e.value=t.yaxis,e.pany="毫秒",i.push(e)})),t.count.time=s,t.timeCount=i}))},getErrorCount:function(){var t=this;this.$api.account.errorCount(this.form).then((function(e){var a=[{item:"成功",count:e.data.success},{item:"失败",count:e.data.fail}];t.errorCount=a||[],t.count.err=t.countPercentage([e.data.fail||0,e.data.success||0])}))},countPercentage:function countPercentage(countArray){var j=eval(countArray.join("+"));if(0!==j){for(var resultArray=[],i=0;i<countArray.length;i++){var k=Math.round(countArray[i]/j*100);resultArray.push(k)}return resultArray[1]}return 0},onSearch:function(){this.iShow=!0,-1!=this.form.type&&(this.form.startTime="",this.form.endTime=""),""==this.form.appId?(this.$message.info("请选择应用"),this.viserchar=!0):this.initData()},onChangeDate:function(t,e){if(""==e[0]&&(this.form.type="2"),t===this.ranges.近一小时)this.form.type=1;else if(t===this.ranges.近24小时)this.form.type=2;else if(t===this.ranges.近七天)this.form.type=3;else{if(0!==t.length)return this.form.startTime=this.$moment(t[0]).format("YYYY-MM-DD"),this.form.endTime=this.$moment(t[1]).format("YYYY-MM-DD"),this.form.type=-1,!0;this.form.startTime="",this.form.endTime=""}},onOk:function(){}},components:{LineCharts:_components_Charts_LineCharts_vue__WEBPACK_IMPORTED_MODULE_6__.a,PieCharts:_components_Charts_PieCharts_vue__WEBPACK_IMPORTED_MODULE_8__.a,SmoothCharts:_components_Charts_SmoothLine_vue__WEBPACK_IMPORTED_MODULE_7__.a}}},"307a":function(t,e,a){"use strict";a("12f0")},"4fa7":function(t,e,a){"use strict";a("dca3")},"80af":function(t,e,a){"use strict";var i=a("7104"),s={props:["lineData","type","time"],data:function(){return{height:400,htmlContent:function(t,e){for(var a='<div class="g2-tooltip"><div class="g2-tooltip-title" style="margin-bottom: 4px;">'+e[0].title+'</div><ul class="g2-tooltip-list">',i=0;i<e.length;i++){var s=e[i];a+='<li data-index={index}><span style="background-color:'+s.color+';width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span><span>流量<span class="g2-tooltip-value">'+s.value+"KB</span></li>"}return a+="</ul></div>"},timeContent:function(t,e){for(var a='<div class="g2-tooltip"><div class="g2-tooltip-title" style="margin-bottom: 4px;">'+e[0].title+'</div><ul class="g2-tooltip-list">',i=0;i<e.length;i++){var s=e[i];a+='<li data-index={index}><span style="background-color:'+s.color+';width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span><span>平均耗时<span class="g2-tooltip-value">'+s.value+"毫秒</span></li>"}return a+="</ul></div>"}}},computed:{currentUser:function(){return(new i.View).source(this.lineData)},scale:function(){return[{dataKey:"value",min:0},{dataKey:"year",range:[0,1],tickCount:3==this.time?8:17}]}}},r=(a("e947"),a("2877")),_=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-chart",{attrs:{forceFit:!0,height:this.height,data:this.currentUser,scale:this.scale}},[e("v-tooltip",{attrs:{htmlContent:"flow"===this.type?this.htmlContent:this.timeContent}}),e("v-axis"),e("v-legend"),e("v-smooth-line",{attrs:{position:"year*value",color:["#6962ff"],shape:"smooth"}}),e("v-point",{attrs:{position:"year*value",color:["#6962ff"],shape:"circle"}})],1)],1)}),[],!1,null,"2e3d36d0",null);e.a=_.exports},"8d56":function(t,e,a){"use strict";a.r(e);var i=a("2620").a,s=(a("307a"),a("2877")),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-traffic-statist"},[a("div",{staticClass:"page-message-select"},[a("a-row",{attrs:{type:"flex",justify:"end",gutter:8}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"page-measage-title"},[t._v("应用：")]),a("a-select",{staticStyle:{width:"180px"},attrs:{"default-value":"",getPopupContainer:function(t){return t.parentNode}},model:{value:t.form.appId,callback:function(e){t.$set(t.form,"appId",e)},expression:"form.appId"}},[a("a-select-option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.consumersUser,(function(e){return a("a-select-option",{key:e.consumerName,attrs:{value:e.consumerId}},[t._v(t._s(e.consumerName))])}))],2)],1),a("a-row",{attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"page-measage-title"},[t._v("服务名称：")]),a("a-select",{staticStyle:{width:"180px"},attrs:{"default-value":"",getPopupContainer:function(t){return t.parentNode}},model:{value:t.form.apiName,callback:function(e){t.$set(t.form,"apiName",e)},expression:"form.apiName"}},[a("a-select-option",{attrs:{value:""}},[t._v("所有")]),t._l(t.serveName,(function(e){return a("a-select-option",{key:e.apiName,attrs:{value:e.apiName}},[t._v(t._s(e.apiName))])}))],2)],1),a("a-row",{attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"page-measage-title"},[t._v("时间范围：")]),a("a-range-picker",{staticStyle:{width:"320px"},attrs:{ranges:t.ranges,ormat:"YYYY-MM-DD",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onChangeDate,ok:t.onOk}})],1),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("查询")])],1)],1),t.iShow?t._e():a("a-empty",{staticStyle:{"padding-top":"150px"},attrs:{description:"请选择应用"}}),t.iShow?a("div",{staticClass:"page-traffic-total"},[a("div",{staticClass:"info-title"},[t._v("概况")]),a("div",[a("ul",{staticClass:"info-total-main"},[a("li",[t._v(" 请求次数 "),a("span",[t._v(t._s(t.count.req))])]),a("li",[t._v(" 流量(KB) "),a("span",[t._v(t._s(t.count.flow))])]),a("li",[t._v(" 平均耗时(毫秒) "),a("span",[t._v(t._s(t.count.time))])]),a("li",[t._v(" 成功率(%) "),a("span",[t._v(t._s(t.count.err))])])])])]):t._e(),t.iShow?a("div",{staticClass:"page-traffic-trend"},[a("div",{staticClass:"info-title"},[t._v("走势")]),a("div",{staticClass:"page-info-chart"},[a("div",[a("div",{staticClass:"charts-title"},[t._v("请求次数（次）")]),t.viserchar?a("SmoothCharts",{attrs:{lineData:this.reqCount,time:t.form.type}}):t._e(),0===this.reqCount.length?a("div",{staticStyle:{padding:"50px"}},[t._v("暂无数据....")]):t._e()],1),a("div",[a("div",{staticClass:"charts-title"},[t._v("流量（KB）")]),a("LineCharts",{attrs:{lineData:this.flowCount,type:"flow",time:t.form.type}}),0===this.flowCount.length?a("div",{staticStyle:{padding:"50px"}},[t._v("暂无数据....")]):t._e()],1)]),a("div",{staticClass:"page-info-chart"},[a("div",[a("div",{staticClass:"charts-title"},[t._v("平均耗时（毫秒）")]),a("LineCharts",{attrs:{lineData:this.timeCount,type:"time",time:t.form.type}}),0===this.timeCount.length?a("div",{staticStyle:{padding:"50px"}},[t._v("暂无数据....")]):t._e()],1),a("div",[a("div",{staticClass:"charts-title"},[t._v("错误分布")]),a("PieCharts",{attrs:{lineData:this.errorCount}}),0===this.errorCount.length?a("div",{staticStyle:{padding:"50px"}},[t._v("暂无数据....")]):t._e()],1)])]):t._e()],1)}),[],!1,null,"17306162",null);e.default=r.exports},cc4d:function(t,e,a){},dc87:function(t,e,a){"use strict";var i=a("7104"),s={props:["lineData","time"],data:function(){return{height:400}},computed:{currentUser:function(){var t=(new i.View).source(this.lineData);return t.transform({type:"fold",fields:["成功","失败"],key:"city",value:"temperature"}),t},scale:function(){return[{dataKey:"month",range:[0,1],tickCount:3==this.time?8:15,formatter:function(t){return t}}]}},methods:{}},r=(a("4fa7"),a("2877")),_=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-chart",{staticClass:"ytd_modal_chart_container_tooltip",attrs:{forceFit:!0,height:this.height,data:this.currentUser,scale:this.scale}},[e("v-tooltip"),e("v-axis"),e("v-legend"),e("v-smooth-line",{attrs:{position:"month*temperature",color:["city",["#6962ff","#fa283d"]],shape:"smooth"}}),e("v-point",{attrs:{position:"month*temperature",color:["city",["#6962ff","#fa283d"]],shape:"circle"}})],1)],1)}),[],!1,null,"48097d44",null);e.a=_.exports},dca3:function(t,e,a){},e1f4:function(t,e,a){"use strict";var i=a("7104"),s={props:["lineData"],data:function(){return{scale:[{dataKey:"percent",min:0,formatter:".0%"}],height:400,pieStyle:{stroke:"#fff",lineWidth:1},labelConfig:["percent",{formatter:function(t,e){return e.point.item+": "+t}}]}},computed:{currentUser:function(){var t=(new i.View).source(this.lineData);return t.transform({type:"percent",field:"count",dimension:"item",as:"percent"}),t}}},r=a("2877"),_=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-chart",{attrs:{forceFit:!0,height:this.height,data:this.currentUser,scale:this.scale}},[e("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent",color:["item",["#6962ff","#fa283d"]]}}),e("v-axis"),e("v-legend",{attrs:{dataKey:"item"}}),e("v-pie",{attrs:{position:"percent",color:["item",["#6962ff","#fa283d"]],"v-style":this.pieStyle,label:this.labelConfig}}),e("v-coord",{attrs:{type:"theta"}})],1)],1)}),[],!1,null,"47abb03b",null);e.a=_.exports},e947:function(t,e,a){"use strict";a("cc4d")},f3bb:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i={data:function(){return{ranges:{"近一小时":[this.$moment().hours(this.$moment().hours()-1).startOf("hours"),this.$moment().hours(this.$moment().hours()-1).endOf("hours")],"近24小时":[this.$moment().day(this.$moment().day()-1).startOf("day"),this.$moment().day(this.$moment().day()-1).endOf("day")],"近七天":[this.$moment().add(-7,"d").startOf("add"),this.$moment().endOf()]}}}}}}]);