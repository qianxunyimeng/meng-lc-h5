import{_ as b,c as D,u as P,a as H,e as a}from"./index-c2aea3c3.js";import{k as A,aN as L,e as N,$ as I,j as g,H as O,f as S,ah as F,R as $,X as j,u as n,o as R,c as q,W as p,Q as w,P as z,T as K,K as Q}from"./@vue-d9027515.js";import{s as f}from"./pinia-be7e992d.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";import"./vue-demi-71ba0ef2.js";const X={class:"h100"},G=A({name:"layoutAside"}),Ee=A({...G,setup(J){const T=L(()=>b(()=>import("./index-1d775dcc.js"),["assets/js/index-1d775dcc.js","assets/js/pinia-be7e992d.js","assets/js/vue-demi-71ba0ef2.js","assets/js/@vue-d9027515.js","assets/js/index-c2aea3c3.js","assets/js/vue-router-a2fac16f.js","assets/js/vue-i18n-0a4428f9.js","assets/js/@intlify-ea47d1db.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-0d97455d.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-96a31696.js","assets/js/nprogress-08a53ce8.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-707ed124.js","assets/js/qs-de266cd2.js","assets/js/side-channel-53d8bc92.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-6799e9cc.js","assets/js/object-inspect-8fd4bade.js","assets/js/element-plus-53094f07.js","assets/js/lodash-es-36eb724a.js","assets/js/@vueuse-2d9216d7.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-f6fdf7b4.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-b8998962.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-8a8891e3.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-17dc42b6.js","assets/css/index-ed582937.css","assets/js/logo-mini-eb5e0576.js","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/index-03ca6d89.css"])),M=L(()=>b(()=>import("./vertical-24cafebd.js"),["assets/js/vertical-24cafebd.js","assets/js/index-c2aea3c3.js","assets/js/@vue-d9027515.js","assets/js/pinia-be7e992d.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-a2fac16f.js","assets/js/vue-i18n-0a4428f9.js","assets/js/@intlify-ea47d1db.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-0d97455d.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-96a31696.js","assets/js/nprogress-08a53ce8.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-707ed124.js","assets/js/qs-de266cd2.js","assets/js/side-channel-53d8bc92.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-6799e9cc.js","assets/js/object-inspect-8fd4bade.js","assets/js/element-plus-53094f07.js","assets/js/lodash-es-36eb724a.js","assets/js/@vueuse-2d9216d7.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-f6fdf7b4.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-b8998962.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-8a8891e3.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-17dc42b6.js","assets/css/index-ed582937.css"])),u=N(),v=D(),B=P(),E=H(),{routesList:y}=f(v),{themeConfig:o}=f(B),{isTagsViewCurrenFull:W}=f(E),l=I({menuList:[],clientWidth:0}),V=g(()=>{const{layout:e,isCollapse:t,menuBar:s}=o.value,i=["#FFFFFF","#FFF","#fff","#ffffff"].includes(s)?"layout-el-aside-br-color":"";if(l.clientWidth<=1e3)if(t){document.body.setAttribute("class","el-popup-parent--hidden");const x=document.querySelector(".layout-container"),d=document.createElement("div");return d.setAttribute("class","layout-aside-mobile-mode"),x.appendChild(d),d.addEventListener("click",c),[i,"layout-aside-mobile","layout-aside-mobile-open"]}else return c(),[i,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"||e==="classic"?t?[i,"layout-aside-pc-1"]:[i,"layout-aside-pc-220"]:t?[i,"layout-aside-pc-64"]:[i,"layout-aside-pc-220"]}),k=g(()=>{const{layout:e,isShowLogo:t}=o.value;return t&&e==="defaults"||t&&e==="columns"}),c=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var s;(s=e==null?void 0:e.parentNode)==null||s.removeChild(e)},300),document.body.clientWidth<1e3&&(o.value.isCollapse=!1),document.body.setAttribute("class","")},m=()=>{if(o.value.layout==="columns")return!1;l.menuList=h(y.value)},h=e=>e.filter(t=>{var s;return!((s=t.meta)!=null&&s.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=h(t.children)),t)),_=e=>{l.clientWidth=e},C=e=>{const{layout:t}=o.value;if(t!=="columns")return!1;e||a.emit("restoreDefault"),o.value.isColumnsMenuHoverPreload&&v.setColumnsMenuHover(e)};return O(()=>{_(document.body.clientWidth),m(),a.on("setSendColumnsChildren",e=>{l.menuList=e.children}),a.on("setSendClassicChildren",e=>{const{layout:t,isClassicSplitMenu:s}=o.value;t==="classic"&&s&&(e.children.length<=1?o.value.isCollapse=!0:o.value.isCollapse=!1,l.menuList=[],l.menuList=e.children)}),a.on("getBreadcrumbIndexSetFilterRoutes",()=>{m()}),a.on("layoutMobileResize",e=>{_(e.clientWidth),c()})}),S(()=>[o.value.isShowLogoChange,o.value.isShowLogo,o.value.layout,o.value.isClassicSplitMenu],([e,t,s,r])=>{if(e!==t&&u.value&&u.value.update(),s==="classic"&&r)return!1}),S(()=>y.value,()=>{m()}),(e,t)=>{const s=F("el-scrollbar"),r=F("el-aside");return $((R(),q("div",X,[p(r,{class:Q(["layout-aside",n(V)])},{default:w(()=>[n(k)?(R(),z(n(T),{key:0})):K("",!0),p(s,{ref_key:"layoutAsideScrollbarRef",ref:u,class:"flex-auto",onMouseenter:t[0]||(t[0]=i=>C(!0)),onMouseleave:t[1]||(t[1]=i=>C(!1))},{default:w(()=>[p(n(M),{"menu-list":l.menuList},null,8,["menu-list"])]),_:1},512)]),_:1},8,["class"])],512)),[[j,!n(W)]])}}});export{Ee as default};
