import{u as y}from"./vue-i18n-0a4428f9.js";import{s as C}from"./pinia-be7e992d.js";import{u as w,L as m}from"./index-c2aea3c3.js";import{k as c,$ as k,j as U,i as L,ah as n,o as V,c as N,W as a,Q as i,a as t,V as o,U as r,u as $}from"./@vue-d9027515.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";const B={class:"upgrade-dialog"},E={class:"upgrade-title"},O={class:"upgrade-title-warp"},z={class:"upgrade-title-warp-txt"},A={class:"upgrade-title-warp-version"},H={class:"upgrade-content"},I={class:"mt5"},S={class:"upgrade-content-desc mt5"},j={class:"upgrade-btn"},D=c({name:"layoutUpgrade"}),M=c({...D,setup(Q){const{t:p}=y(),u=w(),{themeConfig:_}=C(u),e=k({isUpgrade:!1,version:"2.4.33",isLoading:!1,btnTxt:""}),g=U(()=>_.value),f=()=>{e.isUpgrade=!1},v=()=>{e.isLoading=!0,e.btnTxt=p("message.upgrade.btnTwoLoading"),setTimeout(()=>{m.clear(),window.location.reload(),m.set("version",e.version)},2e3)},h=()=>{setTimeout(()=>{e.isUpgrade=!0},2e3)};return L(()=>{h(),setTimeout(()=>{e.btnTxt=p("message.upgrade.btnTwo")},200)}),(s,d)=>{const T=n("el-link"),l=n("el-button"),b=n("el-dialog");return V(),N("div",B,[a(b,{modelValue:e.isUpgrade,"onUpdate:modelValue":d[0]||(d[0]=x=>e.isUpgrade=x),width:"300px","destroy-on-close":"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},{default:i(()=>[t("div",E,[t("div",O,[t("span",z,o(s.$t("message.upgrade.title")),1),t("span",A,"v"+o(e.version),1)])]),t("div",H,[r(o($(g).globalTitle)+" "+o(s.$t("message.upgrade.msg"))+" ",1),t("div",I,[a(T,{type:"primary",class:"font12",href:"https://gitee.com/lyt-top/vue-next-admin/blob/master/CHANGELOG.md",target:"_black"},{default:i(()=>[r(" CHANGELOG.md ")]),_:1})]),t("div",S,o(s.$t("message.upgrade.desc")),1)]),t("div",j,[a(l,{round:"",size:"default",type:"info",text:"",onClick:f},{default:i(()=>[r(o(s.$t("message.upgrade.btnOne")),1)]),_:1}),a(l,{type:"primary",round:"",size:"default",loading:e.isLoading,onClick:v},{default:i(()=>[r(o(e.btnTxt),1)]),_:1},8,["loading"])])]),_:1},8,["modelValue"])])}}});const ke=G(M,[["__scopeId","data-v-80e7536e"]]);export{ke as default};
