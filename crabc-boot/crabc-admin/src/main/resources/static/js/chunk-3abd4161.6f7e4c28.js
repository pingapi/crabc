(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3abd4161"],{2095:function(t,e,s){"use strict";s("d3b7"),s("a9e3"),s("a15b"),s("d81d");var a=s("f933"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,s=0;return t.split("").reduce((function(t,a){var i=a.charCodeAt(0);return(s+=i>=0&&i<=128?1:2)<=e?t+a:t}),"")},o={name:"Ellipsis",components:{Tooltip:a.a},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(t,e){return(0,this.$createElement)("span",[i(t,this.length)+(e>this.length?"...":"")])},getTooltip:function(t,e){var s=this.$createElement;return s(a.a,[s("template",{slot:"title"},[t]),this.getStrDom(t,e)])}},render:function(){var t=this.$props,e=t.tooltip,s=t.length,a=this.$slots.default.map((function(t){return t.text})).join(""),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").reduce((function(t,e){var s=e.charCodeAt(0);return s>=0&&s<=128?t+1:t+2}),0)}(a);return e&&i>s?this.getTooltip(a,i):this.getStrDom(a,i)}},n=s("2877"),r=Object(n.a)(o,void 0,void 0,!1,null,null,null);e.a=r.exports},a0ec:function(t,e,s){},a2c3:function(t,e,s){},bba7:function(t,e,s){"use strict";s("a2c3")},e9bc:function(t,e,s){"use strict";s("a0ec")},f3bb:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var a={data:function(){return{ranges:{"近一小时":[this.$moment().hours(this.$moment().hours()-1).startOf("hours"),this.$moment().hours(this.$moment().hours()-1).endOf("hours")],"近24小时":[this.$moment().day(this.$moment().day()-1).startOf("day"),this.$moment().day(this.$moment().day()-1).endOf("day")],"近七天":[this.$moment().add(-7,"d").startOf("add"),this.$moment().endOf()]}}}}},fe5a:function(t,e,s){"use strict";s.r(e);s("d3b7"),s("159b");var a={props:{codeDataShow:{type:String,required:!0}},computed:{showData:function(){return JSON.parse(this.codeDataShow)}}},i=(s("e9bc"),s("2877")),o=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.showData?e("div",{staticClass:"ueditor"},[e("json-viewer",{attrs:{theme:"my-awesome-json-theme",value:this.showData,"expand-depth":2}})],1):this._e()}),[],!1,null,"190efa6e",null).exports,n=s("f3bb"),r=s("2095"),l={mixins:[n.a],data:function(){return{messageType:[],enterColumns:[{title:"接口名称",dataIndex:"apiName",key:"apiName",ellipsis:!0,width:150,scopedSlots:{customRender:"apiName"}},{title:"接口地址",dataIndex:"apiPath",key:"apiPath"},{title:"应用名称",dataIndex:"appName",key:"appName",width:120},{title:"请求时间",dataIndex:"requestTime",key:"requestTime",width:180,ellipsis:!0},{title:"IP地址",dataIndex:"requestIp",key:"requestIp",width:130,ellipsis:!0},{title:"耗时(ms)",dataIndex:"costTime",key:"costTime",width:100,ellipsis:!0,scopedSlots:{customRender:"costTime"}},{title:"结果",dataIndex:"requestStatus",key:"requestStatus",width:90,ellipsis:!0,scopedSlots:{customRender:"requestStatus"}},{title:"操作",dataIndex:"index",scopedSlots:{customRender:"index"},fixed:"right",width:110}],ishow:!1,form:{result:"",keyword:"",startTime:"",endTime:"",pageNum:1,pageSize:10},userLog:{}}},created:function(){this.getLogList()},computed:{tNumer:function(){var t=this.userLog.total||1;return Math.ceil(t/10)}},methods:{getLogList:function(){var t=this;this.$api.account.apiLog(this.form).then((function(e){if(0===e.code){var s=e.data||{};s.list?(s.list.forEach((function(e){e.operationBeginTime=t.$moment(e.operationBeginTime).format("YYYY-MM-DD  HH:mm:ss")})),t.userLog=s):t.userLog={},t.ishow=!0}}))},onSearch:function(){-1!=this.form.type&&(this.form.startTime="",this.form.endTime=""),this.form.pageNum=1,this.getLogList()},onChange:function(t,e){this.form.pageNum=t,this.getLogList()},onShowSizeChange:function(t,e){this.form.pageNum=1,this.form.pageSize=e,this.getLogList()},onDetail:function(t){this.$router.push({path:"/account/use-log/detail-user-Log"}),sessionStorage.setItem("DetailUesLog",JSON.stringify(t))},onChangeDate:function(t,e){if(""==e[0]&&(this.form.type=""),t===this.ranges.近一小时)this.form.type=1;else if(t===this.ranges.近24小时)this.form.type=2;else if(t===this.ranges.近七天)this.form.type=3;else{if(0!==t.length)return this.form.startTime=this.$moment(t[0]).format("yyyy-MM-DD"),this.form.endTime=this.$moment(t[1]).format("yyyy-MM-DD"),this.form.type=-1,!0;this.form.startTime="",this.form.endTime=""}},onCopy:function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),document.body.removeChild(e),this.$message.success("复制成功")},onOk:function(){}},components:{Code:o,Ellipsis:r.a}},u=(s("bba7"),Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-message-center"},[s("div",{staticClass:"page-message-select"},[s("a-row",{attrs:{type:"flex",justify:"end",gutter:16}},[s("a-row",{attrs:{type:"flex",align:"middle"}},[s("div",{staticClass:"page-measage-title"},[t._v("请求结果：")]),s("a-select",{staticStyle:{width:"90px"},attrs:{"default-value":"",getPopupContainer:function(t){return t.parentNode}},model:{value:t.form.result,callback:function(e){t.$set(t.form,"result",e)},expression:"form.result"}},[s("a-select-option",{attrs:{value:""}},[t._v("请选择")]),s("a-select-option",{attrs:{value:"success"}},[t._v("成功")]),s("a-select-option",{attrs:{value:"fail"}},[t._v("失败")])],1)],1),s("div",{staticClass:"search-name"},[s("div",{staticClass:"page-measage-title"},[t._v("关键字：")]),s("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入接口名称/地址"},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1),s("a-row",{attrs:{type:"flex",align:"middle"}},[s("div",{staticClass:"page-measage-title"},[t._v("时间范围：")]),s("a-range-picker",{staticStyle:{width:"320px"},attrs:{ranges:t.ranges,ormat:"YYYY-MM-DD",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onChangeDate,ok:t.onOk}})],1),s("a-button",{staticStyle:{"margin-left":"20px","margin-right":"10px"},attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("查询")])],1)],1),s("div",{staticClass:"page-measage-table"},[s("a-table",{attrs:{columns:t.enterColumns,"data-source":t.userLog.list,pagination:!1,rowKey:function(t,e){return e}},scopedSlots:t._u([{key:"requestBody",fn:function(e){return[s("a-popover",{attrs:{placement:"top"}},[s("template",{slot:"content"},[s("Code",{staticClass:"codeClass",attrs:{codeDataShow:e||{}}})],1),s("div",{staticClass:"res-copy-title"},[s("Ellipsis",{attrs:{length:40}},[t._v(t._s(e))])],1)],2)]}},{key:"costTime",fn:function(e){return[e>=1e3&&e<2e3?s("div",{staticStyle:{color:"#ffae03"}},[t._v(" "+t._s(e)+" ")]):e>=2e3?s("div",{staticStyle:{color:"#f95555"}},[t._v(t._s(e))]):s("div",[t._v(t._s(e))])]}},{key:"requestStatus",fn:function(e){return[s("div",{style:{color:"success"===e?"":"#F95555"}},[t._v(" "+t._s("success"===e?"成功":"失败")+" ")])]}},{key:"index",fn:function(e,a){return[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.onDetail(a)}}},[t._v("查看详情")])]}}])}),t.ishow?s("a-pagination",{staticStyle:{float:"right","margin-top":"20px"},attrs:{size:"small","show-quick-jumper":"","show-size-changer":"",pageSizeOptions:["10","20","50","100"],total:t.userLog.total,"page-size":t.form.pageSize,"show-total":function(t){return"共 "+t+"条"}},on:{showSizeChange:t.onShowSizeChange,change:t.onChange},model:{value:t.form.pageNum,callback:function(e){t.$set(t.form,"pageNum",e)},expression:"form.pageNum"}}):t._e()],1)])}),[],!1,null,"5d109ae2",null));e.default=u.exports}}]);