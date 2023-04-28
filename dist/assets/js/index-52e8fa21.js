import{_ as M}from"./index-7921be16.js";import{E as $,a as z}from"./element-plus-53094f07.js";import{k as w,aN as B,e as E,$ as S,i as A,ah as o,ar as R,o as d,c as V,W as t,Q as e,a as L,U as i,R as O,P as _,V as P,u as F}from"./@vue-d9027515.js";import"./pinia-be7e992d.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";const I={class:"system-dept-container layout-padding"},Q={class:"system-dept-search mb15"},U=w({name:"systemDept"}),Ct=w({...U,setup(W){const D=B(()=>M(()=>import("./dialog-f341d848.js"),["assets/js/dialog-f341d848.js","assets/js/@vue-d9027515.js"])),m=E(),a=S({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),c=()=>{a.tableData.loading=!0,a.tableData.data=[],a.tableData.data.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]}),a.tableData.total=a.tableData.data.length,setTimeout(()=>{a.tableData.loading=!1},500)},u=n=>{m.value.openDialog(n)},g=(n,l)=>{m.value.openDialog(n,l)},v=n=>{$.confirm(`此操作将永久删除部门：${n.deptName}, 是否继续?`,"提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{c(),z.success("删除成功")}).catch(()=>{})};return A(()=>{c()}),(n,l)=>{const y=o("el-input"),x=o("ele-Search"),f=o("el-icon"),p=o("el-button"),k=o("ele-FolderAdd"),s=o("el-table-column"),h=o("el-tag"),C=o("el-table"),T=o("el-card"),N=R("loading");return d(),V("div",I,[t(T,{shadow:"hover",class:"layout-padding-auto"},{default:e(()=>[L("div",Q,[t(y,{size:"default",placeholder:"请输入部门名称",style:{"max-width":"180px"}}),t(p,{size:"default",type:"primary",class:"ml10"},{default:e(()=>[t(f,null,{default:e(()=>[t(x)]),_:1}),i(" 查询 ")]),_:1}),t(p,{size:"default",type:"success",class:"ml10",onClick:l[0]||(l[0]=r=>u("add"))},{default:e(()=>[t(f,null,{default:e(()=>[t(k)]),_:1}),i(" 新增部门 ")]),_:1})]),O((d(),_(C,{data:a.tableData.data,style:{width:"100%"},"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:e(()=>[t(s,{prop:"deptName",label:"部门名称","show-overflow-tooltip":""}),t(s,{label:"排序","show-overflow-tooltip":"",width:"80"},{default:e(r=>[i(P(r.$index),1)]),_:1}),t(s,{prop:"status",label:"部门状态","show-overflow-tooltip":""},{default:e(r=>[r.row.status?(d(),_(h,{key:0,type:"success"},{default:e(()=>[i("启用")]),_:1})):(d(),_(h,{key:1,type:"info"},{default:e(()=>[i("禁用")]),_:1}))]),_:1}),t(s,{prop:"describe",label:"部门描述","show-overflow-tooltip":""}),t(s,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),t(s,{label:"操作","show-overflow-tooltip":"",width:"140"},{default:e(r=>[t(p,{size:"small",text:"",type:"primary",onClick:l[1]||(l[1]=b=>u("add"))},{default:e(()=>[i("新增")]),_:1}),t(p,{size:"small",text:"",type:"primary",onClick:b=>g("edit",r.row)},{default:e(()=>[i("修改")]),_:2},1032,["onClick"]),t(p,{size:"small",text:"",type:"primary",onClick:b=>v(r.row)},{default:e(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[N,a.tableData.loading]])]),_:1}),t(F(D),{ref_key:"deptDialogRef",ref:m,onRefresh:l[2]||(l[2]=r=>c())},null,512)])}}});export{Ct as default};
