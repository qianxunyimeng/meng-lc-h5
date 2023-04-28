import{p as ee}from"./print-js-20ff36cf.js";import{t as te}from"./js-table2excel-d887c4ea.js";import{S as oe}from"./sortablejs-be94e56d.js";import{s as ae}from"./pinia-be7e992d.js";import{u as le}from"./index-c2aea3c3.js";import{a as ne}from"./element-plus-53094f07.js";import{k as N,e as re,$ as ie,j as S,ah as s,ar as se,o as c,c as _,R as ce,P as u,Q as p,W as l,T as z,F as v,a9 as T,u as f,L as pe,U as $,V as de,M as me,a as y,n as he,bb as ge,b9 as ue}from"./@vue-d9027515.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-0a4428f9.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";const be=r=>(ge("data-v-c7c80e8d"),r=r(),ue(),r),_e={class:"table-container"},ye={class:"table-footer mt15"},ke={class:"table-footer-tool"},Ce={class:"tool-box"},we=["data-key"],xe=be(()=>y("i",{class:"fa fa-arrows-alt handle cursor-pointer"},null,-1)),Se=N({name:"netxTable"}),ze=N({...Se,props:{data:{type:Array,default:()=>[]},header:{type:Array,default:()=>[]},config:{type:Object,default:()=>{}},printName:{type:String,default:()=>""}},emits:["delRow","pageChange","sortHeader"],setup(r,{expose:I,emit:g}){const n=r,V=re(),L=le(),{themeConfig:E}=ae(L),a=ie({page:{pageNum:1,pageSize:10},selectlist:[],checkListAll:!0,checkListIndeterminate:!1}),A=S(()=>!!n.config.isBorder),k=S(()=>n.config),R=S(()=>n.header.filter(t=>t.isCheck)),U=t=>{t?n.header.forEach(o=>o.isCheck=!0):n.header.forEach(o=>o.isCheck=!1),a.checkListIndeterminate=!1},j=()=>{const t=n.header.filter(o=>o.isCheck).length;a.checkListAll=t===n.header.length,a.checkListIndeterminate=t>0&&t<n.header.length},B=t=>{a.selectlist=t},D=t=>{g("delRow",t)},H=t=>{a.page.pageSize=t,g("pageChange",a.page)},P=t=>{a.page.pageNum=t,g("pageChange",a.page)},q=()=>{a.page.pageNum=1,a.page.pageSize=10,g("pageChange",a.page)},F=()=>{let t="",o="",i={};n.header.forEach(d=>{t+=`<th class="table-th">${d.title}</th>`}),n.data.forEach((d,h)=>{i[h]||(i[h]=[]),n.header.forEach(m=>{m.type==="text"?i[h].push(`<td class="table-th table-center">${d[m.key]}</td>`):m.type==="image"&&i[h].push(`<td class="table-th table-center"><img src="${d[m.key]}" style="width:${m.width}px;height:${m.height}px;"/></td>`)}),o+=`<tr>${i[h].join("")}</tr>`}),ee({printable:`<div style=display:flex;flex-direction:column;text-align:center><h3>${n.printName}</h3></div><table border=1 cellspacing=0><tr>${t}${o}</table>`,type:"raw-html",css:["//at.alicdn.com/t/c/font_2298093_rnp72ifj3ba.css","//unpkg.com/element-plus/dist/index.css"],style:"@media print{.mb15{margin-bottom:15px;}.el-button--small i.iconfont{font-size: 12px !important;margin-right: 5px;}}; .table-th{word-break: break-all;white-space: pre-wrap;}.table-center{text-align: center;}"})},M=()=>{if(a.selectlist.length<=0)return ne.warning("请先选择要导出的数据");te(n.header,a.selectlist,`${E.value.globalTitle} ${new Date().toLocaleString()}`)},O=()=>{g("pageChange",a.page)},W=()=>{he(()=>{const t=oe.create(V.value,{handle:".handle",dataIdAttr:"data-key",animation:150,onEnd:()=>{const o=[];t.toArray().forEach(i=>{n.header.forEach(d=>{d.key===i&&o.push({...d})})}),g("sortHeader",o)}})})};return I({pageReset:q}),(t,o)=>{const i=s("el-table-column"),d=s("el-image"),h=s("el-button"),m=s("el-popconfirm"),J=s("el-empty"),Q=s("el-table"),G=s("el-pagination"),b=s("SvgIcon"),K=s("el-tooltip"),C=s("el-checkbox"),X=s("el-scrollbar"),Y=s("el-popover"),Z=se("loading");return c(),_("div",_e,[ce((c(),u(Q,me({data:r.data,border:f(A)},t.$attrs,{"row-key":"id",stripe:"",style:{width:"100%"},onSelectionChange:B}),{empty:p(()=>[l(J,{description:"暂无数据"})]),default:p(()=>[r.config.isSelection?(c(),u(i,{key:0,type:"selection","reserve-selection":!0,width:"30"})):z("",!0),r.config.isSerialNo?(c(),u(i,{key:1,type:"index",label:"序号",width:"60"})):z("",!0),(c(!0),_(v,null,T(f(R),(e,w)=>(c(),u(i,{key:w,"show-overflow-tooltip":"",prop:e.key,width:e.colWidth,label:e.title},{default:p(x=>[e.type==="image"?(c(),u(d,{key:0,style:pe({width:`${e.width}px`,height:`${e.height}px`}),src:x.row[e.key],"zoom-rate":1.2,"preview-src-list":[x.row[e.key]],"preview-teleported":"",fit:"cover"},null,8,["style","src","zoom-rate","preview-src-list"])):(c(),_(v,{key:1},[$(de(x.row[e.key]),1)],64))]),_:2},1032,["prop","width","label"]))),128)),r.config.isOperate?(c(),u(i,{key:2,label:"操作",width:"100"},{default:p(e=>[l(m,{title:"确定删除吗？",onConfirm:w=>D(e.row)},{reference:p(()=>[l(h,{text:"",type:"primary"},{default:p(()=>[$("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})):z("",!0)]),_:1},16,["data","border"])),[[Z,r.config.loading]]),y("div",ye,[l(G,{"current-page":a.page.pageNum,"onUpdate:currentPage":o[0]||(o[0]=e=>a.page.pageNum=e),"page-size":a.page.pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>a.page.pageSize=e),"pager-count":5,"page-sizes":[10,20,30],total:r.config.total,layout:"total, sizes, prev, pager, next, jumper",background:"",onSizeChange:H,onCurrentChange:P},null,8,["current-page","page-size","total"]),y("div",ke,[l(b,{name:"iconfont icon-dayin",size:19,title:"打印",onClick:F}),l(b,{name:"iconfont icon-yunxiazai_o",size:22,title:"导出",onClick:M}),l(b,{name:"iconfont icon-shuaxin",size:22,title:"刷新",onClick:O}),l(Y,{placement:"top-end",trigger:"click",transition:"el-zoom-in-top","popper-class":"table-tool-popper",width:300,persistent:!1,onShow:W},{reference:p(()=>[l(b,{name:"iconfont icon-quanjushezhi_o",size:22,title:"设置"})]),default:p(()=>[y("div",Ce,[l(K,{content:"拖动进行排序",placement:"top-start"},{default:p(()=>[l(b,{name:"fa fa-question-circle-o",size:17,class:"ml11",color:"#909399"})]),_:1}),l(C,{modelValue:a.checkListAll,"onUpdate:modelValue":o[2]||(o[2]=e=>a.checkListAll=e),indeterminate:a.checkListIndeterminate,class:"ml10 mr1",label:"列显示",onChange:U},null,8,["modelValue","indeterminate"]),l(C,{modelValue:f(k).isSerialNo,"onUpdate:modelValue":o[3]||(o[3]=e=>f(k).isSerialNo=e),class:"ml12 mr1",label:"序号"},null,8,["modelValue"]),l(C,{modelValue:f(k).isSelection,"onUpdate:modelValue":o[4]||(o[4]=e=>f(k).isSelection=e),class:"ml12 mr1",label:"多选"},null,8,["modelValue"])]),l(X,null,{default:p(()=>[y("div",{ref_key:"toolSetRef",ref:V,class:"tool-sortable"},[(c(!0),_(v,null,T(r.header,e=>(c(),_("div",{class:"tool-sortable-item",key:e.key,"data-key":e.key},[xe,l(C,{modelValue:e.isCheck,"onUpdate:modelValue":w=>e.isCheck=w,size:"default",class:"ml12 mr8",label:e.title,onChange:j},null,8,["modelValue","onUpdate:modelValue","label"])],8,we))),128))],512)]),_:1})]),_:1})])])])}}});const pt=fe(ze,[["__scopeId","data-v-c7c80e8d"]]);export{pt as default};
